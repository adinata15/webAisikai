import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { catalog, catalogHref } from "../catalog/catalog.js";

import ATS from "../assets/images/ats2.webp";
import ITS from "../assets/images/iac1.webp";
import HVVCB from "../assets/images/hvvcb1.webp";
import UACB from "../assets/images/ucb1.webp";
import MCCB from "../assets/images/mccb1.webp";
import MCB from "../assets/images/mcb1.webp";
import LIS from "../assets/images/lis1.webp";
import OAUP from "../assets/images/oaup1.webp";
import SPD from "../assets/images/spd1.webp";
import IPM from "../assets/images/ipm1.webp";
import BC from "../assets/images/bc1.webp";

const NAV_IMAGES = {
    "automatic-transfer-switch": ATS,
    "intelligent-ats-controller": ITS,
    "high-voltage-vacuum-circuit-breaker": HVVCB,
    "universal-circuit-breaker": UACB,
    "molded-case-circuit-breaker": MCCB,
    "miniature-circuit-breaker": MCB,
    "load-isolation-switch": LIS,
    "overvoltage-and-undervoltage-protector": OAUP,
    "surge-protective-device": SPD,
    "intelligent-power-meter": IPM,
    "battery-charger": BC,
};

const ABOUT_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Certificate", href: "/certificate" },
    { label: "Photo Gallery", href: "/photo-gallery" },
];

const DROPDOWN = {
    Products: "products",
    "About Us": "about",
};

const Nav = ({ linkToNav }) => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(null);
    const navCategories = catalog.getCategories();

    const openDropdown = (label) => {
        const menu = DROPDOWN[label];
        if (menu) setOpenMenu(menu);
    };

    const closeDropdown = (label) => {
        if (DROPDOWN[label]) setOpenMenu(null);
    };

    return (
        <section className="flex flex-col xl:flex-row relative">
            {linkToNav.map((item) => (
                <div
                    key={item.href}
                    className="my-6 xl:font-medium"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={() => closeDropdown(item.label)}
                    onFocus={() => openDropdown(item.label)}
                >
                    <Link
                        to={item.href}
                        className={`mx-4 2xl:mx-6 text-md 2xl:text-lg font-normal hover:text-primary ${location.pathname === item.href ? "text-primary" : ""}`}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}

            {openMenu === "products" && (
                <div
                    className="absolute top-14 bg-white border border-gray-300 shadow-lg z-10 justify-center items-center"
                    onMouseEnter={() => setOpenMenu("products")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="p-8 flex flex-col gap-8 justify-start items-center self-center">
                        <div className="grid grid-cols-5 gap-2">
                            {navCategories.map((category) => (
                                <Link
                                    key={category.slug}
                                    to={catalogHref({ categorySlug: category.slug })}
                                    className="flex flex-col justify-center items-center w-44 hover:text-primary"
                                    onClick={() => setOpenMenu(null)}
                                >
                                    <img
                                        src={NAV_IMAGES[category.slug]}
                                        alt={category.name}
                                        className="w-22"
                                    />
                                    <h3 className="text-center font-normal text-sm">{category.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {openMenu === "about" && (
                <div
                    className="absolute top-14 ml-12 bg-white border border-gray-300 shadow-lg z-10 justify-center items-center"
                    onMouseEnter={() => setOpenMenu("about")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="flex flex-row justify-between items-center gap-8 py-6 px-24 w-full">
                        {ABOUT_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="hover:text-primary text-center font-normal text-sm"
                                onClick={() => setOpenMenu(null)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Nav;
