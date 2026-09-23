import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import Nav from './Nav';
import MobileMenu from './MobileMenu';
import { catalog, catalogHref } from '../catalog/catalog.js';

import logoAisikai from '../assets/images/logo-aisikai.jpg';
import iconIndonesia from '../assets/icons/indonesia.svg';
import iconUk from '../assets/icons/uk.svg';

const Header = () => {
    const navigate = useNavigate();

    const navLink = [
        {label: "Home", href: "/"},
        {label: "Products", href: "/products"},
        {label: "About Us", href: "/about-us"},
        {label: "Download", href: "/download"},
        {label: "Contact Us", href: "/contact-us"},
    ];

    const [showMenu, setShowMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [, setLanguage] = useState(() => {
        // Inisialisasi dari localStorage saat komponen dimuat pertama kali
        return localStorage.getItem('preferredLanguage') || "en";
    });
    // Default language is English

    // Inject CSS untuk menyembunyikan bar Google Translate
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .goog-te-banner-frame, .skiptranslate {
                display: none !important;
            }
            body {
                top: 0 !important;
            }
            .goog-tooltip {
                display: none !important;
            }
            .goog-tooltip:hover {
                display: none !important;
            }
            .goog-text-highlight {
                background-color: transparent !important;
                border: none !important; 
                box-shadow: none !important;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    // Fungsi untuk menetapkan cookie lintas domain
    const setCrossDomainCookie = (name, value, domain) => {
        // Set untuk domain saat ini
        document.cookie = `${name}=${value}; path=/;`;

        // Set untuk root domain
        if (domain) {
            document.cookie = `${name}=${value}; path=/; domain=${domain};`;
        }

        // Set untuk subdomain
        if (window.location.hostname !== 'localhost') {
            document.cookie = `${name}=${value}; path=/; domain=.${window.location.hostname};`;
        }
    };

    // Fungsi untuk mendapatkan domain root
    const getRootDomain = () => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost') return null;

        const parts = hostname.split('.');
        if (parts.length <= 2) return hostname; // domain.com

        // mendapatkan domain.com dari subdomain.domain.com
        return parts.slice(-2).join('.');
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

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
        if (!query) {
            return;
        }
        navigate(catalogHref({ query }));
        clearSearch();
    };

    const handleLanguageChange = (lang) => {
        // Simpan preferensi bahasa di localStorage
        localStorage.setItem('preferredLanguage', lang);
        setLanguage(lang);

        if (lang === "id") {
            const existingElements = document.querySelectorAll('.skiptranslate, #google_translate_element');
            existingElements.forEach(el => {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            });

            // 2. Buat container untuk Google Translate yang tersembunyi
            const div = document.createElement('div');
            div.id = 'google_translate_element';
            div.style.display = 'none';
            document.body.appendChild(div);

            // 3. Set cookie untuk Google Translate di semua domain/subdomain yang mungkin
            const rootDomain = getRootDomain();
            setCrossDomainCookie('googtrans', '/en/id', rootDomain);
            setCrossDomainCookie('googtrans', '/en/id', null);

            // 4. Hapus script yang sudah ada
            const existingScript = document.getElementById('google-translate-script');
            if (existingScript) {
                existingScript.remove();
            }

            // 5. Tambahkan script baru
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            // 6. Definisikan fungsi init global
            window.googleTranslateElementInit = function() {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'id,en',
                    autoDisplay: false,
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');

                // Tambahkan class untuk membantu CSS menyembunyikan banner
                document.body.classList.add('translated');

                // Atur ulang posisi halaman setelah Google Translate mengubahnya
                setTimeout(() => {
                    document.body.style.top = '0px';
                    document.getElementsByTagName('html')[0].style.transform = 'none';
                }, 300);
            };
        } else {
            // Kembali ke bahasa Inggris
            // Hapus cookie Google Translate dari semua domain yang mungkin
            const rootDomain = getRootDomain();
            document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            if (rootDomain) {
                document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
            }
            document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;

            // Hapus class
            document.body.classList.remove('translated');

            // Refresh halaman untuk kembali ke bahasa asli
            window.location.reload();
        }
    };

    // Panggil handleLanguageChange saat komponen dimount
    // jika bahasa sudah diset sebagai 'id' di localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang === 'id') {
            handleLanguageChange('id');
        }

        // Cleanup
        return () => {
            // Bersihkan semua interval dan timeout yang dibuat
            const highestTimeoutId = window.setTimeout(() => {}, 0);
            for (let i = 0; i < highestTimeoutId; i++) {
                window.clearTimeout(i);
            }
        };
    }, []);

    return (
        <section className="bg-linear-to-r from-white via-blue-50 to-white relative flex flex-row gap-4 py-6 xl:py-[0.05rem] px-6 xl:px-16 justify-between items-center">
            <div className="flex items-center">
                <Link to="/">
                    <img src={logoAisikai} alt="logo-aisikai" className='w-[10rem] 2xl:w-[12rem]'/>
                </Link> 
            </div>

            <div className="hidden xl:flex">
                <Nav linkToNav={navLink} />
            </div>

            <div className='flex flex-row items-center justify-end gap-8'>
                <div className='hidden xl:flex flex-col relative'>
                    <div className='flex flex-row items-center px-4 bg-gray-100 rounded-full'>
                        <FiSearch className="bg-gray-100 size-4"/>
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
                            className="px-4 py-2 rounded-full outline-none flex-1 w-40"
                        />
                    </div>
                    {filteredProducts.length > 0 && (
                        <ul className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10">
                            {filteredProducts.map((product) => (
                                <li key={product.productId}>
                                    <Link
                                        to={catalogHref({ productId: product.productId })}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={clearSearch}
                                    >
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className='hidden xl:flex flex-row gap-4 justify-center items-center'>
                    <button className="w-8 cursor-pointer" onClick={() => handleLanguageChange("id")}>
                        <img src={iconIndonesia} alt="button-bahasaindonesia" className="w-full h-full object-cover"/>
                    </button>
                    <button className="w-8 cursor-pointer" onClick={() => handleLanguageChange("en")}>
                        <img src={iconUk} alt="button-english" className="w-full h-full object-cover"/>
                    </button>
                </div>
            </div>
            
            <button className='xl:hidden'>
                <FiMenu className="size-[2.5rem]" onClick={handleShowMenu}/>
            </button>

            {showMenu && 
                (
                    <div className="absolute top-0 w-full left-0 z-20">
                        <div className="">
                            <MobileMenu logo={logoAisikai} handleShowMenu={handleShowMenu} />
                        </div>
                    </div> 
                )
            }

            <div id='google_translate_element' className='hidden'></div>
        </section>
    );

    
};

export default Header;