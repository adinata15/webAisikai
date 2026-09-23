import { useSearchParams } from "react-router-dom";

import PageShell from "../components/PageShell";
import Breadcrumb from "../components/Breadcrumb";

import PG1 from "../assets/images/photogallery1.jpg";
import PG2 from "../assets/images/photogallery2.jpg";
import PG3 from "../assets/images/photogallery3.jpg";
import PG4 from "../assets/images/photogallery4.jpg";
import PG5 from "../assets/images/photogallery5.jpg";
import PG6 from "../assets/images/photogallery6.jpg";
import PG7 from "../assets/images/photogallery7.jpg";
import PG8 from "../assets/images/photogallery8.webp";
import PG9 from "../assets/images/photogallery9.jpg";
import PG10 from "../assets/images/photogallery10.jpg";
import PG11 from "../assets/images/photogallery11.jpg";
import PG12 from "../assets/images/photogallery12.jpg";

const TABS = [
    {
        id: "company-environment",
        label: "Company Environment",
        images: [
            { src: PG1, alt: "AISIKAI company environment 1" },
            { src: PG2, alt: "AISIKAI company environment 2" },
            { src: PG3, alt: "AISIKAI company environment 3" },
            { src: PG4, alt: "AISIKAI company environment 4" },
            { src: PG5, alt: "AISIKAI company environment 5" },
            { src: PG6, alt: "AISIKAI company environment 6" },
        ],
    },
    {
        id: "global-exhibition",
        label: "Global Exhibition",
        images: [
            { src: PG7, alt: "AISIKAI global exhibition 1" },
            { src: PG8, alt: "AISIKAI global exhibition 2" },
            { src: PG9, alt: "AISIKAI global exhibition 3" },
            { src: PG10, alt: "AISIKAI global exhibition 4" },
            { src: PG11, alt: "AISIKAI global exhibition 5" },
            { src: PG12, alt: "AISIKAI global exhibition 6" },
        ],
    },
];

function moveTabIndex(tabs, currentId, key) {
    const index = tabs.findIndex((tab) => tab.id === currentId);
    if (index < 0) return null;
    if (key === "ArrowRight") return tabs[(index + 1) % tabs.length].id;
    if (key === "ArrowLeft") return tabs[(index - 1 + tabs.length) % tabs.length].id;
    return null;
}

const Gallery = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromUrl = searchParams.get("tab");
    const activeTab = TABS.some((tab) => tab.id === tabFromUrl) ? tabFromUrl : TABS[0].id;
    const current = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

    const selectTab = (tabId) => {
        const next = new URLSearchParams(searchParams);
        if (tabId === TABS[0].id) {
            next.delete("tab");
        } else {
            next.set("tab", tabId);
        }
        setSearchParams(next, { replace: true });
    };

    return (
        <PageShell>
            <Breadcrumb pageName="Gallery" />

            <div className="px-6 flex flex-col py-12 gap-12 xl:gap-24 xl:px-24 3xl:px-60 pb-24 xl:pb-12">
                <div className="container px-4 flex flex-col gap-12 justify-center items-center">
                    <div className="flex justify-center items-center mb-1 w-full xl:w-1/2" role="tablist" aria-label="Gallery categories">
                        <div className="flex w-full gap-4 xl:gap-12">
                            {TABS.map((tab) => {
                                const selected = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        role="tab"
                                        id={`gallery-tab-${tab.id}`}
                                        aria-selected={selected}
                                        aria-controls={`gallery-panel-${tab.id}`}
                                        tabIndex={selected ? 0 : -1}
                                        className={`flex-1 min-h-11 rounded-lg border px-4 py-3 text-lg font-medium ${
                                            selected
                                                ? "border-accent bg-accent text-white"
                                                : "border-link bg-card text-link hover:bg-accent hover:text-white"
                                        }`}
                                        onClick={() => selectTab(tab.id)}
                                        onKeyDown={(event) => {
                                            const nextId = moveTabIndex(TABS, tab.id, event.key);
                                            if (!nextId) return;
                                            event.preventDefault();
                                            selectTab(nextId);
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4">
                        <h2 className="font-bold text-2xl">{current.label}</h2>
                        <div className="section-rule" aria-hidden="true" />
                    </div>

                    <div
                        id={`gallery-panel-${current.id}`}
                        role="tabpanel"
                        aria-labelledby={`gallery-tab-${current.id}`}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                    >
                        {current.images.map((image) => (
                            <div key={image.alt} className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    width={640}
                                    height={288}
                                    loading="lazy"
                                    className="w-full h-72 object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageShell>
    );
};

export default Gallery;
