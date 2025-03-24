import { IoStarSharp } from "react-icons/io5";

import Tabs from "./Tabs";

import Image1 from "../assets/images/skt1.jpg";
import Image2 from "../assets/images/skt2.jpg";
import Image3 from "../assets/images/asp.jpg";
import Image4 from "../assets/images/askq1.jpg";

const Featured = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4 py-12 xl:px-24">
            <h2 className="font-bold text-2xl 3xl:text-4xl">Featured Products</h2>
            <div className="flex flex-row gap-2 text-primary">
                <IoStarSharp className="size-8" />
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
            </div>
            <div className="mt-8">
                <Tabs />
            </div>
            <button className="mt-8 px-16 py-2 bg-primary text-white font-bold text-xl">
                <a href="">More Product</a>
            </button>
        </section>
    )
}

export default Featured;