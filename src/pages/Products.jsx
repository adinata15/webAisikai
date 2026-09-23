import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import SideContact from '../components/SideContact';
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

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center mt-6 gap-2 notranslate" translate="no">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                &laquo;
            </button>

            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-3 py-1 rounded ${currentPage === number ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {number}
                </button>
            ))}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
                &raquo;
            </button>
        </div>
    );
};

function CategorySidebar({ activeCategory, onOpenCategory, onSelectSubcategory }) {
    return (
        <div className="w-full xl:w-[25rem] p-4 rounded-lg items-center flex flex-col justify-center">
            <div className="bg-primary flex justify-center items-center w-full py-4">
                <h2 className="text-md font-bold text-white">Product Category</h2>
            </div>

            <ul className="w-full flex flex-col border border-gray-300">
                {categories.map((category) => {
                    const isActive = activeCategory?.id === category.id;
                    const isExpandable = EXPANDABLE_CATEGORY_IDS.has(category.id);

                    return (
                        <li key={category.id}>
                            {isExpandable ? (
                                <div className="mb-2">
                                    <div
                                        className={`px-4 py-3 text-sm border-b border-gray-300 cursor-pointer flex justify-between items-center
                                        ${isActive ? "bg-white text-primary" : "bg-white text-gray-700"}`}
                                        onClick={() => onOpenCategory(category)}
                                    >
                                        <span>{category.name}</span>
                                        <RiArrowDropDownLine className="text-xl" />
                                    </div>

                                    {isActive && (
                                        <div className="ml-4 mt-2">
                                            {uniqueSubcategories(category).map((subcategory) => (
                                                <div
                                                    key={subcategory}
                                                    className="px-3 py-2 text-sm mb-1 cursor-pointer hover:text-primary hover:underline"
                                                    onClick={() => onSelectSubcategory(subcategory)}
                                                >
                                                    {subcategory}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={`px-4 py-4 text-sm border-b border-gray-300 cursor-pointer hover:bg-gray-200 hover:text-primary ${
                                        isActive ? "bg-white text-primary" : "bg-white text-gray-700"
                                    }`}
                                    onClick={() => onOpenCategory(category)}
                                >
                                    {category.name}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

function BrochureList({ brochure }) {
    if (Array.isArray(brochure)) {
        return brochure.map((item, index) => (
            <div key={index} className="flex flex-col xl:flex-row items-start justify-between py-6 border-b border-b-gray-300 hover:text-primary">
                <div className="flex flex-row items-center w-full gap-2">
                    <FaFilePdf className="size-8 text-red-500"/>
                    <a href={item} className="w-full font-medium" download>
                        {fileName(item, `Brochure ${index + 1}`)}
                    </a>
                </div>
                <IoMdCloudDownload className="size-7"/>
            </div>
        ));
    }

    return (
        <div className="flex flex-row items-center gap-2">
            <FaFilePdf />
            <a
                href={brochure || "#"}
                className="text-primary font-medium underline"
                download
            >
                {fileName(brochure, "Download Brochure")}
            </a>
        </div>
    );
}

function ProductDetail({ product, category }) {
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        setActiveTab('description');
    }, [product.productId]);

    return (
        <div className='flex flex-col gap-4'>
            <div className="w-full px-6 rounded-lg shadow flex flex-col xl:flex-row gap-6 justify-center items-center">
                <div className='size-full xl:size-1/2 p-2'>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                <div className="xl:w-1/2 flex flex-col justify-start py-4">
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className='text-sm mb-4'> {product.subtitle || "N/A"} </p>
                    <p className="text-md mb-4"><strong>Model:</strong> {product.model || "N/A"}</p>
                    <p className="text-md mb-4"><strong>Brand:</strong> {product.brand || "N/A"}</p>
                    <a href="mailto:detapowergensetindonesia@gmail.com" className='text-white bg-primary px-18 xl:mb-6 xl:px-24 py-2 w-1/3 font-medium text-md border-[0.1rem] rounded-full flex items-center justify-center'>Inquire</a>
                </div>
            </div>

            <div className="w-full bg-gray-100 rounded-lg border border-gray-300">
                <div className="flex flex-col xl:flex-row">
                    {DETAIL_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`bg-gray-100 px-4 py-3 font-medium ${activeTab === tab.id ? "bg-white text-primary" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {activeTab === "description" && (
                    <div className="h-auto text-gray-700">
                        <p className='text-sm font-medium p-6 bg-white'>{product.description || "No description available."}</p>
                    </div>
                )}

                {activeTab === "technicalparameters" && (
                    <div className="h-auto text-gray-700 p-6 bg-white">
                        {Array.isArray(product.technicalparameters) ? (
                            product.technicalparameters.map((image, index) => (
                                <img key={index} src={image || product.none} className="w-full mb-4" />
                            ))
                        ) : (
                            <img src={product.technicalparameters || product.none} className="w-full" />
                        )}
                    </div>
                )}

                {activeTab === "structureoverview" && (
                    <div className="h-auto text-gray-700 p-6 bg-white">
                        <img src={product.structureoverview || product.none} className='w-full h-full object-contain'/>
                    </div>
                )}

                {activeTab === "faq" && (
                    <div className="h-auto text-gray-700 p-6 bg-white">
                        <p className='text-sm font-medium'>{product.faq || "No FAQ Available"}</p>
                    </div>
                )}

                {activeTab === "brochure" && (
                    <div className="flex flex-col gap-4 overflow-auto bg-white px-12 justify-between">
                        <BrochureList brochure={product.brochure} />
                    </div>
                )}
            </div>

            {category && (
                <div className="w-full bg-white p-6 rounded-lg shadow mt-8">
                    <h2 className="text-lg font-bold mb-4">Other Products in {category.name}</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {category.products
                            .filter((other) => other.productId !== product.productId)
                            .map((other) => (
                                <li key={other.productId ?? other.name}>
                                    <Link
                                        to={catalogHref({ productId: other.productId })}
                                        className="flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow"
                                    >
                                        <img src={other.image} alt={other.name} className="size-42 object-cover rounded-lg" />
                                        <h3 className="text-md font-medium">{other.name}</h3>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function ProductGrid({ products, heading, showCategory }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    return (
        <>
            <h2 className="text-lg font-bold mb-4 self-center">{heading}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {paginate(products, currentPage, PRODUCTS_PER_PAGE).map((product) => (
                    <li
                        key={product.productId ?? product.name}
                        className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow"
                    >
                        <Link to={catalogHref({ productId: product.productId })} className="flex flex-col items-center justify-center gap-4">
                            <img src={product.image} alt={product.name} className="size-42 object-cover rounded-lg" />
                            <h3 className="text-md font-medium">{product.name}</h3>
                        </Link>
                        {showCategory && product.categoryName && (
                            <p className="text-sm text-gray-500">{product.categoryName}</p>
                        )}
                        <a
                            href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex flex-row justify-center items-center gap-2 bg-gray-200 w-full py-2 rounded-sm'
                            onClick={e => e.stopPropagation()}
                        >
                            <PiEnvelopeSimple />
                            <span>Inquire</span>
                        </a>
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </>
    );
}

const Products = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    const categorySlug = searchParams.get('category');
    const query = searchParams.get('q') ?? '';

    const [subcategoryName, setSubcategoryName] = useState(null);

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
        if (!categorySlug) {
            setSubcategoryName(null);
        }
    }, [categorySlug]);

    const listHeading = query
        ? `Search: ${query}`
        : listCategory
            ? listCategory.name
            : "All Products";

    return (
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col">
                <SideContact className="absolute" />
                <Header />
                <Breadcrumb pageName={"Products"}/>

                <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 px-6 xl:px-16 3xl:px-60 py-12">
                    <CategorySidebar
                        activeCategory={activeCategory}
                        onOpenCategory={(category) => {
                            setSubcategoryName(null);
                            navigate(catalogHref({ categorySlug: category.slug }));
                        }}
                        onSelectSubcategory={setSubcategoryName}
                    />

                    <div className="w-full bg-white p-4 rounded-lg flex flex-col">
                        {selectedProduct ? (
                            <ProductDetail product={selectedProduct} category={activeCategory} />
                        ) : (
                            <ProductGrid
                                products={productsToShow}
                                heading={listHeading}
                                showCategory={!listCategory}
                            />
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    );
};

export default Products;
