import { useState } from "react";
import emailjs from "emailjs-com";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";

import SA from '../assets/images/southafrica.webp';
import CD from '../assets/images/cambodia.webp';
import TK from '../assets/images/turkey.webp';
import RM from '../assets/images/romania.webp';
import VN from '../assets/images/vietnam.webp';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        verifyCode: "",
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.verifyCode !== "12345") {
            setFormStatus("Invalid verification code.");
            return;
        }

        emailjs
            .send(
                "service_nv9huug", // Replace with your EmailJS service ID
                "template_gkvywkj", // Replace with your EmailJS template ID
                {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                },
                "Rendiero" // Replace with your EmailJS user ID
            )
            .then(
                () => {
                    setFormStatus("Message sent successfully!");
                    setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        message: "",
                        verifyCode: "",
                    });
                },
                () => {
                    setFormStatus("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section>
            <Header />

            <div className="xl:px-0 py-12 flex flex-col justify-center items-center gap-12">
                <div className="bg-yellow-500 w-full flex flex-col xl:flex-row justify-between gap-12 xl:gap-2 xl:px-24">
                    <div className="bg-red-500 flex flex-col px-6 xl:p-0 w-fit gap-8 justify-center items-center xl:items-start">
                        <div className="flex flex-col justify-center items-center xl:items-start gap-2">
                            <h3 className="text-2xl xl:text-4xl font-bold mb-6">Feedback</h3>
                            <p className="font-medium text-lg text-center xl:text-left xl:max-w-lg">We serve you wholeheartedly, your satisfaction is our pursuit, 
                                and we look forward to working together with you to create a win-win situation.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-lg font-medium mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="verifyCode" className="block text-lg font-medium mb-2">
                                    Verify Code (Enter "12345")
                                </label>
                                <input
                                    type="text"
                                    id="verifyCode"
                                    name="verifyCode"
                                    value={formData.verifyCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-lg font-medium"
                            >
                                Submit
                            </button>
                            {formStatus && (
                                <p className="mt-4 text-center text-sm text-red-500">{formStatus}</p>
                            )}
                        </form>
                    </div>
                    

                    <div className="w-fit bg-blue-500 flex flex-col justify-center xl:justify-start items-center xl:items-start gap-8 px-6">
                        <div className="bg-red-500 flex flex-row items-center justify-center gap-4 w-">
                            <RiCustomerService2Fill className="text-primary size-16"/>
                            <div className="flex flex-col w-full">
                                <h3 className="font-bold text-2xl">Tel</h3>
                                <h3 className="font-medium text-xs w-fit">+62 8517 687 9999</h3>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <MdOutlineFax className="text-primary size-16"/>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-2xl">Fax</h3>
                                <h3 className="font-medium text-lg">+62 8517 687 9999</h3>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <MdOutlineEmail className="text-primary size-16"/>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-2xl">Email</h3>
                                <h3 className="xl:hidden font-medium text-lg">detapowergensetindonesia <br /> @gmail.com</h3>
                                <h3 className="hidden font-medium text-lg">detapowergensetindonesia@gmail.com</h3>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <MdOutlinePlace className="text-primary size-16"/>
                            <div className="flex flex-col">
                                <h3 className="font-bold text-2xl">Place</h3>
                                <h3 className="font-medium text-lg">East side of industiral zone, <br /> 
                                    Chenji Town, Yizheng City, <br /> Jiangsu Province, China</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center gap-4 px-6 xl:px-24">
                    <h3 className="text-2xl xl:text-4xl font-bold mb-6">Our Agency</h3>
                    <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={SA} alt="southafrica-flag" className="rounded-full size-26"/>
                            <h4 className="font-bold text-xl">SOUTH AFRICA</h4>
                            <p className="font-medium text-xl">oversea@aisikai.cc</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={CD} alt="southafrica-flag" className="rounded-full size-26"/>
                            <h4 className="font-bold text-xl">CAMBODIA</h4>
                            <p className="font-medium text-xl">oversea@aisikai.cc</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={TK} alt="southafrica-flag" className="rounded-full size-26"/>
                            <h4 className="font-bold text-xl">TURKIYE</h4>
                            <p className="font-medium text-xl">oversea@aisikai.cc</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={RM} alt="southafrica-flag" className="rounded-full size-26"/>
                            <h4 className="font-bold text-xl">ROMANIA</h4>
                            <p className="font-medium text-xl">oversea@aisikai.cc</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={VN} alt="southafrica-flag" className="rounded-full size-26"/>
                            <h4 className="font-bold text-xl">VIETNAM</h4>
                            <p className="font-medium text-xl">oversea@aisikai.cc</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.168792484928!2d119.18497831534274!3d32.28316998112452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b5a7a8b0b0b0b1%3A0x0!2zMzLCsDE3JzAwLjgiTiAxMTnCsDExJzA1LjkiRQ!5e0!3m2!1sen!2sid!4v1691234567890!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location">
                    </iframe>
                </div>

            </div>

            <div className="-mt-12">
                <Footer />
            </div>

        </section>
    );
};

export default ContactUs;