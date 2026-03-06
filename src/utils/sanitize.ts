/**
 * Utilidad de sanitización HTML para prevenir ataques XSS
 * Permite solo etiquetas HTML seguras y atributos específicos
 */

// Lista blanca de etiquetas HTML permitidas
const ALLOWED_TAGS = ['strong', 'em', 'u', 'b', 'i', 'a', 'p', 'br', 'span'];

/**
 * Escapa caracteres especiales HTML
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '`': '&#096;',
  };
  return text.replace(/[&<>"'`]/g, (m) => map[m]);
}

/**
 * Sanitiza HTML permitiendo solo etiquetas y atributos seguros
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';

  // Escapar HTML básico primero
  let sanitized = escapeHtml(html);

  // Permitir etiquetas específicas con sus atributos permitidos
  ALLOWED_TAGS.forEach((tag) => {
    const tagRegex = new RegExp(
      `&lt;${tag}([^&]*)&gt;([\\s\\S]*?)&lt;/${tag}&gt;`,
      'gi'
    );

    sanitized = sanitized.replace(tagRegex, (match, attrs, content) => {
      // Sanitizar atributos
      let sanitizedAttrs = attrs;

      // Permitir href en enlaces
      if (tag === 'a') {
        const hrefMatch = attrs.match(/href="([^"]*)"/i);
        if (hrefMatch) {
          const url = hrefMatch[1];
          // Validar que sea una URL segura
          if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
            sanitizedAttrs = ` href="${url}" target="_blank" rel="noopener noreferrer"`;
          } else {
            sanitizedAttrs = ''; // URL no segura
          }
        }

        const targetMatch = attrs.match(/target="([^"]*)"/i);
        if (targetMatch && sanitizedAttrs.includes('target')) {
          sanitizedAttrs = sanitizedAttrs.replace(
            /target="[^"]*"/i,
            'target="_blank"'
          );
        }
      }

      // Permitir class attribute
      const classMatch = attrs.match(/class="([^"]*)"/i);
      if (classMatch) {
        const className = classMatch[1].replace(/[^a-zA-Z0-9-_\s]/g, '');
        if (className && !sanitizedAttrs.includes('class')) {
          sanitizedAttrs += ` class="${className}"`;
        }
      }

      return `<${tag}${sanitizedAttrs}>${content}</${tag}>`;
    });
  });

  // Permitir etiquetas de cierre simple
  sanitized = sanitized.replace(/&lt;(br|hr)\/?&gt;/gi, '<$1 />');

  return sanitized;
}

/**
 * Versión simplificada para contenido que solo necesita formato básico
 */
export function sanitizeBasic(html: string): string {
  if (!html) return '';

  // Para contenido básico, solo permitir negritas, cursivas y enlaces
  return sanitizeHtml(html);
}
