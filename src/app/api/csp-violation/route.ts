import { NextRequest, NextResponse } from 'next/server';

/**
 * Endpoint para recibir reportes de violaciones de Content Security Policy
 * Ayuda a monitorear y ajustar la política de seguridad según el uso real
 */
export async function POST(request: NextRequest) {
  try {
    const report = await request.json();

    // En producción, enviar a servicio de monitoreo (Sentry, LogRocket, etc.)
    if (process.env.NODE_ENV === 'production') {
      // Aquí se puede integrar con servicios de monitoreo
      console.error('CSP Violation:', JSON.stringify(report, null, 2));

      // Opcional: Enviar a servicio de logging externo
      // await logToService('CSP_VIOLATION', report);
    } else {
      // En desarrollo, solo loggear para debugging
      console.log('CSP Violation (dev):', JSON.stringify(report, null, 2));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing CSP violation:', error);
    return NextResponse.json(
      { error: 'Invalid report' },
      { status: 400 }
    );
  }
}
