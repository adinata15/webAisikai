import { useState } from "react";
import { Link } from "react-router-dom";

import { catalog, catalogHref } from "../catalog/catalog.js";

import ImageName1 from "../assets/images/asp.jpg";
import ImageName2 from "../assets/images/skt1.jpg";
import ImageName3 from "../assets/images/skt2.jpg";
import ImageName4 from "../assets/images/askq1.jpg";
import ImageName5 from "../assets/images/mccb1.webp";
import ImageName6 from "../assets/images/mccb2.webp";
import ImageName7 from "../assets/images/mccb3.webp";
import ImageName8 from "../assets/images/mccb4.webp";
import ImageName9 from "../assets/images/ucb1.webp";
import ImageName10 from "../assets/images/ucb2.webp";
import ImageName11 from "../assets/images/ucb3.webp";
import ImageName12 from "../assets/images/ucb4.webp";
import ImageName13 from "../assets/images/mcb1.webp";
import ImageName14 from "../assets/images/mcb2.webp";
import ImageName15 from "../assets/images/mcb3.webp";
import ImageName16 from "../assets/images/mcb4.webp";

const FEATURED_IMAGES = {
    11: ImageName1,
    12: ImageName2,
    13: ImageName3,
    14: ImageName4,
    51: ImageName5,
    52: ImageName6,
    53: ImageName7,
    54: ImageName8,
    41: ImageName9,
    42: ImageName10,
    43: ImageName11,
    44: ImageName12,
    61: ImageName13,
    62: ImageName14,
    63: ImageName15,
    64: ImageName16,
};

const Tabs = () => {
    const featuredTabs = catalog.getFeaturedTabs();
    const [activeSlug, setActiveSlug] = useState(featuredTabs[0]?.slug);
    const activeTab = featuredTabs.find((tab) => tab.slug === activeSlug) ?? featuredTabs[0];

    return (
        <section className="flex flex-col items-center justify-center gap-12 px-6 xl:px-12">
            <div className="flex flex-col xl:flex-row justify-center items-start gap-2" role="tablist">
                {featuredTabs.map((tab) => (
                    <button
                        key={tab.slug}
                        type="button"
                        role="tab"
                        aria-selected={activeSlug === tab.slug}
                        className={`px-6 py-4 text-sm 2xl:text-md font-medium ${activeSlug === tab.slug ? "bg-primary text-white" : "text-slate-900"}`}
                        onClick={() => setActiveSlug(tab.slug)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {activeTab && (
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col xl:flex-row items-start gap-12">
                        {activeTab.products.map((product) => (
                            <div key={product.productId} className="flex flex-col justify-center items-center gap-4">
                                <Link
                                    to={catalogHref({ productId: product.productId })}
                                    className="hover:text-primary cursor-pointer flex flex-col justify-center items-center gap-4"
                                >
                                    <img
                                        src={FEATURED_IMAGES[product.productId]}
                                        alt={product.name}
                                        className="w-1/2 xl:w-[25rem]"
                                    />
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">{product.name}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <Link
                        to={activeTab.href}
                        className="px-6 py-4 text-primary self-center xl:self-end text-md font-medium 3xl:mt-8"
                    >
                        More →
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Tabs;
