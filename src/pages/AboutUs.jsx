import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
    return(
        <section>
            <Header />

            <div className="flex flex-col px-6 xl:px-12">
                <div className="flex flex-col xl:flex-row">
                    <div className="flex flex-col">
                        <h3>About Aisikai</h3>
                        <p>AISIKAI, established in 2007, is dedicated to the high quality research, development, manufacturing, and sales of electrical products. Over the years, the company has proactively expanded its business into four major market segments: 
                            New Energy, Power Quality, Industrial Control, and Power Distribution.
                            With exceptional R&D strength, AISIKAI has earned recognition as a high-tech company, a company specializing in new technology, and a software company. The company holds certifications such as ISO9001, ISO14001, ISO45001, and consistently maintains a 3A grade credit enterprise.
                            Since its establishment, AISIKAI has consistently prioritized product quality. Guided by independent research and development, the company continually introduces innovations, securing numerous invention patents, utility model patents, and design patents. All product software is 100% copyright protected. By working closely with renowned universities and employing a high-calibre research team, AISIKAI is continuously improving its R & D and innovation capabilities.
                            Quality control is built into every stage of production at AISIKAI. The company has advanced R & D laboratories, product performance testing centers, storage workshops, precision machining workshops, assembly workshops, and complete set workshops. Each product undergoes thorough data calibration and functional testing after assembly to ensure it meets high standards before proceeding to the next production stage. Products are certified by China CCC, EU CE, international IEC, and recognized by Germany's TUV Rhineland certification agency and SGS to meet industry standards in various countries and regions. AISIKAI's high quality products, manufactured under strict production processes, quickly reach over 80 countries and regions and enjoy wide popularity.
                            With its professional research and development strength and outstanding quality, AISIKAI sets an industry model and constantly provides reliable solutions for customers.
                            AISIKAI, a brand trusted by users around the world.
                        </p>
                    </div>
                    <div></div>
                </div>

                <div className="flex flex-col xl:flex-row">
                    <div className="flex flex-col">
                        <img src="" alt="" />
                        <h4>Development Principles</h4>
                        <ul>
                            <li>Quality</li>
                            <li>Service</li>
                            <li>Reputation</li>
                            <li>Innovation</li>
                        </ul>
                        <div className="flex flex-col">
                        <img src="" alt="" />
                        <h4>Enterprise Vision</h4>
                        <ul>
                            <li>Make Contributions to Society</li>
                            <li> Care About Wellbeing of  Employees</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <img src="" alt="" />
                        <h4>Business Philosophy</h4>
                        <ul>
                            <li>Sincerity</li>
                            <li>Excellence</li>
                            <li>Perfection </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <img src="" alt="" />
                        <h4>Enterprise Spirit</h4>
                        <ul>
                            <li>Aware of Adversity in Prosperity</li>
                            <li>Broaden Sources and Reduce Expenditure</li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div>
                    <h2>Get in touch with us</h2>
                    <a href="">Contact Us</a>
                </div>
                
            </div>

            <Footer />
        </section>
    )
}

export default AboutUs;