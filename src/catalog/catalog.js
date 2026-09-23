export function toSlug(name) {
    return String(name)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function catalogHref({ productId, categorySlug, query } = {}) {
    if (productId != null) {
        return `/products/${productId}`;
    }

    const params = new URLSearchParams();
    if (categorySlug) {
        params.set('category', categorySlug);
    }
    if (query) {
        params.set('q', query);
    }

    const search = params.toString();
    return search ? `/products?${search}` : '/products';
}

function withCategoryFields(category, product) {
    return {
        ...product,
        categoryId: category.id,
        categoryName: category.name,
        categorySlug: category.slug,
    };
}

export function createCatalog(categories) {
    const normalized = categories.map((category) => ({
        ...category,
        slug: category.slug || toSlug(category.name),
        products: category.products.map((product) => ({ ...product })),
    }));

    const products = normalized.flatMap((category) =>
        category.products.map((product) => withCategoryFields(category, product))
    );

    const categoryBySlug = new Map(normalized.map((category) => [category.slug, category]));
    const productById = new Map(products.map((product) => [product.productId, product]));
    const productByName = new Map(products.map((product) => [product.name, product]));

    return {
        getCategories: () => normalized,
        getAllProducts: () => products,
        getCategoryBySlug: (slug) => categoryBySlug.get(slug) ?? null,
        getProductById: (productId) => productById.get(Number(productId)) ?? null,
        getProductByName: (name) => productByName.get(name) ?? null,
        searchProducts(query) {
            const needle = String(query ?? '').trim().toLowerCase();
            return needle
                ? products.filter((product) => product.name.toLowerCase().includes(needle))
                : [];
        },
        getFeaturedTabs() {
            return FEATURED_TABS.map((tab) => ({
                slug: tab.slug,
                name: categoryBySlug.get(tab.slug)?.name ?? tab.name,
                href: catalogHref({ categorySlug: tab.slug }),
                products: tab.productIds.map((productId) => productById.get(productId)).filter(Boolean),
            }));
        },
    };
}

export function attachCatalogIds(categories, indexCatalog = catalog) {
    return categories.map((category) => ({
        ...category,
        slug: category.slug || toSlug(category.name),
        products: category.products.map((product) => ({
            ...product,
            productId: product.productId ?? indexCatalog.getProductByName(product.name)?.productId,
        })),
    }));
}

export const FEATURED_TABS = [
    { slug: 'automatic-transfer-switch', name: 'Automatic Transfer Switch', productIds: [11, 12, 13, 14] },
    { slug: 'molded-case-circuit-breaker', name: 'Molded Case Circuit Breaker', productIds: [51, 52, 53, 54] },
    { slug: 'universal-circuit-breaker', name: 'Universal Circuit Breaker', productIds: [41, 42, 43, 44] },
    { slug: 'miniature-circuit-breaker', name: 'Miniature Circuit Breaker', productIds: [61, 62, 63, 64] },
];

const CATALOG_INDEX = [
    {
        id: 1,
        name: 'Automatic Transfer Switch',
        products: [
            { productId: 11, name: 'ASP Anti-Surge Module' },
            { productId: 12, name: 'SKT1 Series Class PC ATS' },
            { productId: 13, name: 'SKT2 Series Ultra-thin Class PC ATS' },
            { productId: 14, name: 'ASKQ1 Series Household ATS 16A-63A' },
            { productId: 105, name: 'SKQ1 MCCB Type Class CB ATS' },
            { productId: 106, name: 'SKQ1 MCB Type Class CB ATS' },
            { productId: 107, name: 'ASKQ6 Series Solenoid Type Automatic Transfer Switch' },
            { productId: 108, name: 'ASKQ8 High Current Automatic Transfer Switch 3200~6300A' },
        ],
    },
    {
        id: 2,
        name: 'Intelligent ATS Controller',
        products: [
            { productId: 201, name: 'SKR2-A LED ATS Controller' },
            { productId: 202, name: 'SKR2-B LCD ATS Controller' },
        ],
    },
    {
        id: 3,
        name: 'High Voltage Vacuum Circuit Breaker',
        products: [
            { productId: 301, name: 'High Voltage Embedded Pole Type Vacuum Circuit Breaker VCB' },
            { productId: 302, name: 'High Voltage Insulating Cylinder Type Vacuum Circuit Breaker VCB' },
        ],
    },
    {
        id: 4,
        name: 'Universal Circuit Breaker',
        products: [
            { productId: 41, name: 'ASKW2 Series Fixed Type Intelligent Universal Circuit Breaker' },
            { productId: 42, name: 'ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker' },
            { productId: 43, name: 'ASKW3 Series Drawout Type Intelligent Universal Air Circuit Breaker' },
            { productId: 44, name: 'ASKW3 Series Fixed Type Intelligent Universal Circuit Breaker' },
            { productId: 405, name: 'ASKW1 Series Fixed Type Intelligent Universal Circuit Breaker' },
            { productId: 406, name: 'ASKW1 Series Drawout Type Intelligent Universal Air Circuit Breaker' },
        ],
    },
    {
        id: 5,
        name: 'Molded Case Circuit Breaker',
        products: [
            { productId: 51, name: 'ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker' },
            { productId: 52, name: 'ASKM2E Series Intelligent Electronic Molded Case Circuit Breaker' },
            { productId: 53, name: 'ASKM1 Series Normal Protection Molded Case Circuit Breaker' },
            { productId: 54, name: 'ASKM1L Series Leakage Protection Molded Case Circuit Breaker' },
            { productId: 505, name: 'ASKM3EL Series LCD Electronic Leakage Protection MCCB' },
            { productId: 506, name: 'ASKM3E-Y Series LCD Electronic Normal Protection MCCB' },
            { productId: 507, name: 'ASKM3E Series Electronic Normal Protection MCCB' },
            { productId: 508, name: 'ASKM3L Series Thermomagnetic Leakage Protection MCCB' },
            { productId: 509, name: 'ASKM3 Series Thermomagnetic Normal Protection MCCB' },
            { productId: 510, name: 'ASKM1E Series Electronic Molded Case Circuit Breaker' },
            { productId: 511, name: 'ASKM2L Series Leakage Protection Molded Case Circuit Breaker' },
            { productId: 512, name: 'ASKM2 Series Normal Protection Molded Case Circuit Breaker' },
            { productId: 513, name: 'ASKM2RT Series Thermal-magnetic Adjustable Normal Protection Molded' },
        ],
    },
    {
        id: 6,
        name: 'Miniature Circuit Breaker',
        products: [
            { productId: 61, name: 'ASKB6L Series Leakage Protection MCB' },
            { productId: 62, name: 'ASKB6 Series Leakage Protection MCB' },
            { productId: 63, name: 'ASKB5L Series Leakage Protection MCB' },
            { productId: 64, name: 'ASKB5 Series Leakage Protection MCB' },
            { productId: 605, name: 'ASKB2L Series Leakage Protection MCB' },
            { productId: 606, name: 'ASKB2 Series Normal Protection MCB' },
            { productId: 607, name: 'ASKB1L Series Leakage Protection MCB' },
            { productId: 608, name: 'ASKB1 Series Normal Protection MCB' },
        ],
    },
    {
        id: 7,
        name: 'Load Isolation Switch',
        products: [
            { productId: 701, name: 'SKG1 Load Isolation Switch' },
        ],
    },
    {
        id: 8,
        name: 'Overvoltage and Undervoltage Protector',
        products: [
            { productId: 801, name: 'Overvoltage and Undervoltage Protector' },
        ],
    },
    {
        id: 9,
        name: 'Surge Protective Device',
        products: [
            { productId: 901, name: 'SKD3 Series Surge Protective Device' },
            { productId: 902, name: 'SKD2 Series Surge Protective Device' },
            { productId: 903, name: 'SKD1 Series Surge Protective Device' },
        ],
    },
    {
        id: 10,
        name: 'Intelligent Power Meter',
        products: [
            { productId: 1001, name: 'Intelligent Power Meter' },
        ],
    },
    {
        id: 11,
        name: 'Battery Charger',
        products: [
            { productId: 1101, name: 'Intelligent Battery Charger' },
        ],
    },
];

export const catalog = createCatalog(CATALOG_INDEX);
