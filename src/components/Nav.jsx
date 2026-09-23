import { useEffect, useRef, useState } from "react";
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

const DROPDOWN = {
    Products: "products",
};

const Nav = ({ linkToNav }) => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(null);
    const closeTimer = useRef(null);
    const navCategories = catalog.getCategories();

    const openMenuNow = (menu) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenMenu(menu);
    };

    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
    };

    useEffect(() => () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    }, []);

    useEffect(() => {
        if (!openMenu) return undefined;

        const onKeyDown = (event) => {
            if (event.key === "Escape") setOpenMenu(null);
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [openMenu]);

    return (
        <nav className="flex flex-col xl:flex-row relative" aria-label="Primary">
            {linkToNav.map((item) => {
                const menuId = DROPDOWN[item.label];
                const isOpen = openMenu === menuId;

                return (
                    <div
                        key={item.href}
                        className="my-6 xl:font-medium shrink-0"
                        onMouseEnter={() => menuId && openMenuNow(menuId)}
                        onMouseLeave={() => menuId && scheduleClose()}
                        onFocus={() => menuId && openMenuNow(menuId)}
                        onBlur={(event) => {
                            if (!event.currentTarget.contains(event.relatedTarget)) {
                                setOpenMenu(null);
                            }
                        }}
                    >
                        <Link
                            to={item.href}
                            className={`mx-2 2xl:mx-4 whitespace-nowrap text-sm 2xl:text-base font-normal rounded-sm text-foreground hover:text-link ${location.pathname === item.href ? "text-link" : ""}`}
                            aria-expanded={menuId ? isOpen : undefined}
                            aria-haspopup={menuId ? "true" : undefined}
                            onKeyDown={(event) => {
                                if (!menuId) return;
                                if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    openMenuNow(menuId);
                                }
                            }}
                        >
                            {item.label}
                        </Link>

                    </div>
                );
            })}

            {openMenu === "products" && (
                <div
                    className="fixed inset-x-4 top-[5.5rem] z-40 xl:right-20"
                    onMouseEnter={() => openMenuNow("products")}
                    onMouseLeave={scheduleClose}
                >
                    <div
                        className="mx-auto max-h-[calc(100vh-7rem)] w-full max-w-6xl overflow-y-auto rounded-lg border border-border bg-card p-4 shadow-lg"
                        role="menu"
                        aria-label="Product categories"
                    >
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
                            {navCategories.map((category) => (
                                <Link
                                    key={category.slug}
                                    to={catalogHref({ categorySlug: category.slug })}
                                    className="flex flex-col items-center gap-2 rounded-lg p-2 text-foreground hover:bg-background hover:text-link"
                                    onClick={() => setOpenMenu(null)}
                                    role="menuitem"
                                >
                                    <img
                                        src={NAV_IMAGES[category.slug]}
                                        alt=""
                                        width={88}
                                        height={88}
                                        className="h-16 w-auto object-contain"
                                        aria-hidden="true"
                                    />
                                    <span className="text-center text-sm font-normal" translate="no">{category.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
