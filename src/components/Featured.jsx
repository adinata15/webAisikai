import { IoStarSharp } from "react-icons/io5";

import Tabs from "./Tabs";

import Image1 from "../assets/images/skt1.jpg";
import Image2 from "../assets/images/skt2.jpg";
import Image3 from "../assets/images/asp.jpg";
import Image4 from "../assets/images/askq1.jpg";

const Featured = () => {
    return(
        <section className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-2xl">Featured Products</h2>
            <div className="flex flex-row gap-2 text-blue-500">
                <IoStarSharp className="size-8" />
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
                <IoStarSharp className="size-8"/>
            </div>
            <div className="mt-8">
                <Tabs />
            </div>
            <button className="mt-8 px-12 py-4 bg-blue-500 text-white font-bold text-xl">
                <a href="">More Product</a>
            </button>
        </section>
    )
}

export default Featured;