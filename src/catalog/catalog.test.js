import { describe, expect, it } from 'vitest';
import { catalog, catalogHref, createCatalog, toSlug } from './catalog.js';

const fixture = [
    {
        id: 1,
        name: 'Automatic Transfer Switch',
        products: [
            { productId: 11, name: 'ASP Anti-Surge Module' },
            { productId: 12, name: 'SKT1 Series Class PC ATS' },
        ],
    },
    {
        id: 5,
        name: 'Molded Case Circuit Breaker',
        products: [
            { productId: 51, name: 'ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker' },
        ],
    },
];

describe('catalog query', () => {
    const query = createCatalog(fixture);

    it('builds a slug from a category name', () => {
        expect(toSlug('Automatic Transfer Switch')).toBe('automatic-transfer-switch');
    });

    it('finds a category by slug', () => {
        expect(query.getCategoryBySlug('automatic-transfer-switch')?.name).toBe('Automatic Transfer Switch');
    });

    it('finds a product by id', () => {
        expect(query.getProductById(12)?.name).toBe('SKT1 Series Class PC ATS');
    });

    it('searches products by name fragment', () => {
        expect(query.searchProducts('skt1').map((product) => product.productId)).toEqual([12]);
    });

    it('returns no products for an empty query', () => {
        expect(query.searchProducts('')).toEqual([]);
        expect(query.searchProducts('   ')).toEqual([]);
    });

    it('builds catalog hrefs', () => {
        expect(catalogHref({ productId: 11 })).toBe('/products/11');
        expect(catalogHref({ categorySlug: 'automatic-transfer-switch' })).toBe('/products?category=automatic-transfer-switch');
        expect(catalogHref({ query: 'SKT1' })).toBe('/products?q=SKT1');
    });
});

describe('site catalog index', () => {
    it('keeps featured product ids addressable', () => {
        expect(catalog.getProductById(11)?.name).toBe('ASP Anti-Surge Module');
        expect(catalog.getProductById(51)?.categorySlug).toBe('molded-case-circuit-breaker');
    });

    it('lists every category for navigation', () => {
        expect(catalog.getCategories().map((category) => category.slug)).toContain('battery-charger');
    });
});
