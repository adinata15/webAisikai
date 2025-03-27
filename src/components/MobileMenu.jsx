import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

import iconIndonesia from '../assets/icons/indonesia.svg';
import iconUk from '../assets/icons/uk.svg';

const MobileMenu = ({ logo, linkToNav, handleShowMenu }) => {
    const navigate = useNavigate();

    const products = [
        "ASP Anti-Surge Module",
        "SKT1 Series Class PC ATS",
        "SKT2 Series Ultra-thin Class PC ATS",
        "ASKQ1 Series Household ATS 16A-63A",
        "ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker",
        "ASKW2 Series Fixed Type Intelligent Universal Circuit Breaker",
        // ...add more product names here...
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query) {
            const results = products.filter(product =>
                product.toLowerCase().includes(query)
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (productName) => {
        navigate('/products', { state: { search: productName } });
        setSearchQuery("");
        setFilteredProducts([]);
        handleShowMenu();
    };

    const toggleLanguage = (lang) => {
        document.documentElement.lang = lang;

        if (lang === "id") {
            document.querySelectorAll("[data-translate]").forEach((element) => {
                const translation = element.getAttribute("data-translate-id");
                if (translation) element.textContent = translation;
            });
        } else {
            document.querySelectorAll("[data-translate]").forEach((element) => {
                const original = element.getAttribute("data-translate-en");
                if (original) element.textContent = original;
            });
        }
    };

    return (
        <section className="min-h-screen gap-8 bg-white flex flex-col justify-between px-8 py-12">
            <button onClick={handleShowMenu} className="self-end">
                <IoCloseCircle className="size-[3rem]"/>
            </button>
            
            <div className="flex flex-col gap-8">
                <a href="/home">
                    <img src={logo} alt="logo-aisikai" className="w-full"/>
                </a>
                
                <div className="relative">
                    <div className="bg-gray-100 flex flex-row items-center px-4">
                        <FiSearch className="bg-gray-100 size-6" />
                        <input
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="bg-gray-100 px-4 py-4 rounded-full outline-none flex-1"
                        />
                    </div>
                    {filteredProducts.length > 0 && (
                        <ul className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg w-full z-10">
                            {filteredProducts.map((product, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleProductClick(product)}
                                >
                                    {product}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex flex-col">
                    {linkToNav.map((item, index) => (
                        <div key={index} className="my-2 sm:my-4 text-4xl sm:text-5xl font-medium">
                            <a href={item.href}>{item.label}</a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row items-center gap-6 font-medium text-xl">
                    <h2 className="text-lg">Contact Us</h2>
                    <div className="flex flex-row gap-4 items-center">
                        <a href="mailto:detapowergensetindonesia@gmail.com" >
                            <MdEmail className="size-10 text-primary"/>
                        </a>
                        <a href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai">
                            <RiWhatsappFill className="size-10 text-primary"/>
                        </a>
                    </div>
                </div>
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