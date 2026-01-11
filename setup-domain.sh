#!/bin/bash

# ============================================
# SCRIPT DE CONFIGURACIÓN DE DOMINIO Y HTTPS
# Para ZINNIA en Ubuntu 22.04 / 24.04
# ============================================

set -e  # Salir si hay errores

echo "=========================================="
echo "🌐 CONFIGURACIÓN DE DOMINIO Y HTTPS"
echo "=========================================="

# Pedir dominio
if [ -z "$DOMAIN" ]; then
    read -p "Ingresa tu dominio (ej: zinnia.tudominio.com): " DOMAIN
fi

if [ -z "$EMAIL" ]; then
    read -p "Ingresa tu email para Let's Encrypt: " EMAIL
fi

NGINX_CONF="/etc/nginx/sites-available/zinnia"
NGINX_ENABLED="/etc/nginx/sites-enabled/zinnia"
PROJECT_CONF="/var/www/zinnia/nginx-zinnia.conf"

# 1. Instalar Nginx si no existe
echo ""
echo "📦 Verificando Nginx..."
if ! command -v nginx &> /dev/null; then
    echo "Instalando Nginx..."
    sudo apt-get install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    echo "✅ Nginx instalado"
else
    echo "✅ Nginx ya está instalado"
fi

# 2. Copiar configuración de Nginx
echo ""
echo "📝 Configurando Nginx para $DOMAIN..."

# Crear configuración desde el template
sudo cp $PROJECT_CONF $NGINX_CONF

# Reemplazar dominio en la configuración
sudo sed -i "s/zinnia.tu-dominio.com/$DOMAIN/g" $NGINX_CONF

# Habilitar sitio
sudo ln -sf $NGINX_CONF $NGINX_ENABLED

# Verificar configuración de Nginx
echo ""
echo "🔍 Verificando configuración de Nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuración de Nginx válida"
else
    echo "❌ Error en configuración de Nginx"
    exit 1
fi

# 3. Reiniciar Nginx
echo ""
echo "🔄 Reiniciando Nginx..."
sudo systemctl restart nginx
echo "✅ Nginx reiniciado"

# 4. Instalar Certbot para Let's Encrypt
echo ""
echo "📦 Verificando Certbot..."
if ! command -v certbot &> /dev/null; then
    echo "Instalando Certbot..."
    sudo apt-get install -y certbot python3-certbot-nginx
    echo "✅ Certbot instalado"
else
    echo "✅ Certbot ya está instalado"
fi

# 5. Obtener certificado SSL
echo ""
echo "🔐 Obteniendo certificado SSL para $DOMAIN..."
echo "Se te pedirá confirmar si redirigir TODO a HTTPS (elegir 'No' o '2' para mantener configuración personalizada)"

sudo certbot certonly --nginx -d $DOMAIN --email $EMAIL --agree-tos --no-eff-email

# 6. Actualizar configuración de Nginx para HTTPS
echo ""
echo "🔧 Actualizando configuración de Nginx para HTTPS..."

# Crear configuración final con HTTPS
cat > /tmp/zinnia-https.conf <<EOF
# Upstream al contenedor Docker
upstream zinnia_backend {
    server 127.0.0.1:4321;
    keepalive 64;
}

# Servidor HTTP (redirige a HTTPS)
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;

    # Para certbot
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    # Redirigir a HTTPS
    location / {
        return 301 https://\$server_name\$request_uri;
    }
}

# Servidor HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN;

    # Certificados SSL
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://zinnia_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }
}
EOF

sudo mv /tmp/zinnia-https.conf $NGINX_CONF

# 7. Verificar y reiniciar Nginx
echo ""
echo "🔍 Verificando configuración final de Nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuración válida"
    sudo systemctl reload nginx
    echo "✅ Nginx recargado"
else
    echo "❌ Error en configuración"
    exit 1
fi

# 8. Configurar renovación automática de certificados
echo ""
echo "🔄 Configurando renovación automática de certificados..."
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
echo "✅ Renovación automática configurada"

# 9. Configurar firewall si existe
if command -v ufw &> /dev/null; then
    echo ""
    echo "🔥 Configurando firewall..."
    sudo ufw allow 'Nginx Full'
    echo "✅ Firewall configurado"
fi

echo ""
echo "=========================================="
echo "✅ DOMINIO Y HTTPS CONFIGURADOS"
echo "=========================================="
echo ""
echo "🌐 Tu sitio está disponible en:"
echo "   http://$DOMAIN"
echo "   https://$DOMAIN"
echo ""
echo "📝 Comandos útiles:"
echo "   Ver logs Nginx: sudo tail -f /var/log/nginx/access.log"
echo "   Reiniciar Nginx: sudo systemctl restart nginx"
echo "   Renovar cert: sudo certbot renew --dry-run"
echo ""
