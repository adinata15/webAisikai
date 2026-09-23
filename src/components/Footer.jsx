import { Link } from "react-router-dom";

import logoAisikai from "../assets/images/logo-aisikai.jpg";

const FOOTER_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us", nowrap: true },
    { label: "Certificates", href: "/certificate" },
    { label: "Gallery", href: "/gallery", nowrap: true },
    { label: "Catalogue", href: "/catalogue" },
    { label: "Contact Us", href: "/contact-us", nowrap: true },
];

const Footer = () => {
    return (
        <footer className="bg-footer w-full px-6 sm:px-12 xl:px-24 3xl:px-60 pt-12 pb-24 xl:pb-12">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8 w-full">
                    <div>
                        <img
                            src={logoAisikai}
                            alt="AISIKAI"
                            width={192}
                            height={64}
                            translate="no"
                            className="w-1/2 xl:w-[12rem] h-auto"
                        />
                    </div>
                    <nav className="flex flex-col xl:flex-row gap-8 items-start" aria-label="Footer">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-footer-muted font-medium text-md hover:text-white rounded-sm ${link.nowrap ? "whitespace-nowrap" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="w-full border-t border-footer-line" aria-hidden="true" />

                <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-4">
                    <p className="font-normal text-footer-muted text-sm leading-normal">
                        All rights reserved &copy; <span translate="no">JIANGSU AISIKAI ELECTRIC CO.,LTD.</span> Support By Leadong
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
