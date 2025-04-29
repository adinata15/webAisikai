import { useState } from "react";
import { useNavigate } from "react-router"; 

import ATS from "../assets/images/ats2.webp"
import ITS from "../assets/images/iac1.webp"
import HVVCB from "../assets/images/hvvcb1.webp"
import UACB from "../assets/images/ucb1.webp"
import MCCB from "../assets/images/mccb1.webp"
import MCB from "../assets/images/mcb1.webp"
import LIS from "../assets/images/lis1.webp"
import OAUP from "../assets/images/oaup1.webp"
import SPD from "../assets/images/spd1.webp"
import IPM from "../assets/images/ipm1.webp"
import BC from "../assets/images/bc1.webp"


const Nav = ({linkToNav}) => {

    const [showproducts, setShowProducts] = useState(false);
    const [showaboutus, setShowaboutus] = useState(false);
    const navigate = useNavigate();

    // const categories = [
    //     { id: 1, name: "Intelligent ATS Controller" },
    // ];

    const toATS = () => {navigate("/products");}
    const toAboutUs = () => {navigate("/about-us");}
    const toCertificated = () => {navigate("/certificate");}
    const toPhotoGallery = () => {navigate("/photo-gallery");}
    // const toITS = () => {navigate("products/2");}
    // const toHVVCB = () => {navigate("products/3");}
    // const toUACB = () => {navigate("products/4");}
    // const toMCCB = () => {navigate("products/5");}
    // const toMCB = () => {navigate("products/6");}
    // const toLIS = () => {navigate("products/7");}
    // const toOAUP = () => {navigate("products/8");}
    // const toSPD = () => {navigate("products/9");}
    // const toIPM = () => {navigate("products/10");}
    // const toBC = () => {navigate("products/11");}

    // const toITS = () => {navigate("products", { state: {category: "Intelligent ATS Controller"}});}

    // const handleCategoryClick = (categoryName) => {
    //     const encodedCategory = encodeURIComponent(categoryName);
    //     navigate(`/products/${encodedCategory}`)
    // }

    return(
        <section className="flex flex-col xl:flex-row relative">
            {linkToNav.map((item, index) => (
                <div 
                    key={index} 
                    className="my-6 xl:font-medium"
                    onMouseEnter={() => {
                        if (item.label === "Products") setShowProducts(true);
                        if (item.label === "About Us") setShowaboutus(true);
                    }}
                    onMouseLeave={() => {
                        if (item.label === "Products") setShowProducts(false);
                        if (item.label === "About Us") setShowaboutus(false);
                    }}>
                        <a href={item.href} className={`mx-4 2xl:mx-6 text-md 2xl:text-lg font-normal hover:text-primary ${location.pathname === item.href ? "text-primary" : ""}`}
                        >{item.label}</a>
                </div>
            ))}

            {/* <ul>
                {categories.map((cat) => (
                    <li key={cat.id} onClick={() => handleCategoryClick(cat.name)}>
                        {cat.name}
                    </li>
                ))}
            </ul> */}

            {showproducts && (
                <div className="absolute top-14 bg-white border border-gray-300 shadow-lg z-10 justify-center items-center"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}>

                    <div className="p-8 flex flex-col gap-8 justify-start items-center self-center">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <div className="flex flex-col justify-center items-center w-44">
                                <button className="cursor-pointer" onClick={toATS} >
                                    <img src={ATS} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Automatic Transfer Switch</h3>
                                </button>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={ITS} alt="image-intelligentatscontroller" className="w-22"/>
                                </button>
                                <button className="w-full hover:text-primary cursor-pointer" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Intelligent ATS Controller</h3>
                                </button>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={HVVCB} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">High Voltage Vacuum Circuit Breaker</h3>
                                </button>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={UACB} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Universal Air Circuit Breaker</h3>
                                </button>                             
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={MCCB} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Molded Case Circuit Breaker</h3>
                                </button>                              
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-2">
                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={MCB} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Miniature Circuit Breaker</h3>
                                </button>           
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={LIS} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Load Isolation Switch</h3>
                                </button>                               
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={OAUP} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Overvoltage And Undervoltage Protector</h3>
                                </button>                                
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={SPD} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Surge Protective Device</h3>
                                </button>                                
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toATS} className="cursor-pointer">
                                    <img src={IPM} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                    <h3 className="text-center font-normal text-sm">Intelligent Power Meter</h3>
                                </button>                               
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center self-start w-44 hover:text-primary">
                            <button onClick={toATS} className="cursor-pointer">
                                <img src={BC} alt="image-automatictransferswitch" className="w-22"/>
                            </button>
                            <button className="cursor-pointer w-full hover:text-primary" onClick={toATS}>
                                <h3 className="text-center font-normal text-sm">Battery Charge</h3>
                            </button>                           
                        </div>
                        
                    </div>
                </div>
            )}

            {showaboutus && (
                <div className="absolute top-14 ml-12 bg-white border border-gray-300 shadow-lg z-10 justify-center items-center"
                     onMouseEnter={() => setShowaboutus(true)}
                     onMouseLeave={() => setShowaboutus(false)}>

                    <div className="flex flex-row justify-between items-center gap-8 py-6 px-24 w-full">
                        <button className="cursor-pointer hover:text-primary text-center font-normal text-sm" onClick={toAboutUs}>About Us</button>
                        <button className="cursor-pointer hover:text-primary text-center font-normal text-sm" onClick={toCertificated}>Certificate</button>
                        <button className="cursor-pointer hover:text-primary text-center font-normal text-sm" onClick={toPhotoGallery}>Photo Gallery</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Nav;