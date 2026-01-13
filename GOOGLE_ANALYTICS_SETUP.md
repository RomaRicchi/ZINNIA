# Configuración de Google Analytics 4

## Pasos para completar la configuración

### 1. Obtener el Measurement ID de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad de GA4 o usa una existente
3. Copia tu **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 2. Configurar la variable de entorno

En el archivo `.env.local`, reemplaza `G-XXXXXXXXXX` con tu ID real:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU_ID_REAL_AQUI
```

### 3. Verificar la implementación

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre tu sitio en el navegador

3. Ve a la pestaña **Red** (Network) de las DevTools (F12)

4. Busca peticiones a `www.googletagmanager.com`

5. En Google Analytics, ve a **Informes → Tiempo real** para verificar que se registre la visita

### 4. Probar en producción

Cuando despliegues a producción:
1. Asegúrate de configurar la variable de entorno en tu plataforma de hosting
2. Verifica que el código de Analytics se esté cargando
3. Espera unos minutos y verifica los datos en tiempo real en GA

## Archivos modificados

- ✅ `src/components/GoogleAnalytics.tsx` - Componente de GA4
- ✅ `src/app/layout.tsx` - Integración en el layout
- ✅ `src/app/sitemap.ts` - URL corregida a `https://zinniacode.com.ar`
- ✅ `.env.local` - Variable de entorno configurada
- ✅ `.env.example` - Ejemplo para otros desarrolladores

## Notas importantes

- El componente solo se renderiza si la variable de entorno está configurada
- Usa `strategy="afterInteractive"` para no bloquear la carga de la página
- Compatible con Next.js App Router
