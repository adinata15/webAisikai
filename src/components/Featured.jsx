import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

import Tabs from "./Tabs";

const Featured = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 py-12 xl:px-24 3xl:px-60">
            <h2 className="font-bold text-2xl 3xl:text-4xl">Featured Products</h2>
            <div className="flex flex-row gap-2 text-primary">
                <IoStarSharp className="size-4" />
                <IoStarSharp className="size-4"/>
                <IoStarSharp className="size-4"/>
                <IoStarSharp className="size-4"/>
                <IoStarSharp className="size-4"/>
            </div>
            <div className="mt-8">
                <Tabs />
            </div>
            <Link to="/products" className="mt-8 3xl px-22 py-2 2xl:py-[0.8rem] bg-primary text-white font-bold text-sm rounded-sm">
                More Products
            </Link>
        </section>
    )
}

export default Featured;