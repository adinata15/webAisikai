import { useState } from 'react';

import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

import logoAisikai from '../assets/images/logo-aisikai.jpg';
import iconIndonesia from '../assets/icons/indonesia.svg';
import iconUk from '../assets/icons/uk.svg';

const Header = () => {

    const navLink = [
        {label: "Home", href: "/home"},
        {label: "Products", href: "/products"},
        {label: "About Us", href: "/about-us"},
        {label: "Download", href: "/download"},
        {label: "Contact Us", href: "/contact-us"},
      ]

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <section className="bg-linear-to-r from-white via-blue-50 to-white relative flex flex-row gap-4 py-2 xl:py-[0.05rem] px-6 xl:px-16 justify-center items-center">
            <div className="w-xs flex items-center justify-start">
                <a href="/home">
                    <img src={logoAisikai} alt="logo-aisikai" className='w-[10rem] 2xl:w-[12rem]'/>
                </a> 
            </div>

            <div className="hidden xl:flex self-center">
                <Nav linkToNav={navLink}/>
            </div>

            <div className='w-sm flex flex-row items-center justify-end gap-8'>
                <div className='hidden xl:flex flex-row items-center px-4 bg-gray-100 rounded-full'>
                    <FiSearch className="bg-gray-100 size-4"/>
                    <input type="search" name="search" placeholder="Search" className="px-4 py-2 rounded-full outline-none flex-1 w-40" />
                </div>

                <div className='hidden xl:flex flex-row gap-4 justify-center items-center'>
                    <button className="w-8">
                        <img src={iconIndonesia} alt="button-bahasaindonesia" className="w-full h-full object-cover"/>
                    </button>
                    <button className="w-8">
                        <img src={iconUk} alt="button-english" className="w-full h-full object-cover"/>
                    </button>
                </div>
            </div>
            
            
            <button className='xl:hidden'>
                <FiMenu className="size-[2.5rem]" onClick={handleShowMenu}/>
            </button>

            {showMenu && 
                (
                    <div className="absolute top-0 w-full z-20 shadow-2xl">
                        <div className="">
                            <MobileMenu logo={logoAisikai} linkToNav={navLink} handleShowMenu={handleShowMenu} />
                        </div>
                    </div> 
                )
            }
        </section>            
    )
}

export default Header;