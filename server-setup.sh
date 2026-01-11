#!/bin/bash

# ============================================
# SCRIPT DE SETUP INICIAL PARA ZINNIA
# Ubuntu 22.04 / 24.04
# ============================================

set -e  # Salir si hay errores

REPO_URL="https://github.com/RomaRicchi/ZINNIA.git"
INSTALL_DIR="/var/www/zinnia"

echo "=========================================="
echo "🚀 SETUP INICIAL DE ZINNIA"
echo "=========================================="

# 1. Actualizar sistema
echo ""
echo "📦 Actualizando paquetes del sistema..."
sudo apt-get update -y
sudo apt-get upgrade -y

# 2. Instalar Docker si no existe
if ! command -v docker &> /dev/null; then
    echo ""
    echo "🐳 Instalando Docker..."
    sudo apt-get install -y ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -y
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    sudo usermod -aG docker $USER
    echo "✅ Docker instalado"
else
    echo "✅ Docker ya está instalado"
fi

# 3. Instalar Git si no existe
if ! command -v git &> /dev/null; then
    echo ""
    echo "📦 Instalando Git..."
    sudo apt-get install -y git
    echo "✅ Git instalado"
else
    echo "✅ Git ya está instalado"
fi

# 4. Crear directorio de instalación
echo ""
echo "📁 Creando directorio $INSTALL_DIR..."
sudo mkdir -p $INSTALL_DIR
sudo chown -R $USER:$USER $INSTALL_DIR

# 5. Clonar repositorio si no existe
if [ ! -d "$INSTALL_DIR/.git" ]; then
    echo ""
    echo "📥 Clonando repositorio ZINNIA..."
    git clone $REPO_URL $INSTALL_DIR
    echo "✅ Repositorio clonado"
else
    echo ""
    echo "📥 Actualizando repositorio existente..."
    cd $INSTALL_DIR
    git pull origin main
    echo "✅ Repositorio actualizado"
fi

# 6. Navegar al directorio del proyecto
cd $INSTALL_DIR

# 7. Construir imagen Docker
echo ""
echo "🔨 Construyendo imagen Docker (esto puede tardar varios minutos)..."
sudo docker compose build

# 8. Levantar contenedor
echo ""
echo "🚀 Levantando contenedor..."
sudo docker compose up -d

# 9. Verificar que el contenedor está corriendo
echo ""
echo "🔍 Verificando estado del contenedor..."
sudo docker compose ps

echo ""
echo "=========================================="
echo "✅ SETUP COMPLETADO"
echo "=========================================="
echo ""
echo "🌐 Accedé a tu aplicación en:"
echo "   http://$(hostname -I | awk '{print $1}'):4321"
echo ""
echo "📝 Comandos útiles:"
echo "   Ver logs: sudo docker compose logs -f"
echo "   Detener: sudo docker compose down"
echo "   Reiniciar: sudo docker compose restart"
echo ""
