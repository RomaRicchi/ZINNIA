#!/bin/bash

# ============================================
# SCRIPT DE DEPLOY PARA ZINNIA
# Ejecutar desde el servidor
# ============================================

set -e  # Salir si hay errores

INSTALL_DIR="/var/www/zinnia"

echo "=========================================="
echo "🔄 DEPLOY DE ZINNIA"
echo "=========================================="

# 1. Navegar al directorio del proyecto
cd $INSTALL_DIR

# 2. Hacer git pull para actualizar código
echo ""
echo "📥 Actualizando código desde GitHub..."
git pull origin main

# 3. Reconstruir imagen Docker
echo ""
echo "🔨 Reconstruyendo imagen Docker..."
sudo docker compose build

# 4. Reiniciar contenedor
echo ""
echo "🚀 Reiniciando contenedor..."
sudo docker compose up -d

# 5. Verificar estado
echo ""
echo "🔍 Verificando estado del contenedor..."
sudo docker compose ps

echo ""
echo "=========================================="
echo "✅ DEPLOY COMPLETADO"
echo "=========================================="
echo ""
echo "🌐 Tu aplicación está en:"
echo "   http://$(hostname -I | awk '{print $1}'):4321"
echo ""
echo "📝 Ver logs en tiempo real:"
echo "   sudo docker compose logs -f"
echo ""
