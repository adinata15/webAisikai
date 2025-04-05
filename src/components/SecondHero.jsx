import { useNavigate } from "react-router";

import SecondHeroImage from "../assets/images/secondheroimage.webp";

const SecondHero = () => {

    const navigate = useNavigate();

    return (
        <section className="xl:mt-26 relative bg-gradient-to-r from-[#4A8CD1] to bg-primary w-full px-6 xl:px-18 py-12 xl:py-20 flex items-center justify-center">    
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8 xl:max-w-3xl">
                <div className="flex flex-col justify-center items-center xl:items-start gap-6 xl:gap-12 xl:max-w-lg xl:-ml-[24rem]">
                    <div className="flex flex-col justify-start items-center xl:items-start gap-6">
                        <h2 className="font-bold text-3xl leading-normal  text-white text-center xl:text-left">QUALITY, SERVICE, REPUTATION, INNOVATION</h2>
                        <p className="font-reguler text-sm sm:text-md text-white text-center xl:text-left xl:max-w-md">We’re always eager for making progress to offer reliable 
                            products and impeccable services. With your support and trust, we will work towards a brighter future.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button><a href="/products" className="text-white border-2 rounded-full px-8 py-2">Product</a></button>
                        <button><a href="/contact-us" className="text-primary bg-white rounded-full px-8 py-2">Contact</a></button>
                    </div>
                </div>
                
                <div className="xl:absolute xl:mb-26 xl:ml-[34rem]">
                    <img src={SecondHeroImage} alt="secondhero-image" className="xl:w-[32rem]"/>
                </div>
            </div>
            
        </section>
    )
}

export default SecondHero;