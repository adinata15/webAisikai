import { useEffect, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import PageShell from '../components/PageShell';
import Breadcrumb from '../components/Breadcrumb';
import { attachCatalogIds, catalogHref, createCatalog } from '../catalog/catalog.js';
import { categories as rawCategories } from '../catalog/data.jsx';
import { PiEnvelopeSimple } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdCloudDownload } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";

const productCatalog = createCatalog(attachCatalogIds(rawCategories));
const categories = productCatalog.getCategories();

const PRODUCTS_PER_PAGE = 9;
const EXPANDABLE_CATEGORY_IDS = new Set([1, 5]);

const DETAIL_TABS = [
    { id: 'description', label: 'Description' },
    { id: 'technicalparameters', label: 'Technical Parameters' },
    { id: 'structureoverview', label: 'Structure Overview' },
    { id: 'faq', label: 'FAQ' },
    { id: 'brochure', label: 'Brochure' },
];

function uniqueSubcategories(category) {
    return [...new Set(category.products.map((product) => product.categori).filter(Boolean))];
}

function fileName(path, fallback) {
    return path?.split('/').pop() || fallback;
}

function paginate(items, page, perPage) {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
}

function pageButtonClass(current, disabled) {
    if (disabled) {
        return "min-h-11 min-w-11 rounded-lg border border-border bg-background px-3 py-1 text-muted cursor-not-allowed";
    }
    if (current) {
        return "min-h-11 min-w-11 rounded-lg border border-accent bg-accent px-3 py-1 text-white";
    }
    return "min-h-11 min-w-11 rounded-lg border border-border bg-card px-3 py-1 text-foreground hover:bg-background";
}

function inquireHref(productName) {
    const text = encodeURIComponent(`Halo, Saya tertarik dengan produk Aisikai: ${productName}`);
    return `https://wa.me/6285176879999?text=${text}`;
}

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className="flex justify-center mt-6 gap-2 notranslate" translate="no" aria-label="Pagination">
            <button
                type="button"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={pageButtonClass(false, currentPage === 1)}
            >
                <span aria-hidden="true">&laquo;</span>
            </button>

            {pageNumbers.map((number) => (
                <button
                    type="button"
                    key={number}
                    onClick={() => onPageChange(number)}
                    aria-label={`Page ${number}`}
                    aria-current={currentPage === number ? 'page' : undefined}
                    className={pageButtonClass(currentPage === number, false)}
                >
                    {number}
                </button>
            ))}

            <button
                type="button"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={pageButtonClass(false, currentPage === totalPages)}
            >
                <span aria-hidden="true">&raquo;</span>
            </button>
        </nav>
    );
};

function CategorySidebar({ activeCategory, subcategoryName }) {
    return (
        <aside className="w-full xl:w-[25rem] p-4 rounded-lg items-center flex flex-col justify-center">
            <div className="flex w-full items-center justify-center rounded-t-lg bg-accent py-4">
                <h2 className="text-md font-bold text-white">Product Category</h2>
            </div>

            <ul className="w-full flex flex-col rounded-b-lg border border-border">
                {categories.map((category) => {
                    const isActive = activeCategory?.id === category.id;
                    const isExpandable = EXPANDABLE_CATEGORY_IDS.has(category.id);

                    return (
                        <li key={category.id}>
                            {isExpandable ? (
                                <div className="mb-2">
                                    <Link
                                        to={catalogHref({ categorySlug: category.slug })}
                                        className={`flex min-h-11 items-center justify-between border-b border-border px-4 py-3 text-sm
                                        ${isActive ? "bg-background text-link" : "bg-card text-foreground hover:bg-background"}`}
                                        aria-expanded={isActive}
                                        translate="no"
                                    >
                                        <span>{category.name}</span>
                                        <RiArrowDropDownLine className="text-xl" aria-hidden="true" />
                                    </Link>

                                    {isActive && (
                                        <ul className="ml-4 mt-2">
                                            {uniqueSubcategories(category).map((subcategory) => {
                                                const selected = subcategoryName === subcategory;
                                                const params = new URLSearchParams({
                                                    category: category.slug,
                                                    sub: subcategory,
                                                });

                                                return (
                                                    <li key={subcategory}>
                                                        <Link
                                                            to={`/products?${params}`}
                                                            className={`mb-1 block min-h-11 rounded-lg px-3 py-2 text-sm hover:text-link hover:underline ${selected ? "font-medium text-link" : "text-foreground"}`}
                                                            translate="no"
                                                        >
                                                            {subcategory}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={catalogHref({ categorySlug: category.slug })}
                                    className={`block min-h-11 border-b border-border px-4 py-4 text-sm hover:bg-background hover:text-link ${
                                        isActive ? "bg-background text-link" : "bg-card text-foreground"
                                    }`}
                                    translate="no"
                                >
                                    {category.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

function DetailPanel({ tabId, activeTab, className, children }) {
    if (activeTab !== tabId) return null;
    return (
        <div
            id={`detail-panel-${tabId}`}
            role="tabpanel"
            aria-labelledby={`detail-tab-${tabId}`}
            className={className}
        >
            {children}
        </div>
    );
}

function BrochureList({ brochure }) {
    if (!brochure) {
        return <p className="text-sm font-medium p-6">No brochure available.</p>;
    }

    if (Array.isArray(brochure)) {
        return brochure.map((item, index) => (
            <div key={item} className="flex flex-col xl:flex-row items-start justify-between border-b border-border py-6 hover:text-link">
                <div className="flex flex-row items-center w-full gap-2 min-w-0">
                    <FaFilePdf className="size-8 text-red-500 shrink-0" aria-hidden="true" />
                    <a href={item} className="w-full font-medium break-words" download>
                        {fileName(item, `Brochure ${index + 1}`)}
                    </a>
                </div>
                <IoMdCloudDownload className="size-7 shrink-0" aria-hidden="true" />
            </div>
        ));
    }

    return (
        <div className="flex flex-row items-center gap-2 p-6">
            <FaFilePdf aria-hidden="true" />
            <a
                href={brochure}
                className="break-words font-medium text-link underline"
                download
            >
                {fileName(brochure, "Download Brochure")}
            </a>
        </div>
    );
}

function ProductDetail({ product, category, activeTab, onTabChange }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full px-6 rounded-lg shadow flex flex-col xl:flex-row gap-6 justify-center items-center">
                <div className="size-full xl:size-1/2 p-2 aspect-square">
                    <img
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-contain"
                        translate="no"
                    />
                </div>

                <div className="xl:w-1/2 flex flex-col justify-start py-4 gap-2">
                    <h2 className="text-2xl font-bold mb-2" translate="no">{product.name}</h2>
                    <p className="text-sm mb-2">{product.subtitle || "N/A"}</p>
                    <p className="text-md mb-2"><strong>Model:</strong> <span translate="no">{product.model || "N/A"}</span></p>
                    <p className="text-md mb-4"><strong>Brand:</strong> <span translate="no">{product.brand || "N/A"}</span></p>
                    <a
                        href={inquireHref(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto self-start"
                    >
                        Inquire on WhatsApp
                    </a>
                </div>
            </div>

            <div className="w-full rounded-lg border border-border bg-background">
                <div className="flex flex-col xl:flex-row" role="tablist" aria-label="Product details">
                    {DETAIL_TABS.map((tab) => {
                        const selected = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                role="tab"
                                id={`detail-tab-${tab.id}`}
                                aria-selected={selected}
                                aria-controls={`detail-panel-${tab.id}`}
                                tabIndex={selected ? 0 : -1}
                                className={`min-h-11 border-b-2 px-4 py-3 font-medium ${selected ? "border-link bg-card text-link" : "border-transparent bg-background text-foreground hover:bg-card"}`}
                                onClick={() => onTabChange(tab.id)}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <DetailPanel tabId="description" activeTab={activeTab} className="h-auto text-foreground">
                    <p className="bg-card p-6 text-sm font-medium">{product.description || "No description available."}</p>
                </DetailPanel>

                <DetailPanel tabId="technicalparameters" activeTab={activeTab} className="h-auto bg-card p-6 text-foreground">
                    {Array.isArray(product.technicalparameters) ? (
                        product.technicalparameters.map((image, index) => (
                            <img
                                key={`${image}-${index}`}
                                src={image || product.none}
                                alt={`${product.name} technical parameters ${index + 1}`}
                                width={1200}
                                height={800}
                                loading="lazy"
                                className="w-full mb-4 h-auto"
                            />
                        ))
                    ) : (
                        <img
                            src={product.technicalparameters || product.none}
                            alt={`${product.name} technical parameters`}
                            width={1200}
                            height={800}
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    )}
                </DetailPanel>

                <DetailPanel tabId="structureoverview" activeTab={activeTab} className="h-auto bg-card p-6 text-foreground">
                    <img
                        src={product.structureoverview || product.none}
                        alt={`${product.name} structure overview`}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="w-full h-full object-contain"
                    />
                </DetailPanel>

                <DetailPanel tabId="faq" activeTab={activeTab} className="h-auto bg-card p-6 text-foreground">
                    <p className="text-sm font-medium">{product.faq || "No FAQ available."}</p>
                </DetailPanel>

                <DetailPanel tabId="brochure" activeTab={activeTab} className="flex flex-col justify-between gap-4 overflow-auto bg-card px-6 sm:px-12">
                    <BrochureList brochure={product.brochure} />
                </DetailPanel>
            </div>

            {category && (
                <div className="mt-8 w-full rounded-lg border border-border bg-card p-6">
                    <h2 className="text-lg font-bold mb-4">Other Products in <span translate="no">{category.name}</span></h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {category.products
                            .filter((other) => other.productId !== product.productId)
                            .map((other) => (
                                <li key={other.productId ?? other.name}>
                                    <Link
                                        to={catalogHref({ productId: other.productId })}
                                        className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background p-2 hover:bg-card"
                                    >
                                        <div className="aspect-square w-full overflow-hidden rounded-lg bg-card">
                                            <img
                                                src={other.image}
                                                alt={other.name}
                                                width={168}
                                                height={168}
                                                loading="lazy"
                                                className="h-full w-full object-contain"
                                                translate="no"
                                            />
                                        </div>
                                        <h3 className="text-md font-medium text-center line-clamp-2" translate="no">{other.name}</h3>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function ProductGrid({ products, heading, showCategory, currentPage, onPageChange }) {
    const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));
    const page = Math.min(currentPage, totalPages);
    const pageItems = paginate(products, page, PRODUCTS_PER_PAGE);

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
                <h2 className="text-lg font-bold">{heading}</h2>
                <p className="text-muted">No products matched your search. Try a different name or browse the full catalog.</p>
                <Link to="/products" className="btn-primary">
                    See All Products
                </Link>
            </div>
        );
    }

    return (
        <>
            <h2 className="text-lg font-bold mb-4 self-center">{heading}</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((product) => (
                    <li
                        key={product.productId ?? product.name}
                        className="flex min-w-0 flex-col gap-2 rounded-lg border border-border bg-card p-2 hover:bg-background"
                    >
                        <Link to={catalogHref({ productId: product.productId })} className="flex flex-col items-center gap-2 rounded-lg">
                            <div className="aspect-square w-full overflow-hidden rounded-lg bg-background">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={168}
                                    height={168}
                                    loading="lazy"
                                    className="h-full w-full object-contain"
                                    translate="no"
                                />
                            </div>
                            <h3 className="line-clamp-2 text-center text-sm font-medium text-foreground" translate="no">{product.name}</h3>
                        </Link>
                        {showCategory && product.categoryName && (
                            <p className="text-center text-sm text-muted" translate="no">{product.categoryName}</p>
                        )}
                        <a
                            href={inquireHref(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex min-h-11 w-full flex-row items-center justify-center gap-2 rounded-lg border border-border bg-background py-2 hover:bg-card"
                        >
                            <PiEnvelopeSimple aria-hidden="true" />
                            <span>Inquire on WhatsApp</span>
                        </a>
                    </li>
                ))}
            </ul>
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                onPageChange={onPageChange}
            />
        </>
    );
}

const Products = () => {
    const { productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const categorySlug = searchParams.get('category');
    const query = searchParams.get('q') ?? '';
    const subcategoryName = searchParams.get('sub');
    const pageParam = Number(searchParams.get('page') || '1');
    const currentPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
    const detailTabParam = searchParams.get('tab');
    const activeTab = DETAIL_TABS.some((tab) => tab.id === detailTabParam)
        ? detailTabParam
        : 'description';

    const selectedProduct = productId ? productCatalog.getProductById(productId) : null;
    const listCategory = categorySlug ? productCatalog.getCategoryBySlug(categorySlug) : null;
    const activeCategory = selectedProduct
        ? productCatalog.getCategoryBySlug(selectedProduct.categorySlug) ?? listCategory
        : listCategory;

    const productsToShow = useMemo(() => {
        if (productId) {
            return [];
        }
        if (query) {
            return productCatalog.searchProducts(query);
        }
        if (listCategory) {
            return subcategoryName
                ? listCategory.products.filter((product) => product.categori === subcategoryName)
                : listCategory.products;
        }
        return productCatalog.getAllProducts();
    }, [productId, query, listCategory, subcategoryName]);

    useEffect(() => {
        if (!productId && detailTabParam) {
            const next = new URLSearchParams(searchParams);
            next.delete('tab');
            setSearchParams(next, { replace: true });
        }
    }, [productId, detailTabParam, searchParams, setSearchParams]);

    const updateParams = (mutator) => {
        const next = new URLSearchParams(searchParams);
        mutator(next);
        setSearchParams(next);
    };

    const setDetailTab = (tabId) => {
        updateParams((params) => {
            if (tabId === "description") params.delete("tab");
            else params.set("tab", tabId);
        });
    };

    const setPage = (page) => {
        updateParams((params) => {
            if (page <= 1) params.delete("page");
            else params.set("page", String(page));
        });
    };

    const listHeading = query
        ? `Search: ${query}`
        : listCategory
            ? listCategory.name
            : "All Products";

    const pageTitle = selectedProduct?.name ?? "Products";

    return (
        <PageShell>
            <Breadcrumb pageName={pageTitle} />

            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 px-6 xl:px-16 3xl:px-60 py-12">
                <CategorySidebar
                    activeCategory={activeCategory}
                    subcategoryName={subcategoryName}
                />

                <div className="flex w-full flex-col rounded-lg border border-border bg-card p-4">
                    {selectedProduct ? (
                        <ProductDetail
                            product={selectedProduct}
                            category={activeCategory}
                            activeTab={activeTab}
                            onTabChange={setDetailTab}
                        />
                    ) : (
                        <ProductGrid
                            products={productsToShow}
                            heading={listHeading}
                            showCategory={!listCategory}
                            currentPage={currentPage}
                            onPageChange={setPage}
                        />
                    )}
                </div>
            </div>
        </PageShell>
    );
};

export default Products;
