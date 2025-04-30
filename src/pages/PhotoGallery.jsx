import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SideContact from "../components/SideContact";

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
import {useState} from "react";
import {IoStarSharp} from "react-icons/io5";


const PhotoGallery = () => {

    const [activeTab, setActiveTab] = useState("company-environment");

    return(
        <section>
            <SideContact className="absolute"/>
            <Header />
            <Breadcrumb pageName={"Photo Gallery"} />

            <div className="px-6 flex flex-col py-12 gap-12 xl:gap-24 xl:px-24 3xl:px-60">
                <div className="container px-4 flex flex-col gap-12 justify-center items-center">

                    {/* Tab Navigation */}
                    <div className="flex justify-center items-center mb-1 w-full xl:w-1/2">
                        <div className="flex w-full gap-12">
                            <button
                                className={`py-3 px-4 text-lg font-medium flex-1 cursor-pointer ${
                                    activeTab === "company-environment"
                                        ? "bg-primary text-white"
                                        : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
                                }`}
                                onClick={() => setActiveTab("company-environment")}
                            >
                                Company Environment
                            </button>
                            <button
                                className={`py-3 px-6 text-lg font-medium flex-1 cursor-pointer ${
                                    activeTab === "global-exhibition"
                                        ? "bg-primary text-white"
                                        : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
                                }`}
                                onClick={() => setActiveTab("global-exhibition")}
                            >
                                Global Exhibition
                            </button>
                        </div>
                    </div>

                    <div>
                        {activeTab === "company-environment" ?
                            <div className="flex flex-col justify-center items-center gap-8">
                                <h2 className="font-bold text-2xl">Company Environment</h2>
                                <div className="flex flex-row gap-2 text-primary -mt-4">
                                    <IoStarSharp className="size-4" />
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                </div>
                            </div> :
                            <div className="flex flex-col justify-center items-center gap-8">
                                <h2 className="font-bold text-2xl">Global Exhibition</h2>
                                <div className="flex flex-row gap-2 text-primary -mt-4">
                                    <IoStarSharp className="size-4" />
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                    <IoStarSharp className="size-4"/>
                                </div>
                            </div>
                        }
                    </div>

                    {/* Company Environment Tab Content */}
                    {activeTab === "company-environment" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG1} alt="Company Environment 1" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG2} alt="Company Environment 2" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG3} alt="Company Environment 3" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG4} alt="Company Environment 4" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG5} alt="Company Environment 5" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG6} alt="Company Environment 6" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                    )}

                    {/* Global Exhibition Tab Content */}
                    {activeTab === "global-exhibition" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG7} alt="Global Exhibition 1" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG8} alt="Global Exhibition 2" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG9} alt="Global Exhibition 3" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG10} alt="Global Exhibition 4" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG11} alt="Global Exhibition 5" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                                <img src={PG12} alt="Global Exhibition 6" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default PhotoGallery;