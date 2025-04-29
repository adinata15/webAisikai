import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import { IoStarSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiFlag } from "react-icons/hi2";
import { RiFirebaseFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";

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
import PG13 from '../assets/images/photogallery13.jpg';
import PG14 from '../assets/images/photogallery14.jpg';
import PG15 from '../assets/images/photogallery15.jpg';
import PG16 from '../assets/images/photogallery16.jpg';
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

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const handleImageClick = (image) => {
        setPopupImage(image);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return(
        <section>
            <Header />
            <Breadcrumb pageName={"About Us"} />

            <div className="flex flex-col py-12 gap-12 xl:gap-24 -mb-12">

                {/* Company Profile */}
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-12 px-6 xl:px-24 3xl:px-60 justify-center items-center xl:items-start">
                    <div className="flex flex-col justify-center items-center xl:items-start gap-4 xl:gap-8">
                        <div className="flex flex-row justify-start items-center gap-2">
                            <div className="h-8 border-2 border-primary"></div>
                            <h3 className="text-2xl xl:text-4xl font-bold">About Aisikai</h3>
                        </div>
                        <p className="font-medium text-center xl:text-left text-md xl:text-sm leading-normal">AISIKAI, established in 2007, is dedicated to the high quality research, development, manufacturing, and sales of electrical products. Over the years, the company has proactively expanded its business into four major market segments:
                            New Energy, Power Quality, Industrial Control, and Power Distribution.
                            With exceptional R&D strength, AISIKAI has earned recognition as a high-tech company, a company specializing in new technology, and a software company. The company holds certifications such as ISO9001, ISO14001, ISO45001, and consistently maintains a 3A grade credit enterprise. <br /><br />
                            Since its establishment, AISIKAI has consistently prioritized product quality. Guided by independent research and development, the company continually introduces innovations, securing numerous invention patents, utility model patents, and design patents. All product software is 100% copyright protected. By working closely with renowned universities and employing a high-calibre research team, AISIKAI is continuously improving its R & D and innovation capabilities. <br /> <br />
                            Quality control is built into every stage of production at AISIKAI. The company has advanced R & D laboratories, product performance testing centers, storage workshops, precision machining workshops, assembly workshops, and complete set workshops. Each product undergoes thorough data calibration and functional testing after assembly to ensure it meets high standards before proceeding to the next production stage. Products are certified by China CCC, EU CE, international IEC, and recognized by Germany's TUV Rhineland certification agency and SGS to meet industry standards in various countries and regions. AISIKAI's high quality products, manufactured under strict production processes, quickly reach over 80 countries and regions and enjoy wide popularity.
                            With its professional research and development strength and outstanding quality, AISIKAI sets an industry model and constantly provides reliable solutions for customers.
                            AISIKAI, a brand trusted by users around the world.
                        </p>
                    </div>

                    <div className="w-full xl:w-1/2 2xl:w-1/2">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#1e1e1e',
                                '--swiper-pagination-color': '#1e1e1e',
                            }}
                            thumbs={{swiper: thumbsSwiper}}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{delay: 10000}}
                            modules={[FreeMode, Pagination, Autoplay, Navigation, Thumbs]}
                            navigation={true}
                            className="mySwiper">
            
                            <SwiperSlide className="mb-6">
                                <img src={PG1} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG2} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG3} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG4} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG5} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG6} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG7} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG8} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG9} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG10} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG11} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG12} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG13} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG14} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG15} alt="shoes1-image" className='w-full'/>
                            </SwiperSlide>
                            <SwiperSlide className="mb-6">
                                <img src={PG16} alt="shoes2-image" className='w-full'/>
                            </SwiperSlide> 
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                            style={{padding: "0 50px"}}>

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

                <div className="flex flex-col justify-center items-center xl:items-start xl:flex-row gap-16 3xl:gap-24 px-6 xl:px-24">
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

                <div className="w-full bg-gray-200 px-8 xl:px-24 3xl:px-60 py-8 sm:py-16 flex flex-col xl:flex-row justify-between items-center gap-8">
                    <h2 className="text-primary font-bold xl:font-medium text-3xl sm:text-5xl xl:text-4xl">Get in touch with us</h2>
                    <a href="" className="bg-primary px-20 py-4 text-white font-bold text-2xl rounded-full">Contact Us</a>
                </div>
                
            </div>

            <Footer />
        </section>
    )
}

export default AboutUs;