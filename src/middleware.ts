import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware de seguridad para Next.js
 * Implementa headers de seguridad HTTP recomendados por OWASP
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Prevenir clickjacking
  response.headers.set('X-Frame-Options', 'DENY');

  // Prevenir MIME-sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // Activar filtro XSS del navegador (modo estricto)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Control de referencias para privacidad
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Política de permisos - restrictivo por defecto
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  // Strict-Transport-Security para HTTPS (solo en producción)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // Content Security Policy básica
  // Nota: Se puede ampliar según las necesidades específicas del sitio
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' 'unsafe-hashes' https://www.googletagmanager.com https://www.google-analytics.com", // unsafe-inline/hashes para Next.js y development + Google Analytics
      "style-src 'self' 'unsafe-inline'", // unsafe-inline necesario para Tailwind y estilos inline
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://google-analytics.com https://www.googletagmanager.com",
      "frame-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "report-uri /api/csp-violation", // Endpoint opcional para reportar violaciones
    ].join('; ')
  );

  return response;
}

/**
 * Configuración de matcher para el middleware
 * Aplica a todas las rutas excepto archivos estáticos y API routes si es necesario
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
