import { useNavigate } from 'react-router';

import logoAisikai from '../assets/images/logo-aisikai.jpg';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    const navigate = useNavigate();

    const navToHome = () => {navigate('/home');}
    const navToProducts = () => {navigate('/products');}
    const navToAboutUs = () => {navigate('/about-us');}
    const navToDownload = () => {navigate('/download');}
    const navToContactUs = () => {navigate('/contact-us');}

    return(
        <section className="bg-slate-900 w-full px-6 sm:px-12 xl:px-24 py-12">
            <div className="flex flex-col justify-center items-center gap-8">
                <div className='flex flex-col xl:flex-row justify-between items-start gap-8 w-full'>
                    <div>
                        <img src={logoAisikai} alt="logo-aisikai" className='w-1/2 xl:w-[12rem]' />
                    </div>
                    <div className='flex flex-col xl:flex-row gap-8 items-start'>
                        <button onClick={navToHome}><a href="" className="text-gray-500 font-medium text-md">Home</a></button>
                        <button onClick={navToProducts}><a href="" className="text-gray-500 font-medium text-md">Products</a></button>
                        <button onClick={navToAboutUs}><a href="" className="text-gray-500 font-medium text-md whitespace-nowrap">About Us</a></button>
                        <button onClick={navToDownload}><a href="" className="text-gray-500 font-medium text-md">Downloads</a></button>
                        <button onClick={navToContactUs}><a href="" className="text-gray-500 font-medium text-md whitespace-nowrap">Contact Us</a></button>
                    </div>
                </div>

                <div className='w-full border-[0.1rem] border-gray-500'></div>

                <div className='w-full flex flex-col xl:flex-row justify-between items-start gap-4'>
                    <p className='font-regular text-gray-500 text-sm leading-normal'>All rights reserved &copy JIANGSU AISIKAI ELECTRIC CO.,LTD. Support By Leadong</p>
                    <div className='flex flex-row gap-4'>
                        <FaLinkedinIn className="text-gray-500 size-4" />
                        <FaYoutube className="text-gray-500 size-4" />
                        <FaXTwitter className="text-gray-500 size-4" />
                        <FaFacebookF className="text-gray-500 size-4" />   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;