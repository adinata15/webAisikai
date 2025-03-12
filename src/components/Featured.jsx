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
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
            </div>
            <div>
                <Tabs imageName1={Image3} imageAlt1="asp-image" imageName2={Image1} imageAlt2="skt1-image" imageName3={Image2} imageAlt3="skt2-image" imageName4={Image4} imageAlt4="askq1-image"/>
            </div>
        </section>
    )
}

export default Featured;