import { Link } from "react-router-dom";

import Tabs from "./Tabs";

const Featured = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-4 py-12 xl:px-24 3xl:px-60">
            <h2 className="font-bold text-2xl">Featured Products</h2>
            <div className="section-rule" aria-hidden="true" />
            <div className="mt-8 w-full">
                <Tabs />
            </div>
            <Link to="/products" className="mt-8 btn-primary text-sm">
                See All Products
            </Link>
        </section>
    );
};

export default Featured;
