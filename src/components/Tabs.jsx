import React, { useState } from 'react';

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

    return(
        <section className="flex flex-col items-center justify-center gap-12 px-6 xl:px-12">
            <div className='flex flex-col xl:flex-row justify-center items-start gap-2'>
                <button
                    className={`px-6 py-4 rounded-xl text-md font-medium text-slate-900 ${activetab === "ats" ? 'bg-blue-500 text-white' : 'text-slate-900'}`}
                    onClick={() => setActiveTab("ats")}
                    >Automatic Transfer Switch
                </button>
                <button
                    className={`px-6 py-4 rounded-xl text-md font-medium text-slate-900 ${activetab === "mccb" ? 'bg-blue-500 text-white' : 'text-slate-900'}`}
                    onClick={() => setActiveTab("mccb")}
                    >Molded Case Circuit Breaker
                </button>
                <button
                    className={`px-6 py-4 rounded-xl text-md font-medium text-slate-900 ${activetab === "ucb" ? 'bg-blue-500 text-white' : 'text-slate-900'}`}
                    onClick={() => setActiveTab("ucb")}
                    >Universal Circuit Breaker
                </button>
                <button
                    className={`px-6 py-4 rounded-xl text-md font-medium text-slate-900 ${activetab === "mcb" ? 'bg-blue-500 text-white' : 'text-slate-900'}`}
                    onClick={() => setActiveTab("mcb")}
                    >Miniature Circuit Breaker
                </button>
            </div>

            <div className='flex flex-col justify-center items-center'>
                {activetab === 'ats' && (
                    <div className="flex flex-col xl:flex-row items-start gap-12 justify-center">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName1} alt="image-ats1" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASP Anti-surge Module</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName2} alt="image-ats2" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT1 Series Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName3} alt="image-ats3" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT2 Series Ultra-thin Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName4} alt="image-ats4" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKQ1 Series Household ATS 16A-63A</h3>
                        </div>
                        <button className='px-6 py-4 text-blue-500 self-center text-xl font-bold'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'mccb' && (
                    <div className="flex flex-col xl:flex-row items-start gap-12">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName5} alt="image-mccb1" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName6} alt="image-mccb2" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKM2E Series Intelligent Electronic Molded Case Circuit Breaker</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName7} alt="image-mccb3" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKM1 Series Normal Protected Molded Case Circuit Breaker</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName8} alt="image-mccb4" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKM1L Series Leaked Protected Molded Case Circuit Breaker</h3>
                        </div>
                        <button className='px-6 py-4 text-blue-500 self-center text-xl font-bold'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'ucb' && (
                    <div id="tab-ucb" className="flex flex-col xl:flex-row items-start gap-12">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName9} alt="image-ucb1" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASP Anti-surge Module</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName10} alt="image-ucb2" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT1 Series Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName11} alt="image-ucb3" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT2 Series Ultra-thin Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName12} alt="image-ucb4" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKQ1 Series Household ATS 16A-63A</h3>
                        </div>
                        <button className='px-6 py-4 text-blue-500 self-center text-xl font-bold'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}

                {activetab === 'mcb' && (
                    <div id="tab-mcb" className="flex flex-col xl:flex-row items-start gap-12">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName13} alt="image-mc1" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASP Anti-surge Module</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName14} alt="image-mc2" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT1 Series Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName15} alt="image-mc3" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">SKT2 Series Ultra-thin Class PC ATS</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={ImageName16} alt="image-mc4" className="w-1/2"/>
                            <h3 className="font-medium text-xl text-center">ASKQ1 Series Household ATS 16A-63A</h3>
                        </div>
                        <button className='px-6 py-4 text-blue-500 self-center text-xl font-bold'>
                            <a href="">More &#8594;</a>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Tabs;