import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiAward, FiFlag, FiPlay, FiSend, FiZap } from "react-icons/fi";

import ImageES from "../assets/images/enterprise-spirit.webp";
import ImageEV from "../assets/images/enterprise-vision.webp";
import ImageBP from "../assets/images/business-philosophy.webp";
import ImageDT from "../assets/images/development-tenet.webp";

const VIDEO_ID = "F4qOO5minVU";
const YOUTUBE_POSTER = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`;

const VALUE_CARDS = [
    {
        title: "Enterprise Spirit",
        caption: "Aware of Adversity in Prosperity, Broaden Sources and Reduce Expenditure",
        image: ImageES,
        Icon: FiSend,
    },
    {
        title: "Enterprise Vision",
        caption: "Make Contributions to Society, Care About Wellbeing of Employees",
        image: ImageEV,
        Icon: FiFlag,
    },
    {
        title: "Business Philosophy",
        caption: "Sincerity, Excellence, Perfection",
        image: ImageBP,
        Icon: FiAward,
    },
    {
        title: "Development Tenet",
        caption: "Quality, Service, Reputation, Innovation",
        image: ImageDT,
        Icon: FiZap,
    },
];

const AboutUs = () => {
    const [playing, setPlaying] = useState(false);
    const [posterSrc, setPosterSrc] = useState(YOUTUBE_POSTER);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playing || !playerRef.current) return;
        playerRef.current.focus();
    }, [playing]);

    return (
        <section className="bg-background px-6 py-12 xl:px-24 3xl:px-60">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-2xl font-bold">About Us</h2>
                <div className="section-rule" aria-hidden="true" />
                <div className="flex w-full flex-col items-center justify-center gap-12">
                    <div className="grid w-full grid-cols-1 items-start gap-6 xl:grid-cols-5">
                        <div className="w-full xl:col-span-3">
                            <div
                                ref={playerRef}
                                tabIndex={playing ? -1 : undefined}
                                className="aspect-video w-full overflow-hidden rounded-lg border border-border outline-none focus-visible:ring-2 focus-visible:ring-link"
                                aria-label={playing ? "AISIKAI Electric introduction" : undefined}
                            >
                                {playing ? (
                                    <iframe
                                        className="h-full w-full"
                                        src={YOUTUBE_EMBED}
                                        title="AISIKAI Electric introduction"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        className="group relative h-full w-full cursor-pointer bg-slate-950 text-left"
                                        onClick={() => setPlaying(true)}
                                        aria-label="Play AISIKAI Electric introduction"
                                    >
                                        <img
                                            src={posterSrc}
                                            alt=""
                                            width={1280}
                                            height={720}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                            aria-hidden="true"
                                            onError={() => setPosterSrc(ImageES)}
                                        />
                                        <span className="absolute inset-0 bg-slate-950/45 transition-colors group-hover:bg-slate-950/35" aria-hidden="true" />
                                        <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center text-white">
                                            <span className="flex size-14 items-center justify-center rounded-full border border-white/40 bg-slate-950/70 text-white shadow-lg transition-transform group-hover:scale-105">
                                                <FiPlay className="size-7 translate-x-0.5" aria-hidden="true" />
                                            </span>
                                            <span className="max-w-sm text-sm font-medium tracking-wide sm:text-base" translate="no">
                                                AISIKAI Electric introduction
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-6 px-2 text-center xl:col-span-2 xl:items-start xl:text-left">
                            <p>
                                <span translate="no">AISIKAI</span> is located in Yangzhou, a livable and tourist city famous for her beautiful natural scenery and rich cultural heritage.
                                Since established in 2007, AISIKAI has been committed to the manufacture, research, development and marketing of the high-quality electric switch.
                            </p>
                            <Link to="/about-us" className="btn-primary self-center xl:self-start">
                                Read More
                            </Link>
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
                        {VALUE_CARDS.map(({ title, caption, image, Icon }) => (
                            <article key={title} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
                                <div className="flex flex-row items-center justify-center gap-2 border-b border-border px-2 py-2 text-link">
                                    <Icon aria-hidden="true" />
                                    <h3 className="font-medium">{title}</h3>
                                </div>
                                <div className="relative aspect-[3/4] w-full">
                                    <img
                                        src={image}
                                        alt=""
                                        width={320}
                                        height={420}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                        aria-hidden="true"
                                    />
                                    <p className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-4 text-sm font-medium text-white">
                                        {caption}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
