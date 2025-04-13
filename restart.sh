#!/bin/bash

echo "🔁 Reiniciando entorno QuickTasks..."
echo "🛑 Deteniendo servicios actuales..."
./stop.sh

echo "⏳ Esperando 2 segundos antes de iniciar..."
sleep 2

echo "🚀 Iniciando servicios nuevamente..."
./start.sh
