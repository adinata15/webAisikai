import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CarouselControls from "./CarouselControls";
import Banner1 from "../assets/images/hero-image1.jpg";
import Banner2 from "../assets/images/hero-image2.jpg";

const SLIDES = [
    { src: Banner1, alt: "AISIKAI electrical products banner" },
    { src: Banner2, alt: "AISIKAI manufacturing and product showcase" },
];

const PROOF = ["ISO 9001", "CCC", "CE", "SGS"];

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

const Hero = () => {
    const swiperRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const reduceMotion = usePrefersReducedMotion();

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
        <section
            className="relative"
            aria-label="Featured banners"
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
            <div className="carousel-frame relative aspect-[16/9] overflow-hidden lg:aspect-[21/8]">
                {reduceMotion ? (
                    <img
                        src={SLIDES[0].src}
                        alt={SLIDES[0].alt}
                        width={1920}
                        height={720}
                        className="h-full w-full object-cover"
                        fetchPriority="high"
                    />
                ) : (
                    <>
                        <Swiper
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Autoplay]}
                            className="h-full w-full"
                        >
                            {SLIDES.map((slide, index) => (
                                <SwiperSlide key={slide.alt} className="h-full">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={1920}
                                        height={720}
                                        className="h-full w-full object-cover"
                                        fetchPriority={index === 0 ? "high" : undefined}
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute bottom-4 right-4 z-20 lg:bottom-8 lg:right-8">
                            <CarouselControls
                                slideCount={SLIDES.length}
                                activeIndex={activeIndex}
                                paused={paused}
                                onPrev={() => swiperRef.current?.slidePrev()}
                                onNext={() => swiperRef.current?.slideNext()}
                                onGoTo={(index) => swiperRef.current?.slideToLoop(index)}
                                onTogglePause={() => setPaused((value) => !value)}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="px-4 py-4 lg:absolute lg:bottom-8 lg:left-8 lg:z-10 lg:max-w-xl lg:p-0">
                <div className="rounded-lg border border-border bg-card p-4 text-foreground sm:p-6">
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                        High-quality electrical switches since 2007.
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Link to="/products" className="btn-primary">View products</Link>
                        <Link to="/contact-us" className="btn-secondary">Contact</Link>
                    </div>
                    <p className="mt-4 text-sm font-medium text-muted">
                        {PROOF.join(" · ")}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
