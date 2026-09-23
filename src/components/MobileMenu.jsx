import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { catalog, catalogHref } from "../catalog/catalog.js";

import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import iconIndonesia from "../assets/icons/indonesia.svg";
import iconUk from "../assets/icons/uk.svg";
import ThemeToggle from "./ThemeToggle";

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function AccordionSection({ label, open, onToggle, children }) {
    return (
        <div className="flex flex-col border-b border-border">
            <button
                type="button"
                className="flex items-center justify-between py-2 min-h-11 rounded-sm"
                aria-expanded={open}
                onClick={onToggle}
            >
                <span>{label}</span>
                {open
                    ? <IoIosArrowUp className="size-5" aria-hidden="true" />
                    : <IoIosArrowDown className="size-5" aria-hidden="true" />}
            </button>
            {open && children}
        </div>
    );
}

const MobileMenu = ({ logo, onClose, onLanguageChange, language, isDark, onToggleTheme }) => {
    const navigate = useNavigate();
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);

    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const productCategories = catalog.getCategories();

    useEffect(() => {
        closeButtonRef.current?.focus();

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }

            if (event.key !== "Tab" || !dialogRef.current) return;

            const focusable = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

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
        onClose();
    };

    const submitSearch = () => {
        const query = searchQuery.trim();
        if (!query) return;
        navigate(catalogHref({ query }));
        closeMenu();
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/40 xl:hidden"
            role="presentation"
            onClick={onClose}
        >
            <div
                ref={dialogRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className="absolute inset-0 min-h-screen gap-8 bg-card text-foreground flex flex-col p-8 overflow-y-auto overscroll-contain"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex flex-row justify-between items-center">
                    <Link to="/" onClick={onClose} aria-label="AISIKAI home">
                        <img src={logo} alt="AISIKAI" width={120} height={40} translate="no" className="w-30 h-auto" />
                    </Link>

                    <div className="flex items-center gap-2">
                        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={onClose}
                            className="self-end min-h-11 min-w-11 flex items-center justify-center rounded-sm"
                            aria-label="Close menu"
                        >
                            <IoCloseCircle className="size-[2rem]" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="relative">
                        <div className="flex flex-row items-center rounded-lg border border-border bg-background px-4 focus-within:ring-2 focus-within:ring-focus">
                            <FiSearch className="size-6 text-muted" aria-hidden="true" />
                            <label htmlFor="mobile-search" className="sr-only">Search products</label>
                            <input
                                id="mobile-search"
                                type="search"
                                name="search"
                                autoComplete="off"
                                placeholder="Search…"
                                value={searchQuery}
                                onChange={handleSearch}
                                onKeyDown={(event) => {
                                    if (event.key !== "Enter") return;
                                    event.preventDefault();
                                    submitSearch();
                                }}
                                className="flex-1 bg-transparent px-4 py-4 text-foreground focus:outline-none"
                            />
                        </div>
                        {filteredProducts.length > 0 && (
                            <ul className="absolute top-14 left-0 z-10 w-full rounded-lg border border-border bg-card shadow-lg">
                                {filteredProducts.map((product) => (
                                    <li key={product.productId}>
                                        <Link
                                            to={catalogHref({ productId: product.productId })}
                                            className="block px-4 py-2 hover:bg-background"
                                            onClick={closeMenu}
                                            translate="no"
                                        >
                                            {product.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <nav className="flex flex-col gap-3 text-lg" aria-label="Mobile">
                        <Link to="/" className="py-2 border-b border-border rounded-sm" onClick={onClose}>Home</Link>

                        <AccordionSection
                            label="Products"
                            open={isProductsOpen}
                            onToggle={() => setIsProductsOpen((open) => !open)}
                        >
                            <ul className="pl-4 py-2 flex flex-col gap-2 border-l-2 border-border">
                                {productCategories.map((category) => (
                                    <li key={category.slug}>
                                        <Link
                                            to={catalogHref({ categorySlug: category.slug })}
                                            className="block py-1 hover:text-link rounded-sm"
                                            onClick={onClose}
                                            translate="no"
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionSection>

                        <Link to="/about-us" className="py-2 border-b border-border rounded-sm" onClick={onClose}>About Us</Link>
                        <Link to="/certificate" className="py-2 border-b border-border rounded-sm" onClick={onClose}>Certificates</Link>
                        <Link to="/gallery" className="py-2 border-b border-border rounded-sm" onClick={onClose}>Gallery</Link>
                        <Link to="/catalogue" className="py-2 border-b border-border rounded-sm" onClick={onClose}>Catalogue</Link>
                        <Link to="/contact-us" className="py-2 border-b border-border rounded-sm" onClick={onClose}>Contact Us</Link>
                    </nav>
                </div>

                <div className="flex flex-row gap-2 items-center pb-16">
                    <button
                        type="button"
                        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 p-1 ${language === "id" ? "border-link bg-background" : "border-border bg-card"}`}
                        onClick={() => onLanguageChange("id")}
                        aria-label="Switch to Bahasa Indonesia"
                        aria-pressed={language === "id"}
                    >
                        <img src={iconIndonesia} alt="" width={28} height={28} className="size-7 object-cover" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 p-1 ${language === "en" ? "border-link bg-background" : "border-border bg-card"}`}
                        onClick={() => onLanguageChange("en")}
                        aria-label="Switch to English"
                        aria-pressed={language === "en"}
                    >
                        <img src={iconUk} alt="" width={28} height={28} className="size-7 object-cover" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
