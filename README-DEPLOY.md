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

## PRÓXIMOS PASOS (HTTPS)

Para agregar HTTPS con Let's Encrypt:

1. Instalar Nginx como reverse proxy
2. Configurar Certbot para certificados SSL
3. Actualizar Nginx para redirigir al puerto 4321

Esto se puede hacer cuando la aplicación esté funcionando correctamente en HTTP.

---

## ARQUITECTURA

```
Internet
    ↓
VPS (Puerto 4321)
    ↓
Docker Container (zinnia_web)
    ↓
Next.js (Puerto 3000)
```

---

## CONTACTO

Para problemas o consultas sobre el deploy, abrí un issue en:
https://github.com/RomaRicchi/ZINNIA/issues
