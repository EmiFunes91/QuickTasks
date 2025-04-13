#!/bin/bash

# ----------------------------------------
# 🚀 QuickTasks Start Script
# Autor: Emilio Funes
# ----------------------------------------

# 🧩 Configuración de colores para mensajes
GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 📁 Paths relativos
BACKEND_DIR="backend"
FRONTEND_DIR="frontend"
BACKEND_LOG="logs/backend.log"
FRONTEND_LOG="logs/frontend.log"
USE_WATCHER=true  # Reinicio automático si cambia backend

# 🔃 Función para iniciar Docker
iniciar_docker() {
  echo -e "${CYAN}🐳 Iniciando servicios con Docker Compose...${NC}"
  cd "$BACKEND_DIR" || exit
  docker-compose up -d
  cd ..
}

# ☕ Iniciar backend Spring Boot
iniciar_backend() {
  echo -e "${CYAN}☕ Iniciando backend (Spring Boot)...${NC}"
  cd "$BACKEND_DIR" || exit
  if [ "$USE_WATCHER" = true ]; then
    ./mvnw spring-boot:run -Dspring-boot.run.fork=true \
      -Dspring-boot.run.profiles=dev > "../$BACKEND_LOG" 2>&1 &
  else
    ./mvnw spring-boot:run > "../$BACKEND_LOG" 2>&1 &
  fi
  cd ..
}

# 🌐 Iniciar frontend Vite
iniciar_frontend() {
  echo -e "${CYAN}🌐 Iniciando frontend (Vite)...${NC}"
  cd "$FRONTEND_DIR" || exit
  npm run dev > "../$FRONTEND_LOG" 2>&1 &
  cd ..
}

# 📜 Mostrar acceso
mostrar_urls() {
  echo -e "${GREEN}"
  echo "✅ Entorno iniciado con éxito"
  echo -e "🔗 Backend:    http://localhost:8080"
  echo -e "🔗 Frontend:   http://localhost:5173"
  echo -e "${NC}"
}

# 🚨 Validación
validar_entorno() {
  if ! command -v docker &>/dev/null; then
    echo -e "${RED}✖ Docker no está instalado o en PATH${NC}"
    exit 1
  fi

  if ! command -v mvn &>/dev/null && [ ! -f "$BACKEND_DIR/mvnw" ]; then
    echo -e "${RED}✖ Maven o mvnw no encontrado en backend/${NC}"
    exit 1
  fi

  if ! command -v npm &>/dev/null; then
    echo -e "${RED}✖ npm no está instalado${NC}"
    exit 1
  fi
}

# 📦 Build de frontend (opcional)
# construir_frontend() {
#   echo -e "${YELLOW}⚙️ Compilando frontend para producción...${NC}"
#   cd "$FRONTEND_DIR" || exit
#   npm run build
#   cd ..
# }

# 🧪 Tests automatizados (opcional con Newman/Postman)
# ejecutar_tests() {
#   echo -e "${CYAN}🧪 Ejecutando pruebas...${NC}"
#   newman run postman/quicktasks_tests.postman_collection.json || echo "❌ Pruebas fallidas"
# }

# 🚀 Ejecución en orden
main() {
  validar_entorno
  mkdir -p logs
  iniciar_docker
  sleep 3
  iniciar_backend
  sleep 5
  iniciar_frontend
  sleep 2
  mostrar_urls
}

main


