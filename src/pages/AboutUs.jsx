import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import PageShell from "../components/PageShell";
import Breadcrumb from "../components/Breadcrumb";
import CarouselControls from "../components/CarouselControls";

import { RiSendPlaneFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi2";
import { RiFirebaseFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";

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
import PG13 from "../assets/images/photogallery13.jpg";
import PG14 from "../assets/images/photogallery14.jpg";
import PG15 from "../assets/images/photogallery15.jpg";
import PG16 from "../assets/images/photogallery16.jpg";

const GALLERY = [
    { src: PG1, alt: "AISIKAI facility photo 1" },
    { src: PG2, alt: "AISIKAI facility photo 2" },
    { src: PG3, alt: "AISIKAI facility photo 3" },
    { src: PG4, alt: "AISIKAI facility photo 4" },
    { src: PG5, alt: "AISIKAI facility photo 5" },
    { src: PG6, alt: "AISIKAI facility photo 6" },
    { src: PG7, alt: "AISIKAI facility photo 7" },
    { src: PG8, alt: "AISIKAI facility photo 8" },
    { src: PG9, alt: "AISIKAI facility photo 9" },
    { src: PG10, alt: "AISIKAI facility photo 10" },
    { src: PG11, alt: "AISIKAI facility photo 11" },
    { src: PG12, alt: "AISIKAI facility photo 12" },
    { src: PG13, alt: "AISIKAI facility photo 13" },
    { src: PG14, alt: "AISIKAI facility photo 14" },
    { src: PG15, alt: "AISIKAI facility photo 15" },
    { src: PG16, alt: "AISIKAI facility photo 16" },
];

const PRINCIPLES = [
    {
        title: "Development Principles",
        Icon: RiSendPlaneFill,
        items: ["Quality", "Service", "Reputation", "Innovation"],
    },
    {
        title: "Enterprise Vision",
        Icon: HiFlag,
        items: ["Make Contributions to Society", "Care About Wellbeing of Employees"],
    },
    {
        title: "Business Philosophy",
        Icon: RiFirebaseFill,
        items: ["Sincerity", "Excellence", "Perfection"],
    },
    {
        title: "Enterprise Spirit",
        Icon: FaLeaf,
        items: ["Aware of Adversity in Prosperity", "Broaden Sources and Reduce Expenditure"],
    },
];

function usePrefersReducedMotion() {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduceMotion(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    return reduceMotion;
}

const AboutUs = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [paused, setPaused] = useState(false);
    const reduceMotion = usePrefersReducedMotion();
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (reduceMotion || paused) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    }, [paused, reduceMotion]);

    const handleKeyDown = (event) => {
        if (reduceMotion) return;
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            swiperRef.current?.slidePrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            swiperRef.current?.slideNext();
        }
    };

    return (
        <PageShell>
            <Breadcrumb pageName="About Us" />

            <div className="flex flex-col py-12 gap-12 xl:gap-24">
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-12 px-6 xl:px-24 3xl:px-60 justify-center items-center xl:items-start">
                    <div className="flex flex-col justify-center items-center xl:items-start gap-4 xl:gap-8">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div className="h-8 border-2 border-primary" aria-hidden="true" />
                            <h2 className="text-2xl xl:text-4xl font-bold">About <span translate="no">AISIKAI</span></h2>
                        </div>
                        <p className="font-medium text-center xl:text-left text-md xl:text-sm leading-normal">
                            <span translate="no">AISIKAI</span>, established in 2007, is dedicated to the high quality research, development, manufacturing, and sales of electrical products. Over the years, the company has proactively expanded its business into four major market segments:
                            New Energy, Power Quality, Industrial Control, and Power Distribution.
                            With exceptional R&D strength, AISIKAI has earned recognition as a high-tech company, a company specializing in new technology, and a software company. The company holds certifications such as ISO9001, ISO14001, ISO45001, and consistently maintains a 3A grade credit enterprise.
                            <br /><br />
                            Since its establishment, AISIKAI has consistently prioritized product quality. Guided by independent research and development, the company continually introduces innovations, securing numerous invention patents, utility model patents, and design patents. All product software is 100% copyright protected. By working closely with renowned universities and employing a high-calibre research team, AISIKAI is continuously improving its R&D and innovation capabilities.
                            <br /><br />
                            Quality control is built into every stage of production at AISIKAI. The company has advanced R&D laboratories, product performance testing centers, storage workshops, precision machining workshops, assembly workshops, and complete set workshops. Each product undergoes thorough data calibration and functional testing after assembly to ensure it meets high standards before proceeding to the next production stage. Products are certified by China CCC, EU CE, international IEC, and recognized by Germany&apos;s TUV Rhineland certification agency and SGS to meet industry standards in various countries and regions. AISIKAI&apos;s high quality products, manufactured under strict production processes, quickly reach over 80 countries and regions and enjoy wide popularity.
                            With its professional research and development strength and outstanding quality, AISIKAI sets an industry model and constantly provides reliable solutions for customers.
                            AISIKAI, a brand trusted by users around the world.
                        </p>
                    </div>

                    <div
                        className="relative w-full xl:w-1/2 2xl:w-1/2"
                        onKeyDown={handleKeyDown}
                        onFocusCapture={() => {
                            swiperRef.current?.autoplay?.stop();
                        }}
                        onBlurCapture={(event) => {
                            if (
                                !event.currentTarget.contains(event.relatedTarget)
                                && !paused
                                && !reduceMotion
                            ) {
                                swiperRef.current?.autoplay?.start();
                            }
                        }}
                    >
                        {reduceMotion ? (
                            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
                                <img
                                    src={GALLERY[0].src}
                                    alt={GALLERY[0].alt}
                                    width={800}
                                    height={520}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="carousel-frame relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        thumbs={{
                                            swiper: thumbsSwiper && !thumbsSwiper.destroyed
                                                ? thumbsSwiper
                                                : null,
                                        }}
                                        spaceBetween={0}
                                        loop
                                        autoplay={{
                                            delay: 10000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                        modules={[Autoplay, Thumbs]}
                                        className="h-full w-full"
                                        aria-label="Company photo gallery"
                                    >
                                        {GALLERY.map((image) => (
                                            <SwiperSlide key={image.alt} className="h-full">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={800}
                                                    height={520}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className="absolute bottom-3 right-3 z-10">
                                        <CarouselControls
                                            slideCount={GALLERY.length}
                                            activeIndex={0}
                                            paused={paused}
                                            showDots={false}
                                            onPrev={() => swiperRef.current?.slidePrev()}
                                            onNext={() => swiperRef.current?.slideNext()}
                                            onGoTo={(index) => swiperRef.current?.slideToLoop(index)}
                                            onTogglePause={() => setPaused((value) => !value)}
                                        />
                                    </div>
                                </div>

                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={8}
                                    slidesPerView={5}
                                    freeMode
                                    watchSlidesProgress
                                    modules={[FreeMode, Thumbs]}
                                    className="carousel-thumbs mt-4"
                                    aria-label="Gallery thumbnails"
                                >
                                    {GALLERY.map((image) => (
                                        <SwiperSlide key={`thumb-${image.alt}`}>
                                            <img
                                                src={image.src}
                                                alt=""
                                                width={120}
                                                height={80}
                                                loading="lazy"
                                                className="aspect-[4/3] w-full rounded-sm object-cover"
                                                aria-hidden="true"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row gap-16 3xl:gap-24 px-6 xl:px-24">
                    {PRINCIPLES.map(({ title, Icon, items }) => (
                        <div key={title} className="flex flex-col justify-center items-center gap-4">
                            <div className="flex justify-center items-center bg-gradient-to-br from-[#4990D0] to-primary size-16 rounded-full" aria-hidden="true">
                                <Icon className="text-white size-8" />
                            </div>
                            <h3 className="font-bold text-xl xl:text-2xl text-center">{title}</h3>
                            <ul className="list-disc text-xl gap-2">
                                {items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="w-full border-y border-border bg-card px-8 xl:px-24 3xl:px-60 py-8 sm:py-16 flex flex-col xl:flex-row justify-between items-center gap-8">
                    <h2 className="text-foreground font-bold text-2xl xl:text-3xl">Get in Touch With Us</h2>
                    <Link to="/contact-us" className="btn-primary">
                        Contact AISIKAI
                    </Link>
                </div>
            </div>
        </PageShell>
    );
};

export default AboutUs;
