import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";

/**
 * Shared prev / dots / next / pause cluster for banner and gallery carousels.
 */
const CarouselControls = ({
    slideCount,
    activeIndex,
    paused,
    onPrev,
    onNext,
    onGoTo,
    onTogglePause,
    showDots = true,
}) => (
    <div className="carousel-controls" role="group" aria-label="Slideshow controls">
        <button
            type="button"
            className="carousel-control"
            aria-label="Previous slide"
            onClick={onPrev}
        >
            <FiChevronLeft className="size-5" aria-hidden="true" />
        </button>

        {showDots && (
            <div className="carousel-dots" role="tablist" aria-label="Slides">
                {Array.from({ length: slideCount }, (_, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={index}
                            type="button"
                            role="tab"
                            className="carousel-dot"
                            aria-label={`Show slide ${index + 1}`}
                            aria-current={isActive ? "true" : undefined}
                            aria-selected={isActive}
                            onClick={() => onGoTo(index)}
                        >
                            <span className="carousel-dot-mark" aria-hidden="true" />
                        </button>
                    );
                })}
            </div>
        )}

        <button
            type="button"
            className="carousel-control"
            aria-label="Next slide"
            onClick={onNext}
        >
            <FiChevronRight className="size-5" aria-hidden="true" />
        </button>

        <button
            type="button"
            className="carousel-control"
            aria-pressed={paused}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            onClick={onTogglePause}
        >
            {paused
                ? <FiPlay className="size-5" aria-hidden="true" />
                : <FiPause className="size-5" aria-hidden="true" />}
        </button>
    </div>
);

export default CarouselControls;
