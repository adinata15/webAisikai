import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Header from "../components/Header";
import Footer from "../components/Footer";

import { IoStarSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi2";
import { RiFirebaseFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";

import PG1 from '../assets/images/photogallery1.webp';
import PG2 from '../assets/images/photogallery2.webp';
import PG3 from '../assets/images/photogallery3.webp';
import PG4 from '../assets/images/photogallery4.webp';
import PG5 from '../assets/images/photogallery5.webp';
import PG6 from '../assets/images/photogallery6.webp';
import PG7 from '../assets/images/photogallery7.webp';
import PG8 from '../assets/images/photogallery8.webp';
import PG9 from '../assets/images/photogallery9.webp';
import PG10 from '../assets/images/photogallery10.webp';
import PG11 from '../assets/images/photogallery11.webp';
import PG12 from '../assets/images/photogallery12.webp';
import PG13 from '../assets/images/photogallery13.webp';
import PG14 from '../assets/images/photogallery14.webp';
import PG15 from '../assets/images/photogallery15.webp';
import PG16 from '../assets/images/photogallery16.webp';
import Cert1 from '../assets/images/cert1.webp';
import Cert2 from '../assets/images/cert2.webp';
import Cert3 from '../assets/images/cert3.webp';
import Cert4 from '../assets/images/cert4.webp';
import Cert5 from '../assets/images/cert5.webp';
import Cert6 from '../assets/images/cert6.webp';
import Cert7 from '../assets/images/cert7.webp';
import Cert8 from '../assets/images/cert8.webp';
import Cert9 from '../assets/images/cert9.webp';
import Cert10 from '../assets/images/cert10.webp';
import Cert11 from '../assets/images/cert11.webp';
import Cert12 from '../assets/images/cert12.webp';
import Cert13 from '../assets/images/cert13.webp';
import Cert14 from '../assets/images/cert14.webp';
import Cert15 from '../assets/images/cert15.webp';
import Cert16 from '../assets/images/cert16.webp';
import Cert17 from '../assets/images/cert17.webp';
import Cert18 from '../assets/images/cert18.webp';
import Cert19 from '../assets/images/cert19.webp';
import Cert20 from '../assets/images/cert20.webp';

import { useState } from 'react';

const AboutUs = () => {
    const [popupImage, setPopupImage] = useState(null);

    const handleImageClick = (image) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return(
        <section>
            <Header />

            <div className="flex flex-col py-12 gap-12 xl:gap-24 -mb-12">

                {/* Company Profile */}
                <div className="flex flex-col gap-4 xl:gap-12 px-6 xl:px-24 justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-4 xl:gap-8">
                        <h3 className="text-2xl xl:text-4xl font-bold">About Aisikai</h3>
                        <p className="font-medium text-center text-md leading-normal">AISIKAI, established in 2007, is dedicated to the high quality research, development, manufacturing, and sales of electrical products. Over the years, the company has proactively expanded its business into four major market segments: 
                            New Energy, Power Quality, Industrial Control, and Power Distribution.
                            With exceptional R&D strength, AISIKAI has earned recognition as a high-tech company, a company specializing in new technology, and a software company. The company holds certifications such as ISO9001, ISO14001, ISO45001, and consistently maintains a 3A grade credit enterprise. <br /><br />
                            Since its establishment, AISIKAI has consistently prioritized product quality. Guided by independent research and development, the company continually introduces innovations, securing numerous invention patents, utility model patents, and design patents. All product software is 100% copyright protected. By working closely with renowned universities and employing a high-calibre research team, AISIKAI is continuously improving its R & D and innovation capabilities. <br /> <br />
                            Quality control is built into every stage of production at AISIKAI. The company has advanced R & D laboratories, product performance testing centers, storage workshops, precision machining workshops, assembly workshops, and complete set workshops. Each product undergoes thorough data calibration and functional testing after assembly to ensure it meets high standards before proceeding to the next production stage. Products are certified by China CCC, EU CE, international IEC, and recognized by Germany's TUV Rhineland certification agency and SGS to meet industry standards in various countries and regions. AISIKAI's high quality products, manufactured under strict production processes, quickly reach over 80 countries and regions and enjoy wide popularity.
                            With its professional research and development strength and outstanding quality, AISIKAI sets an industry model and constantly provides reliable solutions for customers.
                            AISIKAI, a brand trusted by users around the world.
                        </p>
                    </div>

                    <div className="2xl:w-2/3">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            freeMode={true}
                            loop={true}
                            autoplay={{delay: 10000}}
                            pagination={{clickable: true}}
                            modules={[FreeMode, Pagination, Autoplay]}
                            navigation={true}
                            className="mySwiper">
            
                            <SwiperSlide className="mb-12">
                                <img src={PG1} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG2} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG3} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG4} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG5} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG6} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG7} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG8} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG9} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG10} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG11} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG12} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG13} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG14} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG15} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-12">
                                <img src={PG16} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide> 
                        </Swiper>
                    </div>  
                </div>

                <div className="flex flex-col justify-center items-start xl:flex-row gap-16 3xl:gap-24 px-6 xl:px-24">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center bg-gradient-to-br from-[#4990D0] to-primary size-16 rounded-full">
                            <RiSendPlaneFill className="text-white size-8"/>
                        </div>
                        <h4 className="font-bold text-xl xl:text-2xl">Development Principles</h4>
                        <ul className="list-disc text-xl gap-2">
                            <li>Quality</li>
                            <li>Service</li>
                            <li>Reputation</li>
                            <li>Innovation</li>
                        </ul>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center bg-gradient-to-br from-[#4990D0] to-primary size-16 rounded-full">
                            <HiFlag className="text-white size-8"/>
                        </div>
                        <h4 className="font-bold text-xl xl:text-2xl">Enterprise Vision</h4>
                        <ul className="list-disc text-xl gap-2 ">
                            <li>Make Contributions <br /> to Society</li>
                            <li>Care About Wellbeing <br /> of Employees</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center bg-gradient-to-br from-[#4990D0] to-primary size-16 rounded-full">
                            <RiFirebaseFill className="text-white size-8"/>
                        </div>
                        <h4 className="font-bold text-xl xl:text-2xl">Business Philosophy</h4>
                        <ul className="list-disc text-xl gap-2">
                            <li>Sincerity</li>
                            <li>Excellence</li>
                            <li>Perfection </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center bg-gradient-to-br from-[#4990D0] to-primary size-16 rounded-full">
                            <FaLeaf className="text-white size-8"/>
                        </div>
                        <h4 className="font-bold text-xl xl:text-2xl">Enterprise Spirit</h4>
                        <ul className="list-disc text-xl gap-2">
                            <li>Aware of Adversity <br /> in Prosperity</li>
                            <li>Broaden Sources and <br /> Reduce Expenditure</li>
                        </ul>
                    </div>
                    
                </div>

                {/* Certificate */}
                <div className="flex flex-col justify-center items-center gap-4 xl:gap-8 px-6 xl:px-24">
                    <h2 className="font-bold text-2xl xl:text-4xl">Our Honor</h2>

                    <div className="flex flex-col xl:flex-row xl:flex-wrap gap-2 xl:gap-6 justify-center items-center">
                        <img src={Cert1} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert1)} />
                        <img src={Cert2} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert2)}/>
                        <img src={Cert3} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert3)}/>
                        <img src={Cert4} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert4)}/>
                        <img src={Cert5} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert5)}/> 
                        <img src={Cert6} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert6)}/>
                        <img src={Cert7} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert7)}/>
                        <img src={Cert8} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert8)}/>
                        <img src={Cert9} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert9)}/>
                        <img src={Cert10} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert10)}/> 
                        <img src={Cert11} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert11)}/>
                        <img src={Cert12} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert12)}/>
                        <img src={Cert12} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert13)}/>
                        <img src={Cert14} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert14)}/>
                        <img src={Cert15} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert15)}/> 
                        <img src={Cert16} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert16)}/>
                        <img src={Cert17} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert17)}/>
                        <img src={Cert18} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert18)}/>
                        <img src={Cert19} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert19)}/>
                        <img src={Cert20} alt="" className="xl:size-1/6" onClick={() => handleImageClick(Cert20)}/> 
                    </div>
                </div>

                {/* Popup */}
                {popupImage && (
                    <div className="fixed inset-0 bg-black/50 bg-opacity-75 flex justify-center items-center z-50 px-6">
                        <div className="relative">
                            <button
                                className="absolute top-2 right-2 text-slate-900 text-5xl sm:text-7xl"
                                onClick={closePopup}>
                                    &otimes;
                            </button>

                            <img src={popupImage} alt="Popup" className="max-w-full max-h-full rounded-lg" />                       
                        </div>
                    </div>
                )}

                <div className="w-screen bg-gray-200 px-8 xl:px-24 py-8 sm:py-16 flex flex-col xl:flex-row justify-between items-center gap-8">
                    <h2 className="text-primary font-bold text-3xl sm:text-5xl">Get in touch with us</h2>
                    <a href="" className="bg-primary px-20 py-4 text-white font-bold text-2xl rounded-full">Contact Us</a>
                </div>
                
            </div>

            <Footer />
        </section>
    )
}

export default AboutUs;