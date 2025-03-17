import Youtube from "react-youtube";
import { useNavigate } from "react-router-dom";

import ImageES from "../assets/images/enterprise-spirit.webp";
import ImageEV from "../assets/images/enterprise-vision.webp";
import ImageBP from "../assets/images/business-philosophy.webp";
import ImageDT from "../assets/images/development-tenet.webp";

const AboutUs = () => {

    const videoYoutube = "F4qOO5minVU";
    const opts = {
        playerVars: {autoplay: 0,},
    };

    const navigate = useNavigate();

    const navToCompanyProfile = () => {
        navigate('/company-profile');
    }   
    
    return(
        <section className="px-6">
            <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="font-bold text-2xl">About Us</h2>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Youtube videoId={videoYoutube} opts={opts} className=""/>
                        <h4 className="font-medium text-md text-gray-400">AISIKAI ELECTRIC INTRODUCTION</h4>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-6">
                        <p>AISIKAI is located in Yangzhou, a livable and tourist city famous for her beautiful natural scenery and rich cultural heritage.
                            Since established in 2007, AISIKAI has been committed to the manufacture, research, development and marketing of the high-quality electric switch. <br />
                            AISIKAI has obtained the UKAS ISO9001 Quality Management System and SGS Global Qualified Supplier Authentication. We are awarded as the National High-Tech Enterprise, 
                            Ten Major Brands in Industry and Contract-keeping and Trustworthy Enterprise. Our product lines cover level Ⅰ,Ⅱ,Ⅲ power distribution filed. All products have  Chinese 
                            Compulsory Certification CCC and European Certification CE. We have several patented technologies, and all products own proprietary intellectual property rights.
                        </p>
                        <button onClick={navToCompanyProfile} className="self-center px-6 py-4 bg-blue-500 text-white rounded-lg"><a href="">Read More</a></button>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <h3>Enterprise Spirit</h3>
                            </div>
                            <img src={ImageES} alt="image-enterprisespirit" />
                            <p className="bg-blue-500">Aware of Adversity in Prosperity, Broaden Sources and Reduce Expenditure</p>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <h3>Enterprise Vision</h3>
                            </div>
                            <img src={ImageEV} alt="image-enterprisevision" />
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <h3>Business Philosophy</h3>
                            </div>
                            <img src={ImageBP} alt="image-businessphilosophy" />
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                                <h3>Development Tenet</h3>
                            </div>
                            <img src={ImageDT} alt="image-developmenttennet" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs;