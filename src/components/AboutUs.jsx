// import Youtube from "react-youtube";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ImageES from "../assets/images/enterprise-spirit.webp";
import ImageEV from "../assets/images/enterprise-vision.webp";
import ImageBP from "../assets/images/business-philosophy.webp";
import ImageDT from "../assets/images/development-tenet.webp";

import { RiSendPlaneFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi2";
import { RiFirebaseFill } from "react-icons/ri";


const AboutUs = () => {

    // const videoYoutube = "F4qOO5minVU";
    // const opts = {
    //     playerVars: {autoplay: 0,},
    //     width: 'fit',
    //     height: 'auto',
    // };

    const navigate = useNavigate();

    const navToCompanyProfile = () => {
        navigate('/company-profile');
    }

    const [isHover, setIsHover] = useState(false);

    
    return(
        <section className="px-6 xl:px-24 bg-gray-100 py-12">
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="font-bold text-2xl 3xl:text-3xl">About Us</h2>
                <div className="flex flex-col gap-12 justify-center items-center 3xl:mt-8">
                    <div className="flex flex-col xl:flex-row gap-6 xl:items-start">
                        <div className="bg-red-500 flex flex-col justify-center items-center gap-2 xl:w-1/2">
                            {/* <div className="justify-center xl:justify-start items-center xl:items-start xl:w-full">
                                <Youtube videoId={videoYoutube} opts={opts} className="xl:hidden"/>
                                <Youtube videoId={videoYoutube} className="hidden xl:flex"/>
                            </div> */}
                            <h4 className="font-medium text-md text-gray-400">AISIKAI ELECTRIC INTRODUCTION</h4>
                        </div>
                        <div className="bg-blue-500 xl:w-1/2 flex flex-col justify-center items-start gap-6 text-center xl:text-left px-6 3xl:text-xl">
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
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiSendPlaneFill />
                                        <h3>Enterprise Spirit</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageES} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm">
                                                Aware of Adversity in Prosperity, Broaden Sources and Reduce Expenditure
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-blue-500 gap-2">
                                        <HiFlag />
                                        <h3>Enterprise Vision</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageEV} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm">
                                                Make Contributions to Society, Care About Wellbeing of  Employees
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 3xl:size-84 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiFirebaseFill />
                                        <h3>Business Philosophy</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageBP} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm w-full">
                                                Sincerity, Excellence, Perfection
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="size-76 xl:size-60 2xl:size-80 3xl:size-90 flex flex-col justify-center items-center"
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}>
                                    <div className="flex flex-row bg-white py-2 w-full justify-center items-center text-primary gap-2">
                                        <RiFirebaseFill />
                                        <h3>Development Tenet</h3>
                                    </div>
                                    <div className="w-full h-96 relative flex flex-col justify-end">
                                        <img src={ImageDT} alt="image-enterprisespirit" className="w-full h-full object-cover"/>
                                        {isHover && (
                                            <p className="bg-primary/50 p-4 absolute flex self-end font-medium text-white text-sm w-full">
                                                Quality, Service, Reputation, Innovation
                                            </p>
                                        )}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;