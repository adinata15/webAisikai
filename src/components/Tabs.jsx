import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import ImageName1 from "../assets/images/asp.jpg";
import ImageName2 from "../assets/images/skt1.jpg";
import ImageName3 from "../assets/images/skt2.jpg";
import ImageName4 from "../assets/images/askq1.jpg";
import ImageName5 from "../assets/images/mccb1.webp";
import ImageName6 from "../assets/images/mccb2.webp";
import ImageName7 from "../assets/images/mccb3.webp";
import ImageName8 from "../assets/images/mccb4.webp";
import ImageName9 from "../assets/images/ucb1.webp";
import ImageName10 from "../assets/images/ucb2.webp";
import ImageName11 from "../assets/images/ucb3.webp";
import ImageName12 from "../assets/images/ucb4.webp";
import ImageName13 from "../assets/images/mcb1.webp";
import ImageName14 from "../assets/images/mcb2.webp";
import ImageName15 from "../assets/images/mcb3.webp";
import ImageName16 from "../assets/images/mcb4.webp";

const Tabs = () => {
    const [activetab, setActiveTab] = useState('ats');
    const navigate = useNavigate();

    const toDetailATS1 = () => {navigate("/products/11");}
    const toDetailATS2 = () => {navigate("/products/12");}
    const toDetailATS3 = () => {navigate("/products/13");}
    const toDetailATS4 = () => {navigate("/products/14");}

    const toDetailMCCB1 = () => {navigate("/products/51");}
    const toDetailMCCB2 = () => {navigate("/products/52");}
    const toDetailMCCB3 = () => {navigate("/products/53");}
    const toDetailMCCB4 = () => {navigate("/products/54");}

    const toDetailUCB1 = () => {navigate("/products/41");}
    const toDetailUCB2 = () => {navigate("/products/42");}
    const toDetailUCB3 = () => {navigate("/products/43");}
    const toDetailUCB4 = () => {navigate("/products/44");}

    const toDetailMCB1 = () => {navigate("/products/61");}
    const toDetailMCB2 = () => {navigate("/products/62");}
    const toDetailMCB3 = () => {navigate("/products/63");}
    const toDetailMCB4 = () => {navigate("/products/64");}

    return(
        <section className="flex flex-col items-center justify-center gap-12 px-6 xl:px-12">
            <div className='flex flex-col xl:flex-row justify-center items-start gap-2'>
                <button
                    className={`px-6 py-4 text-sm 2xl:text-md font-medium text-slate-900 ${activetab === "ats" ? 'bg-primary text-white' : 'text-slate-900'}`}
                    onMouseEnter={() => setActiveTab("ats")}>
                        Automatic Transfer Switch
                </button>
                <button
                    className={`px-6 py-4 text-sm 2xl:text-md font-medium text-slate-900 ${activetab === "mccb" ? 'bg-primary text-white' : 'text-slate-900'}`}
                    onMouseEnter={() => setActiveTab("mccb")}>
                        Molded Case Circuit Breaker
                </button>
                <button
                    className={`px-6 py-4 text-sm 2xl:text-md font-medium text-slate-900 ${activetab === "ucb" ? 'bg-primary text-white' : 'text-slate-900'}`}
                    onMouseEnter={() => setActiveTab("ucb")}>
                        Universal Circuit Breaker
                </button>
                <button
                    className={`px-6 py-4 text-sm 2xl:text-md font-medium text-slate-900 ${activetab === "mcb" ? 'bg-primary text-white' : 'text-slate-900'}`}
                    onMouseEnter={() => setActiveTab("mcb")}>
                        Miniature Circuit Breaker
                </button>
            </div>

            <div className='flex flex-col justify-center items-center'>
                {activetab === 'ats' && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col xl:flex-row items-start gap-12">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS1}>
                                    <img src={ImageName1} alt="image-ats1" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS1}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">SP Anti-surge Module</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS2}>
                                    <img src={ImageName2} alt="image-ats2" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS2}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">SKT1 Series Class PC ATS</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS3}>
                                    <img src={ImageName3} alt="image-ats3" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursoir-pointer' onClick={toDetailATS3}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">SKT2 Series Ultra-thin Class PC ATS</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS4}>
                                    <img src={ImageName4} alt="image-ats4" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailATS4}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKQ1 Series Household ATS 16A-63A</h3>
                                </button>
                            </div>
                        </div>
                        
                        <button className='px-6 py-4 text-primary self-end text-md font-medium 3xl:mt-8'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'mccb' && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col xl:flex-row items-start gap-12">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB1}>    
                                    <img src={ImageName5} alt="image-mccb1" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB1}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker</h3>
                                </button>                              
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB2}>
                                    <img src={ImageName6} alt="image-mccb2" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB2}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKM2E Series Intelligent Electronic Molded Case Circuit Breaker</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB3}>
                                    <img src={ImageName7} alt="image-mccb3" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB3}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKM1 Series Normal Protected Molded Case Circuit Breaker</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB4}>
                                    <img src={ImageName8} alt="image-mccb4" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCCB4}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKM1L Series Leaked Protected Molded Case Circuit Breaker</h3>
                                </button>
                            </div>
                        </div>
                        
                        <button className='px-6 py-4 text-primary self-end text-md font-medium 3xl:mt-8'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'ucb' && (
                    <div id="tab-ucb" className="flex flex-col gap-4">
                        <div className="flex flex-col xl:flex-row items-start gap-12">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB1}>
                                    <img src={ImageName9} alt="image-ucb1" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB1}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKW2 Series Fixed Type Intelligent Universal Circuit Breaker</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB2}>
                                    <img src={ImageName10} alt="image-ucb2" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB2}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB3}>
                                    <img src={ImageName11} alt="image-ucb3" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB3}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker </h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB4}>
                                    <img src={ImageName12} alt="image-ucb4" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailUCB4}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKW3 Series Fixed Type Intelligent Universal Circuit Breaker</h3>
                                </button>
                           </div>
                        </div>
                        
                        <button className='px-6 py-4 text-primary self-end text-md font-medium 3xl:mt-8'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'mcb' && (
                    <div id="tab-mcb" className="flex flex-col gap-4">
                        <div className="flex flex-col xl:flex-row items-start gap-12">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB1}>
                                    <img src={ImageName13} alt="image-mc1" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB1}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKB6L Series Leakage Protection MCB</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB2}>
                                    <img src={ImageName14} alt="image-mc2" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB2}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKB6 Series Leakage Protection MCB</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB3}>
                                    <img src={ImageName15} alt="image-mc3" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB3}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKB5L Series Leakage Protection MCB</h3>
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB4}>
                                    <img src={ImageName16} alt="image-mc4" className="w-1/2 xl:w-[25rem]"/>
                                </button>
                                <button className='hover:text-primary cursor-pointer' onClick={toDetailMCB4}>
                                    <h3 className="font-medium text-sm 2xl:text-md text-center">ASKB5 Series Leakage Protection MCB</h3>
                                </button>
                            </div>
                        </div>
                        
                        <button className='px-6 py-4 text-primary self-end text-md font-medium 3xl:mt-8 '>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Tabs;