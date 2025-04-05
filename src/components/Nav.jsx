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
    const navigate = useNavigate();

    // const toATS = () => {navigate("products/1");}
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

    const toITS = () => {navigate("products", { state: {category: "Intelligent ATS Controller"}});}

    return(
        <section className="flex flex-col xl:flex-row relative">
            {linkToNav.map((item, index) => (
                <div key={index} className="my-6 xl:font-medium"
                    onMouseEnter={() => item.label === "Products" && setShowProducts(true)}
                    onMouseLeave={() => item.label === "Products" && setShowProducts(false)}>
                        <a href={item.href} className={`mx-4 2xl:mx-6 text-md 2xl:text-lg font-normal hover:text-primary ${location.pathname === item.href ? "text-primary" : ""}`}
                        >{item.label}</a>
                </div>
            ))}

            {showproducts && (
                <div className="absolute top-14 bg-white border border-gray-300 shadow-lg z-10 justify-center items-center"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}>
                    <div className="p-8 flex flex-col gap-8 justify-start items-center self-center">
                        <div className="flex flex-row justify-center items-center gap-2">
                            <div className="flex flex-col justify-center items-center w-44">
                                <button className="cursor-pointer" >
                                    <img src={ATS} alt="image-automatictransferswitch" className="w-22"/>
                                </button>
                                <button className="cursor-pointer w-full hover:text-primary" >
                                    <h3 className="text-center font-normal text-sm">Automatic Transfer Switch</h3>
                                </button>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <button onClick={toITS}>
                                    <img alt="image-intelligentatscontroller" className="w-22"/>
                                </button>
                                <button className="w-full hover:text-primary" onClick={toITS}>
                                    <h3 className="text-center font-normal text-sm">Intelligent ATS Controller</h3>
                                </button>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={HVVCB} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">High Voltage Vacuum Circuit Breaker</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={UACB} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Universal Air Circuit Breaker</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={MCCB} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Molded Case Circuit Breaker</h3>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-2">
                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={MCB} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Miniature Circuit Breaker</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={LIS} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Load Isolation Switch</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={OAUP} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Overvoltage And Undervoltage Protector</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={SPD} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Surge Protective Device</h3>
                            </div>

                            <div className="flex flex-col justify-center items-center w-44">
                                <a href="/products">
                                    <img src={IPM} alt="image-automatictransferswitch" className="w-22"/>
                                </a>
                                <h3 className="text-center font-normal text-sm">Intelligent Power Meter</h3>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center self-start w-44 hover:text-primary">
                            <a href="/products">
                                <img src={BC} alt="image-automatictransferswitch" className="w-22"/>
                            </a>
                            <h3 className="text-center font-normal text-sm">Battery Charge</h3>
                        </div>
                        
                    </div>
                </div>
            )}
        </section>

        
    )
}

export default Nav;