#!/bin/bash

echo "🔍 VERIFICACIÓN SEO - ZINNIA Code"
echo "================================"
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "📋 1. Verificando Sitemap..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

SITEMAP=$(curl -s http://localhost:3000/sitemap.xml)
if echo "$SITEMAP" | grep -q "zinnia-code.com.ar"; then
    echo -e "${GREEN}✅ Sitemap.xml accesible${NC}"

    # Contar URLs en sitemap
    URL_COUNT=$(echo "$SITEMAP" | grep -c "<loc>")
    echo -e "${BLUE}📊 URLs en sitemap: $URL_COUNT${NC}"
else
    echo -e "${RED}❌ Sitemap.xml NO accesible${NC}"
fi

echo ""
echo "📋 2. Verificando Robots.txt..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

ROBOTS=$(curl -s http://localhost:3000/robots.txt)
if echo "$ROBOTS" | grep -q "Sitemap:"; then
    echo -e "${GREEN}✅ Robots.txt accesible${NC}"

    if echo "$ROBOTS" | grep -q "Disallow: /api/"; then
        echo -e "${GREEN}✅ Directorios privados bloqueados${NC}"
    fi
else
    echo -e "${RED}❌ Robots.txt NO accesible${NC}"
fi

echo ""
echo "📋 3. Verificando Meta Tags..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

HEADERS=$(curl -s http://localhost:3000)
if echo "$HEADERS" | grep -q "desarrollo web San Luis"; then
    echo -e "${GREEN}✅ Title optimizado (SEO local)${NC}"
else
    echo -e "${YELLOW}⚠️  Title podría mejorar${NC}"
fi

if echo "$HEADERS" | grep -q "meta name=\"description\""; then
    echo -e "${GREEN}✅ Meta description presente${NC}"
else
    echo -e "${RED}❌ Meta description NO encontrada${NC}"
fi

if echo "$HEADERS" | grep -q "meta property=\"og:"; then
    echo -e "${GREEN}✅ Open Graph tags presentes${NC}"

    OG_COUNT=$(echo "$HEADERS" | grep -c "meta property=\"og:")
    echo -e "${BLUE}📊 Open Graph tags: $OG_COUNT${NC}"
else
    echo -e "${YELLOW}⚠️  Open Graph tags limitadas${NC}"
fi

echo ""
echo "📋 4. Verificando Structured Data..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if echo "$HEADERS" | grep -q "application/ld+json"; then
    echo -e "${GREEN}✅ Structured Data presente${NC}"

    SCHEMA_COUNT=$(echo "$HEADERS" | grep -c "application/ld+json")
    echo -e "${BLUE}📊 Schemas encontrados: $SCHEMA_COUNT${NC}"

    # Ver tipos de schema
    if echo "$HEADERS" | grep -q '"@type": "Organization"'; then
        echo -e "${GREEN}  ✓ Organization Schema${NC}"
    fi
    if echo "$HEADERS" | grep -q '"@type": "ProfessionalService"'; then
        echo -e "${GREEN}  ✓ LocalBusiness Schema${NC}"
    fi
    if echo "$HEADERS" | grep -q '"@type": "Service"'; then
        echo -e "${GREEN}  ✓ Service Schema${NC}"
    fi
    if echo "$HEADERS" | grep -q '"@type": "FAQPage"'; then
        echo -e "${GREEN}  ✓ FAQ Schema${NC}"
    fi
else
    echo -e "${RED}❌ Structured Data NO encontrado${NC}"
fi

echo ""
echo "📋 5. Verificando Canonical URLs..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if echo "$HEADERS" | grep -q "rel=\"canonical\""; then
    echo -e "${GREEN}✅ Canonical URL presente${NC}"
else
    echo -e "${YELLOW}⚠️  Canonical URL NO encontrada${NC}"
fi

echo ""
echo "📋 6. Análisis de Palabras Clave..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

KEYWORDS_TO_CHECK=(
    "desarrollo web"
    "software Argentina"
    "React"
    "Next.js"
    "San Luis"
)

for keyword in "${KEYWORDS_TO_CHECK[@]}"; do
    if echo "$HEADERS" | grep -qi "$keyword"; then
        echo -e "${GREEN}✅ '$keyword' encontrada${NC}"
    else
        echo -e "${YELLOW}⚠️  '$keyword' NO encontrada${NC}"
    fi
done

echo ""
echo "📋 7. Performance SEO..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if echo "$HEADERS" | grep -q "script src"; then
    SCRIPT_COUNT=$(echo "$HEADERS" | grep -c "script src")
    echo -e "${BLUE}📊 Scripts externos: $SCRIPT_COUNT${NC}"

    if [ $SCRIPT_COUNT -lt 5 ]; then
        echo -e "${GREEN}✅ Buen rendimiento (pocas dependencias)${NC}"
    else
        echo -e "${YELLOW}⚠️  Considerar reducir scripts externos${NC}"
    fi
fi

echo ""
echo "📋 8. Resumen SEO"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Calcular score SEO
SEO_SCORE=0

if echo "$SITEMAP" | grep -q "zinnia-code.com.ar"; then ((SEO_SCORE++)); fi
if echo "$ROBOTS" | grep -q "Sitemap:"; then ((SEO_SCORE++)); fi
if echo "$HEADERS" | grep -q "meta name=\"description\""; then ((SEO_SCORE++)); fi
if echo "$HEADERS" | grep -q "meta property=\"og:"; then ((SEO_SCORE++)); fi
if echo "$HEADERS" | grep -q "application/ld+json"; then ((SEO_SCORE++)); fi
if echo "$HEADERS" | grep -q "rel=\"canonical\""; then ((SEO_SCORE++)); fi

if [ $SEO_SCORE -eq 6 ]; then
    echo -e "${GREEN}🚀 SEO SCORE: 6/6 (EXCELENTE)${NC}"
elif [ $SEO_SCORE -ge 4 ]; then
    echo -e "${YELLOW}📈 SEO SCORE: $SEO_SCORE/6 (BUENO)${NC}"
else
    echo -e "${RED}⚠️  SEO SCORE: $SEO_SCORE/6 (NECESITA MEJORAS)${NC}"
fi

echo ""
echo "📋 9. Próximos Pasos Recomendados"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}1. Enviar sitemap a Google Search Console${NC}"
echo -e "${BLUE}2. Monitorear Core Web Vitals${NC}"
echo -e "${BLUE}3. Verificar indexación: site:zinnia-code.com.ar${NC}"
echo -e "${BLUE}4. Optimizar Google My Business${NC}"
echo -e "${BLUE}5. Crear contenido (blog, case studies)${NC}"

echo ""
echo "✨ Verificación SEO completada"
