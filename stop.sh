#!/bin/bash

echo "🛑 Deteniendo entorno completo..."

# Detiene servicios Docker
docker compose down

# Termina backend si está corriendo
PID_BACKEND=$(lsof -ti :8080)
if [ -n "$PID_BACKEND" ]; then
  kill "$PID_BACKEND"
  echo "☕ Backend detenido."
else
  echo "☕ Backend ya estaba detenido."
fi

# Termina frontend si está corriendo
PID_FRONTEND=$(lsof -ti :5173)
if [ -n "$PID_FRONTEND" ]; then
  kill "$PID_FRONTEND"
  echo "🌐 Frontend detenido."
else
  echo "🌐 Frontend ya estaba detenido."
fi

echo "✅ Entorno detenido con éxito."
