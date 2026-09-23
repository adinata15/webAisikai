import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { catalog, catalogHref } from "../catalog/catalog.js";

import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import iconIndonesia from '../assets/icons/indonesia.svg';
import iconUk from '../assets/icons/uk.svg';

const ABOUT_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Certificate", href: "/certificate" },
    { label: "Photo Gallery", href: "/photo-gallery" },
];

const MobileMenu = ({ logo, handleShowMenu }) => {
    const navigate = useNavigate();

    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const productCategories = catalog.getCategories();

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setFilteredProducts(catalog.searchProducts(query));
    };

    const clearSearch = () => {
        setSearchQuery("");
        setFilteredProducts([]);
    };

    const closeMenu = () => {
        clearSearch();
        handleShowMenu();
    };

    const submitSearch = () => {
        const query = searchQuery.trim();
        if (!query) {
            return;
        }
        navigate(catalogHref({ query }));
        closeMenu();
    };

    const toggleLanguage = (lang) => {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-translate]").forEach((element) => {
            const translation = element.getAttribute(lang === "id" ? "data-translate-id" : "data-translate-en");
            if (translation) element.textContent = translation;
        });
    };

    return (
        <section className="min-h-screen gap-8 bg-white flex flex-col p-8">
            <div className="flex flex-row justify-between items-center">
                <Link to="/" onClick={handleShowMenu}>
                    <img src={logo} alt="logo-aisikai" className="w-30"/>
                </Link>

                <button onClick={handleShowMenu} className="self-end">
                    <IoCloseCircle className="size-[2rem]"/>
                </button>
            </div>

            <div className="flex flex-col gap-8">
                <div className="relative">
                    <div className="bg-gray-100 flex flex-row items-center px-4">
                        <FiSearch className="bg-gray-100 size-6" />
                        <input
                            type="search"
                            name="search"
                            placeholder="Search…"
                            value={searchQuery}
                            onChange={handleSearch}
                            onKeyDown={(event) => {
                                if (event.key !== "Enter") return;
                                event.preventDefault();
                                submitSearch();
                            }}
                            className="bg-gray-100 px-4 py-4 rounded-full outline-none flex-1"
                        />
                    </div>
                    {filteredProducts.length > 0 && (
                        <ul className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10">
                            {filteredProducts.map((product) => (
                                <li key={product.productId}>
                                    <Link
                                        to={catalogHref({ productId: product.productId })}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={closeMenu}
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <nav className="flex flex-col gap-3 text-lg">
                    <Link to="/" className="py-2 border-b-2 border-black/10" onClick={handleShowMenu}>Home</Link>

                    <div className="flex flex-col border-b-2 border-black/10">
                        <button
                            className="flex items-center justify-between py-2"
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                        >
                            <span>Products</span>
                            {isProductsOpen ? <IoIosArrowUp className="size-5" /> : <IoIosArrowDown className="size-5" />}
                        </button>

                        {isProductsOpen && (
                            <ul className="pl-4 py-2 flex flex-col gap-2 border-l-2 border-gray-200">
                                {productCategories.map((category) => (
                                    <li key={category.slug}>
                                        <Link
                                            to={catalogHref({ categorySlug: category.slug })}
                                            className="block py-1 hover:text-blue-600"
                                            onClick={handleShowMenu}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col border-b-2 border-black/10">
                        <button
                            className="flex items-center justify-between py-2"
                            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                        >
                            <span>About Us</span>
                            {isAboutUsOpen ? <IoIosArrowUp className="size-5" /> : <IoIosArrowDown className="size-5" />}
                        </button>

                        {isAboutUsOpen && (
                            <div className="pl-4 py-2 flex flex-col gap-2 border-l-2 border-gray-200">
                                {ABOUT_LINKS.map((link) => (
                                    <Link key={link.href} to={link.href} className="py-2" onClick={handleShowMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/download" className="py-2 border-b-2 border-black/10" onClick={handleShowMenu}>Download</Link>
                    <Link to="/contact-us" className="py-2 border-b-2 border-black/10" onClick={handleShowMenu}>Contact Us</Link>
                </nav>
            </div>

            <div className='flex flex-row gap-8 items-center'>
                <button className="w-10" onClick={() => toggleLanguage("id")}>
                    <img src={iconIndonesia} alt="button-bahasaindonesia" className="w-full h-full object-cover"/>
                </button>
                <button className="w-10" onClick={() => toggleLanguage("en")}>
                    <img src={iconUk} alt="button-english" className="w-full h-full object-cover"/>
                </button>
            </div>
        </section>
    );
};

export default MobileMenu;
