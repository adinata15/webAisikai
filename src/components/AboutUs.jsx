import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ImageES from "../assets/images/enterprise-spirit.webp";
import ImageEV from "../assets/images/enterprise-vision.webp";
import ImageBP from "../assets/images/business-philosophy.webp";
import ImageDT from "../assets/images/development-tenet.webp";

import PG1 from '../assets/images/photogallery1.jpg';
import PG2 from '../assets/images/photogallery2.jpg';
import PG3 from '../assets/images/photogallery3.jpg';
import PG4 from '../assets/images/photogallery4.jpg';
import PG5 from '../assets/images/photogallery5.jpg';
import PG6 from '../assets/images/photogallery6.jpg';
import PG7 from '../assets/images/photogallery7.jpg';
import PG8 from '../assets/images/photogallery8.webp';
import PG9 from '../assets/images/photogallery9.jpg';
import PG10 from '../assets/images/photogallery10.jpg';
import PG11 from '../assets/images/photogallery11.jpg';
import PG12 from '../assets/images/photogallery12.jpg';

import { RiSendPlaneFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi2";
import { RiFirebaseFill } from "react-icons/ri";


const AboutUs = () => {

    const navigate = useNavigate();

    const navToCompanyProfile = () => {
        navigate('/company-profile');
    }

    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    
    const [activeTab, setActiveTab] = useState("company-environment");

    
    return(
        <section className="px-6 xl:px-24 3xl:px-60 bg-gray-100 py-12">
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="font-bold text-2xl 3xl:text-3xl">About Us</h2>
                <div className="flex flex-col gap-12 justify-center items-center 3xl:mt-8">
                    <div className="flex flex-col xl:flex-row gap-6 xl:items-start">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <iframe width="auto" height="auto" 
                                src="https://www.youtube.com/embed/F4qOO5minVU?si=VF2pzjXsCzS9npuE" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen
                                className="xl:hidden">
                            </iframe>
                            <iframe width="600" height="440" 
                                src="https://www.youtube.com/embed/F4qOO5minVU?si=VF2pzjXsCzS9npuE" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen
                                className="hidden xl:flex">
                            </iframe>
                            <h4 className="font-medium text-md text-gray-400">AISIKAI ELECTRIC INTRODUCTION</h4>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-6 text-center xl:text-left px-6 3xl:text-xl">
                            <p>AISIKAI is located in Yangzhou, a livable and tourist city famous for her beautiful natural scenery and rich cultural heritage.
                                Since established in 2007, AISIKAI has been committed to the manufacture, research, development and marketing of the high-quality electric switch. <br /> <br />
                                AISIKAI has obtained the UKAS ISO9001 Quality Management System and SGS Global Qualified Supplier Authentication. We are awarded as the National High-Tech Enterprise, 
                                Ten Major Brands in Industry and Contract-keeping and Trustworthy Enterprise. Our product lines cover level Ⅰ,Ⅱ,Ⅲ power distribution filed. All products have  Chinese 
                                Compulsory Certification CCC and European Certification CE. We have several patented technologies, and all products own proprietary intellectual property rights.
                            </p>
                            <button onClick={navToCompanyProfile} className="self-center px-6 py-4 bg-primary text-white rounded-lg xl:self-start"><a href="">Read More</a></button>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-between items-center gap-8 w-full">
                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 3xl:size-84 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover1(true)}
                                onMouseLeave={() => setIsHover1(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiSendPlaneFill />
                                        <h3>Enterprise Spirit</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageES} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover1 && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm">
                                                Aware of Adversity in Prosperity, Broaden Sources and Reduce Expenditure
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover2(true)}
                                onMouseLeave={() => setIsHover2(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-blue-500 gap-2">
                                        <HiFlag />
                                        <h3>Enterprise Vision</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageEV} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover2 && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm">
                                                Make Contributions to Society, Care About Wellbeing of  Employees
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 3xl:size-84 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover3(true)}
                                onMouseLeave={() => setIsHover3(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiFirebaseFill />
                                        <h3>Business Philosophy</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageBP} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover3 && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm w-full">
                                                Sincerity, Excellence, Perfection
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 3xl:size-90 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover4(true)}
                                onMouseLeave={() => setIsHover4(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiFirebaseFill />
                                        <h3>Development Tenet</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageDT} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover4 && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm w-full">
                                                Quality, Service, Reputation, Innovation
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery Section with Tabs */}
                <div className="w-full mt-16">
                    <h2 className="font-bold text-2xl 3xl:text-3xl text-center mb-8">Photo Gallery</h2>
                    
                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="flex border-b border-gray-300 w-full max-w-xl">
                            <button
                                className={`py-3 px-6 text-lg font-medium flex-1 ${
                                    activeTab === "company-environment" 
                                    ? "border-b-2 border-primary text-primary" 
                                    : "text-gray-600 hover:text-primary"
                                }`}
                                onClick={() => setActiveTab("company-environment")}
                            >
                                Company Environment
                            </button>
                            <button
                                className={`py-3 px-6 text-lg font-medium flex-1 ${
                                    activeTab === "global-exhibition" 
                                    ? "border-b-2 border-primary text-primary" 
                                    : "text-gray-600 hover:text-primary"
                                }`}
                                onClick={() => setActiveTab("global-exhibition")}
                            >
                                Global Exhibition
                            </button>
                        </div>
                    </div>
                    
                    {/* Gallery images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeTab === "company-environment" && (
                            <>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG1} alt="Company Environment 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG2} alt="Company Environment 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG3} alt="Company Environment 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG4} alt="Company Environment 4" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG5} alt="Company Environment 5" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG6} alt="Company Environment 6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                            </>
                        )}
                        
                        {activeTab === "global-exhibition" && (
                            <>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG7} alt="Global Exhibition 1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG8} alt="Global Exhibition 2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG9} alt="Global Exhibition 3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG10} alt="Global Exhibition 4" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG11} alt="Global Exhibition 5" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <img src={PG12} alt="Global Exhibition 6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;