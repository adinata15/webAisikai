import { IoCloseCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

import iconIndonesia from '../assets/icons/indonesia.svg';
import iconUk from '../assets/icons/uk.svg';

const MobileMenu = ({logo, linkToNav, handleShowMenu}) => {
     return(
         <section className="min-h-screen gap-8 bg-white flex flex-col justify-between px-6 sm:px-8 py-12">
            <button onClick={handleShowMenu} className="self-end">
                <IoCloseCircle className="size-[3rem]"/>
            </button>
            
            <div className="flex flex-col gap-8">
                <img src={logo} alt="logo-aisikai" className="w-full"/>
                
                <div className="bg-gray-100 flex flex-row items-center px-4">
                    <FiSearch className="bg-gray-100 size-6" />
                    <input type="search" name="search" placeholder="Search" className="bg-gray-100 px-4 py-4 rounded-full outline-none flex-1" />
                </div>

                <div className="flex flex-col">
                    {linkToNav.map((item, index) => (
                        <div key={index} className="my-2 sm:my-4 text-4xl sm:text-5xl font-medium">
                            <a href={item.href}>{item.label}</a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row items-center gap-6 font-medium text-xl">
                    <h2 className="">Contact Us</h2>
                    <div className="flex flex-row gap-4 items-center">
                        <a href="#">
                            <MdEmail className="size-16 text-blue-500"/>
                        </a>
                        <a href="#">
                            <RiWhatsappFill className="size-14 text-blue-500"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-8 items-center'>
                <button className="w-12">
                    <img src={iconIndonesia} alt="button-bahasaindonesia" className="w-full h-full object-cover"/>
                </button>
                <button className="w-12">
                    <img src={iconUk} alt="button-english" className="w-full h-full object-cover"/>
                </button>
            </div>
         </section>
     )
}

export default MobileMenu;