import { Link } from "react-router-dom";

import SecondHeroImage from "../assets/images/secondheroimage.webp";

const SecondHero = () => {
    return (
        <section className="w-full border-y border-border bg-card px-6 py-12 xl:px-24">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 xl:grid-cols-2">
                <div className="flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
                    <h2 className="text-2xl font-bold leading-normal xl:text-3xl">
                        Quality, Service, Reputation, Innovation
                    </h2>
                    <p className="text-sm text-muted sm:text-base">
                        We’re always eager for making progress to offer reliable
                        products and impeccable services. With your support and trust, we will work towards a brighter future.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Link to="/products" className="btn-secondary">
                            View products
                        </Link>
                        <Link to="/contact-us" className="btn-primary">
                            Contact AISIKAI
                        </Link>
                    </div>
                </div>

                <img
                    src={SecondHeroImage}
                    alt="AISIKAI electrical equipment"
                    width={512}
                    height={512}
                    loading="lazy"
                    className="mx-auto h-auto w-full max-w-lg"
                />
            </div>
        </section>
    );
};

export default SecondHero;
