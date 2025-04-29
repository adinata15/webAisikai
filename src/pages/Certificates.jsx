import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

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
import {IoStarSharp} from "react-icons/io5";

const Certificates = () => {
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

            <div className="flex flex-col py-12 gap-12 xl:gap-24 xl:px-8 xl:px-24 3xl:px-60">
                <div className="flex flex-col justify-center items-center gap-4 xl:gap-8 px-6 xl:px-24">
                    <h2 className="font-bold text-2xl xl:text-4xl">Our Honor</h2>
                    <div className="flex flex-row gap-2 text-primary -mt-4">
                        <IoStarSharp className="size-4" />
                        <IoStarSharp className="size-4"/>
                        <IoStarSharp className="size-4"/>
                        <IoStarSharp className="size-4"/>
                        <IoStarSharp className="size-4"/>
                    </div>

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
            </div>

            <Footer />
        </section>
    )
}

export default Certificates;