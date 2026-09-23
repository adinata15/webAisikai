import { Link } from "react-router-dom";

import logoAisikai from "../assets/images/logo-aisikai.jpg";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaFacebookF } from "react-icons/fa";

const FOOTER_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us", nowrap: true },
    { label: "Downloads", href: "/download" },
    { label: "Contact Us", href: "/contact-us", nowrap: true },
];

const Footer = () => {
    return (
        <section className="bg-slate-900 w-full px-6 sm:px-12 xl:px-24 3xl:px-60 py-12">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8 w-full">
                    <div>
                        <img src={logoAisikai} alt="logo-aisikai" className="w-1/2 xl:w-[12rem]" />
                    </div>
                    <div className="flex flex-col xl:flex-row gap-8 items-start">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-gray-500 font-medium text-md hover:text-white ${link.nowrap ? "whitespace-nowrap" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="w-full border-[0.1rem] border-gray-500"></div>

                <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-4">
                    <p className="font-regular text-gray-500 text-sm leading-normal">
                        All rights reserved &copy; JIANGSU AISIKAI ELECTRIC CO.,LTD. Support By Leadong
                    </p>
                    <div className="flex flex-row gap-4">
                        <FaLinkedinIn className="text-gray-500 size-4" />
                        <FaYoutube className="text-gray-500 size-4" />
                        <FaXTwitter className="text-gray-500 size-4" />
                        <FaFacebookF className="text-gray-500 size-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
