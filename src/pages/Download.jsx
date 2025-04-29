import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SideContact from "../components/SideContact.jsx";

import { FaDownload } from "react-icons/fa6";
import { GrView } from "react-icons/gr";

import FD1 from '../assets/files/Product Catalog 2024—24V1.1-AISIKAI.pdf';
import FD2 from '../assets/files/SKT SERIES ATS Product Selection Guide-24V1.0-AISIKAI.pdf';
import FD3 from '../assets/files/AISIKAI-ASKQ1 Selection guide 2023v1.0.pdf';
import FD4 from '../assets/files/ASKQ6 ATS Products Introduction-24V1.0-AISIKAI.pdf';
import FD5 from '../assets/files/AISIKAI-ASKM1  Series  Catalogue 2023V1.0.pdf';
import FD6 from '../assets/files/AISIKAI-ASKM3  Series  Catalogue 2023V1.0.pdf';
import FD7 from '../assets/files/AISIKAI-ASKW Series  Catalogue_2023V1.0.pdf';
import FD8 from '../assets/files/ASKV5 Series VCB Catalogue-24V1.2- AISIKAI.pdf';
import FD9 from '../assets/files/SKQ1 Series Automatic Transfer Switch Catalogue-ATS24V1.0-AISIKAI.pdf';
import FD10 from '../assets/files/AISIKAI-BAC SERIES USER MANUAL-24V1.0.pdf';
import FD11 from '../assets/files/AISIKAI-MCB Series  Catalogue 2023V1.0.pdf';
import FD12 from '../assets/files/2019-(ATSC) Intelligent ATS Controller Catalogue-V1.2_190904.pdf';

import FD1image from '../assets/images/fd1.webp';
import FD2image from '../assets/images/fd2.webp';
import FD3image from '../assets/images/fd3.webp';
import FD4image from '../assets/images/fd4.webp';
import FD5image from '../assets/images/fd5.webp';
import FD6image from '../assets/images/fd6.webp';
import FD7image from '../assets/images/fd7.webp';
import FD8image from '../assets/images/fd8.webp';
import FD9image from '../assets/images/fd9.webp';
import FD10image from '../assets/images/fd10.webp';
import FD11image from '../assets/images/fd11.webp';
import FD12image from '../assets/images/fd12.webp';


const Download = () => {
    return(
        <section>
            <SideContact className="absolute"/>
            <Header />
            <Breadcrumb pageName="Download" />

            <div className="px-6 xl:px-24 3xl:px-60 py-12 xl:pb-16 flex flex-col justify-center items-center gap-8 xl:gap-12">
                <div className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-center gap-10">
                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-07-03</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">1462</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">AISIKAI-ASKM1 Series Catalogue 2023V1.0.pdf</h3>
                        </div>

                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD1image} alt="fd1image" className="w-full h-full object-contain"/>
                            </div>                            
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD1} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2025-04-03</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">8652</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">SKT SERIES ATS Catalogue -24V1.0-AISIKAI.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD2image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD2} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2022-07-26</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">904</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">AISIKAI-ASKQ1 Selection guide 2023v1.0.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD3image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD3} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-12-10</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">117</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">ASKQ6 ATS Products Introduction-24V1.0-AISIKAI.pdf</h3>
                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD4image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD4} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-06-06</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">539</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">AISIKAI-ASKM1 Series Catalogue 2023V1.0.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD5image} alt="fd2image" className="w-[12rem] ml-5 h-full object-contain self-center"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD5} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-05-24</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">429</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">AISIKAI-ASKM3 Series Complete Catalogue 2023V1.0.pdf</h3>
                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD6image} alt="fd2image" className="w-[12rem] ml-5 h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD6} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2022-09-30</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">340</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">ACB Catalog-ASKW Series_2023V1.0.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD7image} alt="fd2image" className="w-[12rem] ml-5 h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD7} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2022-02-17</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">1634</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">ASKV5 Series VCB Complete Catalogue-24V1.2- AISIKAI.pdf</h3>
                        </div>
                        <div className="mt-5 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD8image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD8} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-12-10</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">546</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">SKQ1 Series Automatic Transfer Switch Catalogue-ATS24V1.0-AISIKAI.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD9image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD9} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2024-05-24</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">429</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">AISIKAI-BAC SERIES USER MANUAL-24V1.0.pdf</h3>
                        </div>
                        <div className="mt-15 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD10image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD10} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2022-09-30</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">340</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">MCB Catalogue.pdf</h3>
                        </div>
                        <div className="mt-15 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD11image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD11} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-lg xl:w-[20rem]">
                        <div className="flex flex-col justify-between items-start gap-2">
                            <div className="flex row justify-between items-start gap-6">
                                <h3 className="text-sm text-gray">2022-02-17</h3>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <FaDownload className="text-gray"/>
                                    <h3 className="text-sm text-gray">1634</h3>
                                </div>
                            </div>
                            <h3 className="text-sm">2019-(ATSC) Intelligent ATS Controller Catalogue-V1.2_190904.pdf</h3>
                        </div>
                        <div className="mt-10 flex flex-col justify-center items-center gap-4 bg-gray-50 p-8 w-full h-[12rem]">
                            <div className="size-[15rem]">
                                <img src={FD12image} alt="fd2image" className="w-full h-full object-contain"/>
                            </div>
                        </div>
                        <div className="bg-primary flex flex-row justify-center items-center gap-2 w-full h-[2.5rem]">
                            <a href={FD12} download className="text-white py-2 sm:py-6 font-normal text-sm flex justify-center">View More</a>
                            <GrView className="text-white"/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Download;