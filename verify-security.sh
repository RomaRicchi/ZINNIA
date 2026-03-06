#!/bin/bash

echo "🔍 VERIFICACIÓN DE SEGURIDAD - ZINNIA Code"
echo "=========================================="
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "📋 1. Verificando Headers de Seguridad HTTP..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

HEADERS=$(curl -I http://localhost:3000 2>/dev/null)

if echo "$HEADERS" | grep -q "x-frame-options: DENY"; then
    echo -e "${GREEN}✅ X-Frame-Options: DENY${NC}"
else
    echo -e "${RED}❌ X-Frame-Options NO ENCONTRADO${NC}"
fi

if echo "$HEADERS" | grep -q "x-content-type-options: nosniff"; then
    echo -e "${GREEN}✅ X-Content-Type-Options: nosniff${NC}"
else
    echo -e "${RED}❌ X-Content-Type-Options NO ENCONTRADO${NC}"
fi

if echo "$HEADERS" | grep -q "x-xss-protection: 1; mode=block"; then
    echo -e "${GREEN}✅ X-XSS-Protection: 1; mode=block${NC}"
else
    echo -e "${RED}❌ X-XSS-Protection NO ENCONTRADO${NC}"
fi

if echo "$HEADERS" | grep -q "referrer-policy: strict-origin-when-cross-origin"; then
    echo -e "${GREEN}✅ Referrer-Policy: strict-origin-when-cross-origin${NC}"
else
    echo -e "${RED}❌ Referrer-Policy NO ENCONTRADO${NC}"
fi

if echo "$HEADERS" | grep -q "permissions-policy:"; then
    echo -e "${GREEN}✅ Permissions-Policy: Configurado${NC}"
else
    echo -e "${RED}❌ Permissions-Policy NO ENCONTRADO${NC}"
fi

if echo "$HEADERS" | grep -q "content-security-policy:"; then
    echo -e "${GREEN}✅ Content-Security-Policy: Configurado${NC}"
else
    echo -e "${RED}❌ Content-Security-Policy NO ENCONTRADO${NC}"
fi

echo ""
echo "📋 2. Verificando Archivos de Seguridad..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "src/middleware.ts" ]; then
    echo -e "${GREEN}✅ Middleware de seguridad: Existe${NC}"
else
    echo -e "${RED}❌ Middleware de seguridad: NO EXISTE${NC}"
fi

if [ -f "src/utils/sanitize.ts" ]; then
    echo -e "${GREEN}✅ Utilidad de sanitización: Existe${NC}"
else
    echo -e "${RED}❌ Utilidad de sanitización: NO EXISTE${NC}"
fi

if [ -f "src/app/api/csp-violation/route.ts" ]; then
    echo -e "${GREEN}✅ Endpoint de violaciones CSP: Existe${NC}"
else
    echo -e "${RED}❌ Endpoint de violaciones CSP: NO EXISTE${NC}"
fi

echo ""
echo "📋 3. Verificando Build..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build: EXITOSO${NC}"

    # Verificar tamaño del middleware
    MIDDLEWARE_SIZE=$(du -sh .next/server/middleware* 2>/dev/null | cut -f1)
    if [ -n "$MIDDLEWARE_SIZE" ]; then
        echo -e "${GREEN}✅ Middleware tamaño: $MIDDLEWARE_SIZE${NC}"
    fi
else
    echo -e "${RED}❌ Build: FALLÓ${NC}"
fi

echo ""
echo "📋 4. Resumen de Seguridad"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Contar headers de seguridad
SECURITY_COUNT=$(echo "$HEADERS" | grep -cE "x-frame-options|x-content-type|x-xss|referrer|permissions|content-security")

if [ $SECURITY_COUNT -ge 6 ]; then
    echo -e "${GREEN}🛡️  NIVEL DE SEGURIDAD: ALTO ($SECURITY_COUNT/6 headers)${NC}"
elif [ $SECURITY_COUNT -ge 4 ]; then
    echo -e "${YELLOW}⚠️  NIVEL DE SEGURIDAD: MEDIO ($SECURITY_COUNT/6 headers)${NC}"
else
    echo -e "${RED}🚨 NIVEL DE SEGURIDAD: BAJO ($SECURITY_COUNT/6 headers)${NC}"
fi

echo ""
echo "✨ Verificación completada"
