# Deploy en VPS Linux - ZINNIA

Guía de deploy para proyecto ZINNIA en Ubuntu 22.04/24.04 usando Docker.

## Requisitos previos

- VPS con Ubuntu 22.04 o 24.04
- Acceso SSH al servidor
- El repositorio debe ser público en GitHub

## Estructura del proyecto

```
/var/www/zinnia/
├── Dockerfile              # Imagen Docker del contenedor
├── docker-compose.yml      # Configuración de servicios
├── server-setup.sh         # Script de instalación inicial
├── deploy.sh               # Script de deploys futuros
├── setup-domain.sh         # Script de configuración de dominio
├── nginx-zinnia.conf       # Configuración de Nginx
└── ... (resto del proyecto)
```

## Puertos utilizados

- **Puerto host:** 4321
- **Puerto interno:** 3000 (Next.js)

La aplicación será accesible en: `http://IP_DEL_SERVIDOR:4321`

---

## PASO 1: Conexión por SSH

Conectate a tu servidor:

```bash
ssh usuario@tu-ip-del-servidor
```

---

## PASO 2: Descargar y ejecutar setup inicial

### Opción A: Directo desde GitHub

```bash
# Descargar el script
curl -o server-setup.sh https://raw.githubusercontent.com/RomaRicchi/ZINNIA/main/server-setup.sh

# Dar permisos de ejecución
chmod +x server-setup.sh

# Ejecutar
sudo ./server-setup.sh
```

### Opción B: Clonar el repo primero

```bash
# Clonar el repositorio
git clone https://github.com/RomaRicchi/ZINNIA.git
cd ZINNIA

# Dar permisos y ejecutar
chmod +x server-setup.sh
sudo ./server-setup.sh
```

### ¿Qué hace este script?

1. Actualiza el sistema
2. Instala Docker y Docker Compose
3. Instala Git
4. Crea el directorio `/var/www/zinnia`
5. Clona el repositorio
6. Construye la imagen Docker
7. Levanta el contenedor

**Tiempo estimado:** 5-10 minutos (depende de la conexión)

---

## PASO 3: Verificar que funciona

Una vez terminado el setup, el script mostrará la URL de acceso:

```
✅ SETUP COMPLETADO

🌐 Accedé a tu aplicación en:
   http://TU-IP:4321
```

Abrí esa URL en tu navegador.

---

## DEPLOYS FUTUROS

Cuando necesites actualizar la aplicación con nuevos cambios:

### Opción 1: Usar el script deploy.sh

```bash
# Ir al directorio del proyecto
cd /var/www/zinnia

# Ejecutar deploy
sudo ./deploy.sh
```

### Opción 2: Manual

```bash
cd /var/www/zinnia
git pull origin main
sudo docker compose build
sudo docker compose up -d
```

---

## COMANDOS ÚTILES

### Ver logs en tiempo real

```bash
cd /var/www/zinnia
sudo docker compose logs -f
```

### Ver estado del contenedor

```bash
cd /var/www/zinnia
sudo docker compose ps
```

### Detener la aplicación

```bash
cd /var/www/zinnia
sudo docker compose down
```

### Iniciar la aplicación

```bash
cd /var/www/zinnia
sudo docker compose up -d
```

### Reiniciar la aplicación

```bash
cd /var/www/zinnia
sudo docker compose restart
```

### Entrar al contenedor (debug)

```bash
sudo docker exec -it zinnia_web sh
```

---

## TROUBLESHOOTING

### El contenedor no inicia

```bash
# Ver logs de error
sudo docker compose logs

# Verificar que Docker está corriendo
sudo systemctl status docker
```

### Puerto ya en uso

Si el puerto 4321 está ocupado, editá `docker-compose.yml`:

```yaml
ports:
  - "OTRO_PUERTO:3000"
```

Luego reiniciá:

```bash
sudo docker compose down
sudo docker compose up -d
```

### Error de permisos

```bash
# Asegurate de tener permisos en el directorio
sudo chown -R $USER:$USER /var/www/zinnia
```

### Reconstruir desde cero

```bash
cd /var/www/zinnia
sudo docker compose down
sudo docker system prune -a
sudo docker compose build --no-cache
sudo docker compose up -d
```

---

## CONFIGURAR DOMINIO Y HTTPS (Opcional)

Una vez que la aplicación funcione correctamente en `http://IP:4321`, podés configurar un dominio con HTTPS.

### Requisitos previos

1. Tener un dominio apuntando a la IP de tu VPS
2. Haber ejecutado el `server-setup.sh` exitosamente
3. El puerto 80 debe estar libre

### Paso 1: Ejecutar script de configuración de dominio

```bash
# Ir al directorio del proyecto
cd /var/www/zinnia

# Dar permisos al script
chmod +x setup-domain.sh

# Ejecutar el script
sudo ./setup-domain.sh
```

El script te pedirá:
- **Dominio**: ej: `zinnia.tudominio.com`
- **Email**: para Let's Encrypt (renovaciones y alertas)

### ¿Qué hace este script?

1. Instala Nginx si no existe
2. Configura Nginx como reverse proxy
3. Instala Certbot
4. Obtiene certificado SSL gratuito (Let's Encrypt)
5. Configura HTTPS automático
6. Configura renovación automática del certificado
7. Configura el firewall si es necesario

### Paso 2: Configurar DNS

En tu proveedor de dominio (GoDaddy, Namecheap, etc.):

```
Tipo: A
Nombre: zinnia (o @ para dominio principal)
Valor: TU_IP_DEL_VPS
TTL: 3600 (o el mínimo disponible)
```

### Paso 3: Esperar propagación DNS

La propagación puede tardar hasta 24-48 horas, pero usualmente es mucho más rápido (5-30 minutos).

Verificá con:
```bash
ping zinnia.tudominio.com
```

### Paso 4: Acceder a tu sitio

```
https://zinnia.tudominio.com
```

### Renovación automática

Los certificados se renuevan automáticamente. Para verificar manualmente:

```bash
sudo certbot renew --dry-run
```

---

## ARQUITECTURA

```
Sin dominio:
Internet → VPS:4321 → Docker → Next.js:3000

Con dominio y HTTPS:
Internet → Nginx:80/443 → Docker:4321 → Next.js:3000
           (Let's Encrypt SSL)
```

---

## TROUBLESHOOTING

### El contenedor no inicia

```bash
# Ver logs de error
sudo docker compose logs

# Verificar que Docker está corriendo
sudo systemctl status docker
```

### Puerto ya en uso

Si el puerto 4321 está ocupado, editá `docker-compose.yml`:

```yaml
ports:
  - "OTRO_PUERTO:3000"
```

Luego reiniciá:

```bash
sudo docker compose down
sudo docker compose up -d
```

### Error de permisos

```bash
# Asegurate de tener permisos en el directorio
sudo chown -R $USER:$USER /var/www/zinnia
```

### Error de Nginx

```bash
# Ver logs de Nginx
sudo tail -f /var/log/nginx/error.log

# Verificar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx
```

### Certificado SSL no se renueva

```bash
# Verificar estado de certbot
sudo systemctl status certbot.timer

# Renovar manualmente
sudo certbot renew
```

### Reconstruir desde cero

```bash
cd /var/www/zinnia
sudo docker compose down
sudo docker system prune -a
sudo docker compose build --no-cache
sudo docker compose up -d
```

---

## CONTACTO

Para problemas o consultas sobre el deploy, abrí un issue en:
https://github.com/RomaRicchi/ZINNIA/issues
