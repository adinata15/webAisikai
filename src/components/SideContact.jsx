import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useState } from "react";

import { IoMdArrowDropleft } from "react-icons/io";

const SideContact = () => {
    const [hoveredwhatsapp, setHoveredWhatsapp] = useState(false);
    const [hoveredemail, setHoveredEmail] = useState(false);

    return (
        <div>
            <div className="xl:hidden">
                <div className='fixed z-20 flex items-end bottom-0 w-full'>
                    <div className='flex flex-row justify-between w-full'>
                        <div 
                            className='bg-primary size-18 flex justify-center items-center w-50 hover:bg-white relative'>
                            <a href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai">
                                <RiWhatsappFill className='text-white hover:text-primary size-10'/>
                            </a>
                        </div>

                        <div className="h-full border-[0.1rem] border-white bg-white"></div>

                        <div className='bg-primary size-18 flex justify-center items-center w-50'>
                            <a href="mailto:detapowergensetindonesia@gmail.com">
                                <MdEmail className='text-white size-10'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden xl:flex">
                <div className='min-h-screen fixed z-20 flex items-center right-0'>
                    <div className='flex flex-col gap-[0.1rem]'>
                        <div className='bg-primary hover:bg-white text-white hover:text-primary size-16 flex justify-center items-center relative ease-in duration-300'
                            onMouseEnter={() => setHoveredWhatsapp(true)}
                            onMouseLeave={() => setHoveredWhatsapp(false)}>
                                <a href="https://wa.me/6285176879999?text=Halo, Saya tertarik dengan produk Aisikai">
                                    <RiWhatsappFill className='size-10'/>
                                </a>
                                {hoveredwhatsapp && (
                                    <div className="absolute bg-primary text-white h-16 w-32 right-full text-center flex flex-row items-center">
                                        <h4 className="text-sm font-medium w-full pl-4">Deta Power</h4>
                                        <div className="right-0 flex justify-end items-end">
                                            <IoMdArrowDropleft className="size-8 -mr-[0.8rem]"/>
                                        </div>
                                        
                                    </div>
                                )}
                        </div>
                        <div className='bg-primary hover:bg-white text-white hover:text-primary size-16 flex justify-center items-center relative ease-in duration-300'
                            onMouseEnter={() => setHoveredEmail(true)}
                            onMouseLeave={() => setHoveredEmail(false)}>
                                <a href="mailto:detapowergensetindonesia@gmail.com">
                                    <MdEmail className='size-10'/>
                                </a>
                                {hoveredemail && (
                                    <div className="absolute bg-primary text-white h-16 w-32 right-full text-center flex flex-row items-center">
                                        <h4 className="text-sm font-medium w-full pl-4">Email</h4>
                                        <div className="right-0 flex justify-end items-end">
                                            <IoMdArrowDropleft className="size-8 -mr-[0.8rem]"/>
                                        </div>
                                    </div>
                                )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideContact;