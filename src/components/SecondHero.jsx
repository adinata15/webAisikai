import { useNavigate } from "react-router";

import SecondHeroImage from "../assets/images/secondheroimage.webp";

const SecondHero = () => {

    const navigate = useNavigate();

    return (
        <section className="bg-blue-500 w-full px-6 py-12">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-start items-center gap-6">
                    <h2 className="font-bold text-2xl text-white">QUALITY, SERVICE, REPUTATION, INNOVATION</h2>
                    <p className="font-reguler text-sm text-white">We’re always eager for making progress to offer reliable 
                        products and impeccable services. With your support and trust, we will work towards a brighter future.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button><a href="" className="text-white border-2 rounded-full px-8 py-2">Product</a></button>
                    <button><a href="" className="text-blue-500 bg-white rounded-full px-8 py-2">Contact</a></button>
                </div>
                <div>
                    <img src={SecondHeroImage} alt="secondhero-image" />
                </div>
            </div>
            
        </section>
    )
}

export default SecondHero;