#!/bin/bash

# Colores para mejorar visibilidad en consola
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}🔍 Verificando requisitos...${NC}"

# Validar Docker
if ! command -v docker &> /dev/null; then
  echo -e "${RED}❌ Docker no está instalado. Abortando.${NC}"
  exit 1
fi

# Validar Maven Wrapper
if [ ! -f "backend/mvnw" ]; then
  echo -e "${RED}❌ No se encontró el wrapper de Maven (mvnw) en /backend. Abortando.${NC}"
  exit 1
fi

# Validar npm
if ! command -v npm &> /dev/null; then
  echo -e "${RED}❌ npm no está instalado. Abortando.${NC}"
  exit 1
fi

# Validar puertos disponibles
check_port() {
  local port=$1
  if lsof -i ":$port" &>/dev/null; then
    echo -e "${RED}⚠️ El puerto $port ya está en uso. Cerralo o modificá la configuración.${NC}"
    exit 1
  fi
}
check_port 5432 # PostgreSQL
check_port 8080 # Backend
check_port 5173 # Frontend

# Iniciar Docker
echo -e "${CYAN}🚢 Iniciando Docker Compose...${NC}"
cd backend || exit
docker-compose up -d || { echo -e "${RED}❌ Falló Docker Compose.${NC}"; exit 1; }
echo -e "${GREEN}✅ Docker Compose levantado.${NC}"

# Iniciar Backend
echo -e "${CYAN}⚙️ Iniciando Backend Spring Boot...${NC}"
./mvnw spring-boot:run &
BACKEND_PID=$!

echo -e "${YELLOW}⏳ Esperando 10 segundos a que arranque el backend...${NC}"
sleep 10

# Iniciar Frontend
echo -e "${CYAN}🌐 Iniciando Frontend Vite...${NC}"
cd ../frontend || exit
npm run dev &
FRONTEND_PID=$!

# Abrir navegador (solo Windows)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  echo -e "${CYAN}🧭 Abriendo http://localhost:5173 en tu navegador...${NC}"
  start http://localhost:5173
fi

# Esperar que se cierre el frontend manualmente
wait $FRONTEND_PID

# Finalizar backend cuando se cierra frontend
echo -e "${YELLOW}🛑 Deteniendo backend...${NC}"
kill $BACKEND_PID

