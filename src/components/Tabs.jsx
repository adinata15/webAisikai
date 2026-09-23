import { Link, useSearchParams } from "react-router-dom";

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

function moveTabIndex(tabs, currentSlug, key) {
    const index = tabs.findIndex((tab) => tab.slug === currentSlug);
    if (index < 0) return null;
    if (key === "ArrowRight") return tabs[(index + 1) % tabs.length].slug;
    if (key === "ArrowLeft") return tabs[(index - 1 + tabs.length) % tabs.length].slug;
    return null;
}

const Tabs = () => {
    const featuredTabs = catalog.getFeaturedTabs();
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromUrl = searchParams.get("featured");
    const activeSlug = featuredTabs.some((tab) => tab.slug === tabFromUrl)
        ? tabFromUrl
        : featuredTabs[0]?.slug;
    const activeTab = featuredTabs.find((tab) => tab.slug === activeSlug) ?? featuredTabs[0];

    const selectTab = (slug) => {
        const next = new URLSearchParams(searchParams);
        if (slug === featuredTabs[0]?.slug) {
            next.delete("featured");
        } else {
            next.set("featured", slug);
        }
        setSearchParams(next, { replace: true });
    };

    return (
        <section className="flex flex-col items-center justify-center gap-12 px-6 xl:px-12">
            <div className="flex flex-wrap justify-center items-start gap-2" role="tablist" aria-label="Featured product categories">
                {featuredTabs.map((tab) => {
                    const selected = activeSlug === tab.slug;
                    return (
                        <button
                            key={tab.slug}
                            type="button"
                            role="tab"
                            id={`featured-tab-${tab.slug}`}
                            aria-selected={selected}
                            aria-controls={`featured-panel-${tab.slug}`}
                            tabIndex={selected ? 0 : -1}
                            className={`min-h-11 rounded-lg border px-4 py-3 text-sm font-medium ${selected ? "border-accent bg-accent text-white" : "border-border bg-card text-foreground hover:bg-background"}`}
                            onClick={() => selectTab(tab.slug)}
                            onKeyDown={(event) => {
                                const nextSlug = moveTabIndex(featuredTabs, tab.slug, event.key);
                                if (!nextSlug) return;
                                event.preventDefault();
                                selectTab(nextSlug);
                            }}
                        >
                            {tab.name}
                        </button>
                    );
                })}
            </div>

            {activeTab && (
                <div
                    id={`featured-panel-${activeTab.slug}`}
                    role="tabpanel"
                    aria-labelledby={`featured-tab-${activeTab.slug}`}
                    className="flex flex-col gap-4 w-full"
                >
                    <div className="grid w-full grid-cols-2 gap-2 xl:grid-cols-4">
                        {activeTab.products.map((product) => (
                            <div key={product.productId} className="min-w-0">
                                <Link
                                    to={catalogHref({ productId: product.productId })}
                                    className="flex h-full flex-col items-center gap-2 rounded-lg border border-border bg-card p-2 text-foreground hover:bg-background"
                                >
                                    <div className="aspect-square w-full">
                                        <img
                                            src={FEATURED_IMAGES[product.productId]}
                                            alt={product.name}
                                            width={400}
                                            height={400}
                                            loading="lazy"
                                            className="h-full w-full object-contain"
                                            translate="no"
                                        />
                                    </div>
                                    <h3 className="line-clamp-2 text-center text-sm font-medium" translate="no">{product.name}</h3>
                                    {product.categoryName && (
                                        <p className="text-center text-sm text-muted" translate="no">{product.categoryName}</p>
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <Link
                        to={activeTab.href}
                        className="self-center rounded-sm px-2 py-2 text-sm font-medium text-link hover:underline xl:self-end"
                    >
                        See {activeTab.name}
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Tabs;
