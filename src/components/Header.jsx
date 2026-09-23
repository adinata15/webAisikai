import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";

import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import ThemeToggle, { useTheme } from "./ThemeToggle";
import { catalog, catalogHref } from "../catalog/catalog.js";

import logoAisikai from "../assets/images/logo-aisikai.jpg";
import iconIndonesia from "../assets/icons/indonesia.svg";
import iconUk from "../assets/icons/uk.svg";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us" },
    { label: "Certificates", href: "/certificate" },
    { label: "Gallery", href: "/gallery" },
    { label: "Catalogue", href: "/catalogue" },
    { label: "Contact Us", href: "/contact-us" },
];

const TRANSLATE_HIDE_CSS = `
.goog-te-banner-frame, .skiptranslate { display: none !important; }
body { top: 0 !important; }
.goog-tooltip, .goog-tooltip:hover { display: none !important; }
.goog-text-highlight {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
}
`;

function getRootDomain() {
    const hostname = window.location.hostname;
    if (hostname === "localhost") return null;
    const parts = hostname.split(".");
    return parts.length <= 2 ? hostname : parts.slice(-2).join(".");
}

function setGoogtransCookie(value) {
    const rootDomain = getRootDomain();
    document.cookie = `googtrans=${value}; path=/;`;
    if (rootDomain) {
        document.cookie = `googtrans=${value}; path=/; domain=${rootDomain};`;
    }
    if (window.location.hostname !== "localhost") {
        document.cookie = `googtrans=${value}; path=/; domain=.${window.location.hostname};`;
    }
}

function clearGoogtransCookie() {
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    const rootDomain = getRootDomain();
    document.cookie = `googtrans=; ${expired}; path=/;`;
    if (rootDomain) {
        document.cookie = `googtrans=; ${expired}; path=/; domain=${rootDomain};`;
    }
    document.cookie = `googtrans=; ${expired}; path=/; domain=.${window.location.hostname};`;
}

const Header = () => {
    const navigate = useNavigate();
    const menuButtonRef = useRef(null);

    const { isDark, toggleTheme } = useTheme();
    const [showMenu, setShowMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [language, setLanguage] = useState(
        () => localStorage.getItem("preferredLanguage") || "en"
    );

    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = TRANSLATE_HIDE_CSS;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const closeMenu = useCallback(() => {
        setShowMenu(false);
        menuButtonRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!showMenu) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [showMenu]);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setFilteredProducts(catalog.searchProducts(query));
    };

    const clearSearch = () => {
        setSearchQuery("");
        setFilteredProducts([]);
    };

    const submitSearch = () => {
        const query = searchQuery.trim();
        if (!query) return;
        navigate(catalogHref({ query }));
        clearSearch();
    };

    const handleLanguageChange = useCallback((lang) => {
        localStorage.setItem("preferredLanguage", lang);
        setLanguage(lang);

        if (lang !== "id") {
            clearGoogtransCookie();
            document.body.classList.remove("translated");
            window.location.reload();
            return;
        }

        document.querySelectorAll(".skiptranslate, #google_translate_element").forEach((el) => {
            el.parentNode?.removeChild(el);
        });

        const div = document.createElement("div");
        div.id = "google_translate_element";
        div.style.display = "none";
        document.body.appendChild(div);

        setGoogtransCookie("/en/id");

        document.getElementById("google-translate-script")?.remove();

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "id,en",
                    autoDisplay: false,
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );

            document.body.classList.add("translated");
            setTimeout(() => {
                document.body.style.top = "0px";
                document.getElementsByTagName("html")[0].style.transform = "none";
            }, 300);
        };
    }, []);

    useEffect(() => {
        if (localStorage.getItem("preferredLanguage") === "id") {
            handleLanguageChange("id");
        }
    }, [handleLanguageChange]);

    return (
        <header className="relative z-30 flex flex-row items-center justify-between gap-4 border-b border-border bg-card px-6 py-4 text-foreground xl:px-16 xl:py-2">
            <div className="flex items-center">
                <Link to="/" className="rounded-sm" aria-label="AISIKAI home">
                    <img
                        src={logoAisikai}
                        alt="AISIKAI"
                        width={192}
                        height={64}
                        translate="no"
                        className="w-[10rem] 2xl:w-[12rem] h-auto"
                    />
                </Link>
            </div>

            <div className="hidden xl:flex">
                <Nav linkToNav={NAV_LINKS} />
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
                <div className="hidden xl:flex flex-col relative">
                    <div className="flex flex-row items-center rounded-lg border border-border bg-background px-4 focus-within:ring-2 focus-within:ring-focus">
                        <FiSearch className="size-4 text-muted" aria-hidden="true" />
                        <label htmlFor="header-search" className="sr-only">Search products</label>
                        <input
                            id="header-search"
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
                            className="w-40 flex-1 bg-transparent px-4 py-2 text-foreground focus:outline-none"
                        />
                    </div>
                    {filteredProducts.length > 0 && (
                        <ul className="absolute top-12 left-0 z-10 w-full rounded-lg border border-border bg-card shadow-lg" role="listbox">
                            {filteredProducts.map((product) => (
                                <li key={product.productId}>
                                    <Link
                                        to={catalogHref({ productId: product.productId })}
                                        className="block rounded-lg px-4 py-2 hover:bg-background"
                                        onClick={clearSearch}
                                        translate="no"
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="hidden xl:flex flex-row gap-2 justify-center items-center">
                    <button
                        type="button"
                        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 p-1 ${language === "id" ? "border-link bg-background" : "border-border bg-card"}`}
                        onClick={() => handleLanguageChange("id")}
                        aria-label="Switch to Bahasa Indonesia"
                        aria-pressed={language === "id"}
                    >
                        <img src={iconIndonesia} alt="" width={28} height={28} className="size-7 object-cover" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 p-1 ${language === "en" ? "border-link bg-background" : "border-border bg-card"}`}
                        onClick={() => handleLanguageChange("en")}
                        aria-label="Switch to English"
                        aria-pressed={language === "en"}
                    >
                        <img src={iconUk} alt="" width={28} height={28} className="size-7 object-cover" aria-hidden="true" />
                    </button>
                </div>

                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>

            <button
                ref={menuButtonRef}
                type="button"
                className="xl:hidden min-h-11 min-w-11 flex items-center justify-center rounded-sm"
                aria-label="Open menu"
                aria-expanded={showMenu}
                aria-controls="mobile-menu"
                onClick={() => setShowMenu((open) => !open)}
            >
                <FiMenu className="size-[2.5rem]" aria-hidden="true" />
            </button>

            {showMenu && (
                <MobileMenu
                    logo={logoAisikai}
                    onClose={closeMenu}
                    onLanguageChange={handleLanguageChange}
                    language={language}
                    isDark={isDark}
                    onToggleTheme={toggleTheme}
                />
            )}

            <div id="google_translate_element" className="hidden" />
        </header>
    );
};

export default Header;
