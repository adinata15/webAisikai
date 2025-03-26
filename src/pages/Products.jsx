import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import Breadcrumb from '../components/Breadcrumb';

import { PiEnvelopeSimple } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";

// IMAGE FOR PRODUCT DETAILS
import ATS1 from '../assets/images/ats1.webp';
import ATS2 from '../assets/images/ats2.webp';
import ATS3 from '../assets/images/ats3.webp';
import ATS4 from '../assets/images/ats4.webp';
import ATS5 from '../assets/images/ats5.webp';
import ATS6 from '../assets/images/ats6.webp';
import ATS7 from '../assets/images/ats7.webp';
import ATS8 from '../assets/images/ats8.webp';
import IAC1 from '../assets/images/iac1.webp';
import IAC2 from '../assets/images/iac2.webp'; 
import HVVCB1 from '../assets/images/hvvcb1.webp';
import HVVCB2 from '../assets/images/hvvcb2.webp';
import UCB5 from '../assets/images/ucb5.webp';
import UCB6 from '../assets/images/ucb6.webp';
import UCB7 from '../assets/images/ucb7.webp';
import UCB8 from '../assets/images/ucb8.webp';
import UCB9 from '../assets/images/ucb9.webp';
import UCB10 from '../assets/images/ucb10.webp';    
import MCCB5 from '../assets/images/mccb5.webp';
import MCCB6 from '../assets/images/mccb6.webp';     
import MCCB7 from '../assets/images/mccb7.webp';
import MCCB8 from '../assets/images/mccb8.webp';
import MCCB9 from '../assets/images/mccb9.webp';
import MCCB10 from '../assets/images/mccb10.webp';
import MCCB11 from '../assets/images/mccb11.webp';
import MCCB12 from '../assets/images/mccb12.webp';
import MCCB13 from '../assets/images/mccb13.webp';
import MCCB14 from '../assets/images/mccb14.webp';
import MCCB15 from '../assets/images/mccb15.webp';
import MCCB16 from '../assets/images/mccb16.webp';
import MCCB17 from '../assets/images/mccb17.webp';
import MCB5 from '../assets/images/mcb5.webp';
import MCB6 from '../assets/images/mcb6.webp';
import MCB7 from '../assets/images/mcb7.webp';
import MCB8 from '../assets/images/mcb8.webp';
import MCB9 from '../assets/images/mcb9.webp';
import MCB10 from '../assets/images/mcb10.webp';
import MCB11 from '../assets/images/mcb11.webp';
import MCB12 from '../assets/images/mcb12.webp';
import LIS1 from '../assets/images/lis1.webp';
import OAUP1 from '../assets/images/oaup1.webp';
import SPD1 from '../assets/images/spd1.webp';
import SPD2 from '../assets/images/spd2.webp';
import SPD3 from '../assets/images/spd3.webp';
import IPM1 from '../assets/images/ipm1.webp';
import BC1 from '../assets/images/bc1.webp';

// FILES FOR DOWNLOAD BROCHURE
import ATS1File from '../assets/files/ASP-Introduction.pdf';
import ATS2File1 from '../assets/files/AISIKAI-SKT SERIES ATS USER MANUAL V2.9.pdf';
import ATS2File2 from '../assets/files/SKT ATS-24V1.1JBen-AISIKAI.pdf';
import ATS2File3 from '../assets/files/SKT SERIES ATS Product Selection Guide-24V1.0-AISIKAI.pdf';
import ATS3File1 from '../assets/files/SKT SERIES ATS Product Selection Guide-24V1.0-AISIKAI.pdf';
import ATS3File2 from '../assets/files/AISIKAI-SKT SERIES ATS USER MANUAL V2.9.pdf';
import ATS3File3 from '../assets/files/SKT ATS-24V1.1JBen-AISIKAI.pdf';
import ATS4File from '../assets/files/AISIKAI-ASKQ1 Selection guide 2023v1.0 (1).pdf';
import ATS6File from '../assets/files/SKQ1 Series Automatic Transfer Switch Catalogue-ATS24V1.0-AISIKAI (1).pdf'
import ATS7File from '../assets/files/ASKQ6 ATS Products Introduction-24V1.0-AISIKAI (1).pdf';
import ATS8File from '../assets/files/ASKQ8 High Current Type ATS Selection Manual-ATS24V1.0-AISIKAI.pdf';
import IAC1File from '../assets/files/2019-(ATSC) Intelligent ATS Controller Catalogue-V1.2_190904.pdf';
import HVVCB1File1 from '../assets/files/AISIKAI-ASKV5 SERIES ATS USER MANUAL.pdf'
import HVVCB1File2 from '../assets/files/ASKV5 Series VCB Catalogue-24V1.2- AISIKAI.pdf'
import UCBFile1 from '../assets/files/ASKW2 ACB英文资料-24V1.0JB-AISIKAI.pdf';
import UCB5File1 from '../assets/files/AISIKAI-ASKW1 SERIES USER MANUAL.pdf';
import UCB5File2 from '../assets/files/ASKW1 ACB英文资料-24V1.0JB-AISIKAI.pdf';
import UCB5File3 from '../assets/files/AISIKAI-ASKW Series  Catalogue_2023V1.0 (1).pdf';

// IMAGES FOR TECHNICAL PARAMETERS PRODUCT
import TPATS2 from '../assets/images/TPATS2.png';
import TPATS3 from '../assets/images/TPATS3.png';
import TPATS41 from '../assets/images/TPATS41.webp';
import TPATS42 from '../assets/images/TPATS42.webp';
import TPIAC1 from '../assets/images/TPIAC1.webp';
import TPIAC2 from '../assets/images/TPIAC2.webp';
import TPHVVCB1 from '../assets/images/TPHVVCB1.webp';
import TPHVVCB2 from '../assets/images/hvvcb2.webp';
import TPUCB1 from '../assets/images/TPUCB1.webp';
import TPUCB2 from '../assets/images/TDUCB2.webp';
import TPUCB3 from '../assets/images/TPUCB3.webp';
import TPUCB4 from '../assets/images/TPUCB4.webp';
import TPUCB5 from '../assets/images/TDUCB5.webp';
import TPUCB6 from '../assets/images/TPUCB6.webp';

// IMAGE FOR DESCRIPTION PRODUCT
import DIAC1 from '../assets/images/DIAC1.webp';
import DIAC2 from '../assets/images/DIAC2.webp';

// IMAGE FOR STRUCTURE OVERVIEW
import SOUCB5 from '../assets/images/SOUCB5.webp';
import SOUCB6 from '../assets/images/SOUCB6.webp';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("description");

    const categories = [
        { 
            id: 1, 
            name: "Automatic Transfer Switch", 
            products: [
                { 
                    name: "ASP Anti-Surge Module", 
                    image: ATS1,
                    subtitle: "At the moment of lightning release, the voltage is very high, the current is very large, and the energy release time is short. It is not enough to only use external lightning protection (lightning rod, etc.). lightning over-voltage will produce a great danger to electronic and electrical equipment. ASP anti-surge module has the function of lightning protection, which can effectively absorb the surge pulse from the power system to ensure the safe use of ATS in harsh environment and lightning areas, and reduce the probability of ATS being damaged by lightning in lightning environment",                                                                                                                                        
                    model: "", 
                    brand: "", 
                    description: <p>ASP anti-surge module can absorb surges and effectively  counteract the damage caused by surges to smart electric  appliances through the built-in surge protection device.
                            Surges occur with high frequency and irregularity, so it is  necessary to take continuous protection for smart appliances.  Anti-surge module can effectively block high, medium and  low spike voltage of different intensities without interruption.
                            For the instantaneous burst of ultra-high current, the slightest  flow into the sophisticated control circuit of ATS can have  fatal consequences. Anti-surge module can effectively cut off  the ultra-high current in nanosecond, providing a high level of  protection for intelligent appliances. This module can effectively protect the internal control board of ATS.
                        </p>,
                    technicalparameters: "",
                    faq: "", 
                    brochure: ATS1File 
                },
                { 
                    name: "SKT1 Series Class PC ATS", 
                    image: ATS2, 
                    model: "SKT1", 
                    brand: "Aisikai", 
                    description: <p>SKT series Automatic Transfer Switch(ATS) is the most advanced 3rd generation ATS.  
                            It's of PC Class (one-piece structure). SKT standard type can handle current from 20A to 3200A.  
                            It  reaches the highest AC-33A Use Class. <br />
                            <b>STANDARDS</b>
                            IEC60947-6-1 <br />
                            <b>FEATURES</b> <br />
                            Using LED indicators for working conditions
                            External replaceable fuses, easy for maintenance  
                            Built-in Microprogrammed Control Unit(MCU) can detect Voltage 
                            Copper bars are silver plated and have high purity 
                            One-piece structure on Load side
                            Three-sections design (I – 0 – II)
                            Zero Position for dual powers cutting-off
                            Pluggable wiring terminals
                            Mechanical Interlock & Electrical Interlock
                        </p>,
                    technicalparameters: TPATS2,
                    faq: <p>
                        <b>1. Your nameplate color is not we see in the market. Which color is the authentic？</b><br />
                        In the past, the ATS we sold to foreign and domestic markets use the classic AISIKAI BLUE . Recently, we use this new light blue for foreign market. Both are authentic.<br /><br />
                        <b>2. What is the meaning of  CK in our model? Why does some ATS have, some does not?</b><br />
                        CK means "Export". Because foreign trade transportation usually has a higher risk of damage than domestic transportation, our workers  take additional measures such as bubble wrap when shipping ATS with CK. Recently, we started using different nameplate colors to distinguish Export goods, and CK may not be used.<br /><br />
                        <b>3. What will this ATS operate when a power failure occurs?</b><br />
                        In general, ATS will transfer to the standby power when the utility power(main power) fails. Also, ATS will transfer to the utility power when utility power returns. In this way, ATS ensures you have the continuous power.<br /><br />
                        <b>4. What's the other control voltage besides 220V AC?</b><br />
                        AC110V, AC280V, DC24V are available. Please consult us for other voltages.<br /><br />
                        <b>5. Can I operate this ATS  manually?</b><br />
                        Yes, our ATS have both electric and manual mode(switchable using the black button on front panel), you can operate our ATS using handler.  <br /><br />
                        <b>6. What does accessories list include?</b><br />
                        Scews and bolts; A pair of safety protection boards; A handler for manual operation.<br /><br />
                        <b>10. Does this ATS must work with an ATS controller for automatic transfer?</b><br />
                        No, using this ATS alone is sufficient for the automatic transfer between 2 power sources. But with ATS controller, more functions can be achieved like delay before transfer, voltage detection, communication and etc. <br /><br />
                    </p>,
                    brochure: [ATS2File1, ATS2File2, ATS2File3] 
                },
                { 
                    name: "SKT2 Series Ultra-thin Class PC ATS", 
                    image: ATS3, 
                    model: "SKT2", 
                    brand: "Aisikai", 
                    description: <p> SKT series automatic transfer switch(ATS) is the most advanced 3rd generation ATS.  
                        It's in the one-piece structure and  PC Class. SKT2 series is the most compact type that is just the of 50% size of the standard SKT.
                        <br />
                        <strong>STANDARDS</strong>
                        <br />
                        IEC60947-6-1 <br />
                        GB/T14048.11 <br />
                        <b>FEATURES</b>
                        Compact Volume,  Saving Space <br />
                        External Replaceable Fuses, Easy For Maintenance <br />   
                        Rear Copper Bars Are Made Longer,  Convenient For Wiring Cables <br />
                        Silver Plated High Purity Copper Bar <br />
                        Brige Connect Structure on Load Side <br />
                        Three-Sections Design (I – 0 – II),  Zero Position For Dual Powers Off <br />
                        Pluggable Wiring Terminals <br />
                        Mechanical Interlock & Electrical Interlock <br />
                    </p>,
                    technicalparameters: TPATS3,
                    faq: <p>
                        <b>1. Your nameplate color is not we see in the market. Which color is the authentic？</b><br />
                        In the past, the ATS we sold to foreign and domestic markets use the classic AISIKAI BLUE . Recently, we use this new light blue for foreign market. Both are authentic.   
                        <b>2. What is the meaning of  CK in our model? Why does some ATS have, some does not?</b><br />
                        CK means "Export". Because foreign trade transportation usually has a higher risk of damage than domestic transportation, our workers  take additional measures such as bubble wrap when shipping ATS with CK. Recently, we started using different nameplate colors to distinguish Export goods, and CK may not be used. <br /> 
                        <b>3. What will this ATS operate when a power failure occurs?</b><br />
                        In general, ATS will transfer to the standby power when the utility power(main power) fails. Also, ATS will transfer to the utility power when utility power returns. In this way, ATS ensures you have the continuous power. <br />
                        <b>4. What's the maximum current can SKT2  handle ?</b><br />
                        100A. <br />
                        <b>5. What's the other control voltage besides 220V AC?</b><br />
                        AC110V, AC280V, DC24V are available. Please consult us for other voltages.<br />
                        <b>6. Can I operate this ATS  manually?</b><br />
                        Yes, our ATS have both electric and manual mode(switchable using the black button on front panel), you can operate our ATS using handler.<br />
                        <b>7. What does accessories list include?</b><br />
                        Scews and bolts; A pair of safety protection boards; A handler for manual operation.<br />
                        <b>8. Does this ATS must work with an ATS controller for automatic transfer?</b><br />
                        No, using this ATS alone is sufficient for the automatic transfer between 2 power sources. But with ATS controller, more functions can be achieved like delay before transfer, voltage detection, communication and etc.<br />
                    </p>, 
                    brochure: [ATS3File1, ATS3File2, ATS3File3] 
                },
                { 
                    name: "ASKQ1 Series Household ATS 16A-63A", 
                    image: ATS4, 
                    model: "ASKQ", 
                    brand: "Aisikai", 
                    description: <p>
                        ASKQ series household automatic transfer switch is PC Class non-frequently operable electrical transfer switch.
                        It has 3 working modes:Automatic, Electric(external control) and Emergency Manual. ASKQ is suitable to be used 
                        in the 50/60Hz low voltage AC power distribution systems for the reliable transfer between two power supplies.
                        <br /><br /> 
                        <b>FEATURES</b> <br />
                        - Reasonalbe structure, compact volume, beautiful appearance. <br />
                        - Adopt excitation type electromagnet drive mechanism, which is extrmely fast in transferring. <br />
                        - The 6A-63A switch is suitable for home use, which meets the requiremnets of the level-3 power distribution system. <br />
                        - Mount on standard DIN rail. Quick and easy installation.
                    </p>,
                    technicalparameters: {TPATS41, TPATS42},
                    faq: "",
                    brochure: ATS4File 
                },
                { 
                    name: "SKQ1 MCCB Type Class CB ATS", 
                    image: ATS5,
                    subtitle: <p>The SKQ1 series dual power automatic transfer switch is a second-generation ATS product, 
                        classified as CB level. It is an AC-33B electrical transfer switch designed for infrequent operation, 
                        suitable for low-voltage AC power distribution systems with a frequency of 50/60Hz. It features three 
                        working modes: automatic (Type A), electric (Type B), and emergency manual, ensuring reliable transfer 
                        between two power sources.</p>, 
                    model: "SKQ1", 
                    brand: "Aisikai", 
                    description: <p>
                        The SKQ1 series dual power automatic transfer switch is a second-generation ATS product, classified as CB level. 
                        It is an AC-33B electrical transfer switch designed for infrequent operation, suitable for low-voltage AC power 
                        distribution systems with a frequency of 50/60Hz. It features three working modes: automatic (Type A), electric 
                        (Type B), and emergency manual, ensuring reliable transfer between two power sources.
                    </p>,
                    technicalparameters: "",
                    faq: "", 
                    brochure: "" 
                },
                { 
                    name: "SKQ1 MCB Type Class CB ATS", 
                    image: ATS6, 
                    model: "SKQ1", 
                    brand: "Aisikai", 
                    description: <p>
                        SKQ1 series dual power automatic transfer switch(ATS) is the 2nd generation ATS.  It's CB class and its usage 
                        category is AC-33B non-frequently operation electrical transfer switch. It has 3 working modes:Automatic, 
                        Electric(external control) and Emergency Manual. SKQ1 is suitable to be used in the 50/60Hz low voltage AC power 
                        distribution systems for the reliable transfer between two power supplies. <br /><br />
                        <b>FEATURES</b><br />
                        - Have Zero-position
                        - Reasonalbe structure, compact volume, beautiful appearance.
                        - Protective cover, much safer and more reliable
                        - Control part is designed for easy maintenance 
                        - Complete protection functions, provided with protection of short-circuit, overload and etc.
                        - Noise-free operation, energy saving and consumption reducing, convenient in installation, easy in operation, reliable and stable in performance.
                        - The interior adopts D type miniature circuit breaker.
                    </p>,
                    technicalparamters: "",
                    faq: "", 
                    brochure: ATS6File 
                },
                { 
                    name: "ASKQ6 Series Solenoid Type Automatic Transfer Switch", 
                    image: ATS7, 
                    model: "ASKQ6", 
                    brand: "Aisikai", 
                    description: <p>
                        ASKQ6 Automatic Transfer Switch is suitable for AC below 415V, rated frequency 50HZ, DC 250V and below. 
                        All specifications are available in 3 poles and 4 poles. 3 poles products are available below 400A. 
                        This product is mainly used for the primary load specified by the state, and is widely used in important 
                        areas of fire fighting, post and telecommunications, hospitals, hotels, high-rise buildings, industrail 
                        assembly lines, and TV stations that need continuous power supply. The main and backup power supply can be 
                        grid and grid, automatic start generator set, battery set, etc.
                    </p>,
                    technicalparameters: "",
                    faq: "", 
                    brochure: ATS7File 
                },
                { 
                    name: "ASKQ8 High Current Automatic Transfer Switch 3200~6300A", 
                    image: ATS8, 
                    model: "ASKQ8", 
                    brand: "Aisikai", 
                    description: <p>
                        ASKQ8 series dual power automatic transfer switch is PC Class non-frequently operable electrical transfer switch.
                        ASKQ8 High Current Automatic Transfer Switch is suitable for the 3200A~6300A AC50/60Hz low voltage AC power 
                        distribution systems for reliable transfer between two power supplies. 3200A-6300A switch is suitable in the 
                        industrial places for large current switching and meets the Level Ⅰ power distribution requirements.
                    </p>,
                    technicalparameters: "",
                    faq: "", 
                    brochure: ATS8File 
                }
            ] 
        },
        { 
            id: 2, 
            name: "Intelligent ATS Controller", 
            products: [
                { 
                    name: "SKR2-A LED ATS Controller", 
                    image: IAC1, 
                    model: "SKR2-A", 
                    brand: "Aisikai", 
                    description: <p>
                        <b>OVERVIEW</b> <br />
                        SKR2-A ATS controller is designed to work with automatic transfer switch. It's based on the micro-processor 
                        techonology. Controller can accurately detect the three/single phase(s) voltage of the dual power supplies, 
                        make accurate judgement of voltage anomalies (power loss, over voltage, under voltage, phase missing, over 
                        frequency, under frequency), and control the switching delay. It's suitable for the ATS with one breaking 
                        position or no breaking position. <br /><br /> Controllers have the function of sending generator start signal after delay 
                        when power 1# becomes abnormal. Using RS485 communication interface, controllers realize functions of remote 
                        measurement, remote communication and remote control. <br /><br />
                        <b>PANEL DESCRIPTION</b> <br />
                        <img src={DIAC1} alt="paneldescription-image" />
                    </p>, 
                    technicalparameters: TPIAC1,
                    faq: "",
                    brochure: IAC1File 
                },
                { 
                    name: "SKR2-B LCD ATS Controller", 
                    image: IAC2, 
                    model: "SKR2-B", 
                    brand: "Aisikai", 
                    description: <p>
                        <b>OVERVIEW</b><br />
                        SKR2-B ATS controller is the intelligent dual-power switch modual with programmable function, automatic measurement, 
                        LCD display and digital funtions. <br /> <br />
                        SKR2-B is digitalization, intellectualization and networking integrated. With the controller, the automation in 
                        measurement and control process can be realized, while human errors can be reduces. <br /> <br />
                        Controller is based on the micro-processor techonology. It can accurately detect the three/single phase(s) voltage 
                        of the dual power supplies, make accurate judgement of voltage anomalies (power loss, over voltage, under voltage, 
                        phase missing, over frequency, under frequency), and output the passive switching values. <br /> <br />
                        The application of this controller on a variety of ATS (load automatic switch system) is fully considered. 
                        The controller can be directly used on specialized ATS, contactors made ATS, air circuit breakers made ATS and etc. <br /> <br />
                        It's widely used in the electrial equipment, automatic control and debug systems in the fields of power, post, 
                        petroleum, coal, metallurgy, railway, municipal, intelligent building. <br /> <br />
                        <b>PANEL DESCRIPTION</b> <br />
                        <img src={DIAC2} alt="paneldescription-image" />
                    </p>, 
                    technicalparameters: TPIAC2,
                    faq: "",
                    brochure: IAC1File 
                }
            ] 
        },
        { 
            id: 3, 
            name: "High Voltage Vacuum Circuit Breaker", 
            products: [
                { 
                    name: "High Voltage Embedded Pole Type Vacuum Circuit Breaker VCB", 
                    image: HVVCB1, 
                    model: "ASKV5-G", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKV5G series solid-sealed embedded pole indoor high-voltage vacuum circuit breaker (VCB) is characterized 
                        by the embedded pole form of the main conductive circuit using solid-sealed insulation. This is achieved by 
                        special embedding technology, which pours the vacuum arc-extinguishing chamber and conductive components with 
                        ultra-low resistance values into epoxy resin to achieve solid insulation of the main conductive circuit. 
                        The operating mechanism is a new type of spring operating mechanism. <br /><br />
                        The primary conductive circuit of the circuit breaker adopts solid-sealed insulation technology for the 
                        solid-sealed embedded pole, which seals the vacuum arc-extinguishing chamber and other components of the primary 
                        conductive circuit directly in special epoxy resin material through advanced automatic pressure gelation APG process,
                        forming a main conductive circuit module. <br /><br />
                        The installation end of the sealed pole is designed with inner and outer double skirt edges. The pole has the 
                        characteristics of large creepage distance, high mechanical strength, high component precision, fewer components, 
                        no need for secondary adjustment, and fewer overlapping faces. <br /><br />
                        The electric field distribution of the pole is uniform, avoiding the destruction of organic insulation due to 
                        concentrated local electric fields. At the same time, using this structural design greatly simplifies the assembly 
                        process of the primary conductive circuit, completely avoids the problem of loosening of connecting bolts of the 
                        main conductive circuit due to vibration during operation, ensures the high reliability of the electrical 
                        connection of the main conductive circuit, and makes it possible for the primary conductive circuit of the circuit 
                        breaker to achieve maintenance-free operation.
                    </p>,
                    technicalparameters: TPHVVCB1,
                    faq: "", 
                    brochure: [HVVCB1File1, HVVCB1File2] 
                },
                { 
                    name: "High Voltage Insulating Cylinder Type Vacuum Circuit Breaker VCB", 
                    image: HVVCB2, 
                    model: "ASKV5-T", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKV5 series fixed indoor high-voltage AC vacuum circuit breaker (VCB) arranges the vacuum extinguishing chamber of the primary main 
                        circuit in a closed insulating cylinder, which is made of epoxy resin material with reliable mechanical and electrical performance and is 
                        formed using advanced APG technology. <br /><br />
                        The insulating cylinder not only provides installation support but also serves as inter-phase and ground insulation. <br /><br />
                        The design of the insulating cylinder fully considers the requirements of national standards and harsh operating conditions, not only 
                        preventing the vacuum extinguishing chamber from being affected by external environmental factors, preventing dust and foreign objects 
                        from entering the main circuit, but also ensuring that even in wet, hot, and severely polluted environments, it can exhibit a high resistance 
                        to voltage effects.
                    </p>,
                    technicalparameters: TPHVVCB2,
                    faq: "",  
                    brochure: [HVVCB1File1, HVVCB1File2] 
                }
            ] 
        },
        { 
            id: 4, 
            name: "Universal Circuit Breaker", 
            products: [
                { 
                    name: "ASKW2 Series Fixed Type Intelligent Universal Circuit Breaker", 
                    image: UCB5, 
                    model: "ASKW2", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKW2 series universal low-voltage circuit breaker (ACB) is suitable for distribution networks with AC 50Hz, rated voltage up to 400V (690V) 
                        and below, rated current of 200A to 1600A. It is used to distribute electrical energy and protect lines and power equipment from the hazards of 
                        overload, undervoltage, short circuit, single-phase grounding, etc. <br /><br />
                        The circuit breaker has intelligent protection functions, precise selective protection, and can improve power supply reliability, avoiding 
                        unnecessary power outages. It also has an open communication interface for remote control to meet the requirements of control centers and 
                        automation systems. <br /><br />
                        The circuit breaker complies with standards such as GB14048.2 "Low-voltage switchgear and controlgear - Low-voltage circuit breakers" and 
                        IEC947-2 "Low-voltage switchgear and controlgear - Circuit breakers".
                    </p>,
                    technicalparameters: TPUCB1,
                    faq: "", 
                    brochure: UCBFile1 
                },
                { 
                    name: "ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB6, 
                    model: "ASKW2", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKW2 series universal low-voltage circuit breaker (ACB) is suitable for distribution networks with AC 50Hz, rated voltage up to 400V (690V) 
                        and below, rated current of 200A to 1600A. It is used to distribute electrical energy and protect lines and power equipment from the hazards of 
                        overload, undervoltage, short circuit, single-phase grounding, etc. <br /><br />
                        The circuit breaker has intelligent protection functions, precise selective protection, and can improve power supply reliability, avoiding 
                        unnecessary power outages. It also has an open communication interface for remote control to meet the requirements of control centers and 
                        automation systems. <br /><br />
                        The circuit breaker complies with standards such as GB14048.2 "Low-voltage switchgear and controlgear - Low-voltage circuit breakers" and 
                        IEC947-2 "Low-voltage switchgear and controlgear - Circuit breakers".
                    </p>, 
                    technicalparameters: TPUCB2,
                    faq: "", 
                    brochure: UCBFile1 
                },
                { 
                    name: "ASKW3 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB7, 
                    model: "ASKW3", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKW3 series intelligent universal circuit breaker is suitable for isolation; suitable for use at a frequency of 50/60Hz, rated operating 
                        voltage AC380V/400V/415V/440V/480V/660V/690V/800V/1000V/1140V, and rated current of 4000A and below in distribution networks, used for 
                        distributing electrical energy and protecting lines and power equipment from the harmful effects of overloads, undervoltage, short circuits, 
                        grounding faults, etc. <br /><br />
                        The circuit breaker uses a precise protection and multi-functional intelligent controller, with complete protection functions, especially 
                        suitable for distribution networks that require improving power supply reliability and avoiding unnecessary power outages. The H-type 
                        intelligent controller has a communication interface, making it easy to connect to the field bus, enabling the implementation of "telemetry", 
                        "remote adjustment", "remote control", and "remote signaling" four remote functions, meeting the requirements of control automation. 
                        Configuring a residual current transformer and the corresponding intelligent controller can achieve leakage protection. <br /><br />
                        Circuit breakers with a rated current of 1000A and above can also be used in AC 50Hz, 400V networks as overload, short circuit, undervoltage, 
                        and grounding fault protection for motors. Under normal conditions, they can be used for infrequent motor starting purposes.
                    </p>, 
                    technicalparameters: TPUCB3,
                    faq: "", 
                    brochure: "" 
                },
                { 
                    name: "ASKW3 Series Fixed Type Intelligent Universal Circuit Breaker", 
                    image: UCB8, 
                    model: "ASKW3", 
                    brand: "Aisikai", 
                    description: <p>
                        The ASKW3 series intelligent universal circuit breaker is suitable for isolation; suitable for use at a frequency of 50/60Hz, rated operating 
                        voltage AC380V/400V/415V/440V/480V/660V/690V/800V/1000V/1140V, and rated current of 4000A and below in distribution networks, used for 
                        distributing electrical energy and protecting lines and power equipment from the harmful effects of overloads, undervoltage, short circuits, 
                        grounding faults, etc. <br /><br />
                        The circuit breaker uses a precise protection and multi-functional intelligent controller, with complete protection functions, especially 
                        suitable for distribution networks that require improving power supply reliability and avoiding unnecessary power outages. The H-type 
                        intelligent controller has a communication interface, making it easy to connect to the field bus, enabling the implementation of "telemetry", 
                        "remote adjustment", "remote control", and "remote signaling" four remote functions, meeting the requirements of control automation. 
                        Configuring a residual current transformer and the corresponding intelligent controller can achieve leakage protection. <br /><br />    
                        Circuit breakers with a rated current of 1000A and above can also be used in AC 50Hz, 400V networks as overload, short circuit, undervoltage, 
                        and grounding fault protection for motors. Under normal conditions, they can be used for infrequent motor starting purposes.
                    </p>, 
                    technicalparameters: TPUCB4,
                    faq: "", 
                    brochure: "" 
                },
                { 
                    name: "ASKW1 Series Fixed Type Intelligent Universal Circuit Breaker", 
                    image: UCB9, 
                    model: "ASKW1", 
                    brand: "Aisikai", 
                    description: <p>
                        <b>PRODUCT OVERVIEW</b> <br />
                        ASKW1 series intelligent type universal circuit breaker is suitable for AC50Hz/60Hz, rated voltage 400V, 690V, rated current 630A-6300A of the 
                        distribution network used to distribute power and protect circuits and power supply equipment against overload, under-voltage, short-circuit, 
                        single phase earth fault. <br /><br />

                        Classified by the structure design , there are Fixed type and Drawer type. <br />
                        For Fixed type, the ACB main body is fixed in the frame and can't be drawn out. <br />
                        The "Fixed" is denoted by the letter "G" in product model code, and  "G"  can be omitted. <br /><br />

                        Circuit breaker has intelligent protection and isolation function. Accurate selective protection, improve the reliability of power supply, 
                        avoid unnecessary power outages. Circuit breaker has open communication interface for four-remote, meeting the requirements of centralized 
                        control of automation systems.
                    </p>,
                    technicalparameters: TPUCB5,
                    faq: "",  
                    structureoverview: SOUCB5,
                    brochure: [UCB5File1, UCB5File2, UCB5File3] 
                },
                { 
                    name: "ASKW1 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB10, 
                    model: "ASKW1", 
                    brand: "Aisikai", 
                    description: <p>
                        <b>PRODUCT OVERVIEW</b> <br />
                        ASKW1 series intelligent type universal air circuit breaker is suitable for AC50Hz/60Hz, rated voltage 400V, 690V, rated current 630A-6300A 
                        of the distribution network used to distribute power and protect circuits and power supply equipment against overload, under-voltage, 
                        short-circuit, single phase earth fault. <br /><br />
                        Classified by the structure design , there are Fixed type and Drawout type. <br />
                        For Drawout type, the ACB main body can be drawn out from the frame, which is convenient for installation and maintenance. <br />
                        The letter "C" in product model code denotes "Drawer" type. <br /><br />
                        Circuit breaker has intelligent protection and isolation function. Accurate selective protection, improve the reliability of power supply, 
                        avoid unnecessary power outages. Circuit breaker has open communication interface for four-remote, meeting the requirements of centralized 
                        control of automation systems.
                    </p>,
                    technicalparameters: TPUCB6,
                    faq: "",
                    structureoverview: SOUCB6,  
                    brochure: [UCB5File1, UCB5File2, UCB5File3] 
                }
            ] 
        },
        { 
            id: 5, 
            name: "Molded Case Circuit Breaker", 
            products: [
                { 
                    name: "ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker", 
                    image: MCCB5, 
                    model: "ASKM2E-Y", 
                    brand: "Aisikai", 
                    description: "An intelligent electronic molded case circuit breaker.", 
                    brochure: "/brochures/askm2e-y-mccb.pdf" 
                },
                { 
                    name: "ASKM2E Series Intelligent Electronic Molded Case Circuit Breaker", 
                    image: MCCB6, 
                    model: "ASKM2E", 
                    brand: "Aisikai", 
                    description: "An intelligent electronic molded case circuit breaker.", 
                    brochure: "/brochures/askm2e-mccb.pdf" 
                },
                { 
                    name: "ASKM1 Series Normal Protection Molded Case Circuit Breaker", 
                    image: MCCB7, 
                    model: "ASKM1", 
                    brand: "Aisikai", 
                    description: "A normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm1-mccb.pdf" 
                },
                { 
                    name: "ASKM1L Series Leakage Protection Molded Case Circuit Breaker", 
                    image: MCCB8, 
                    model: "ASKM1L", 
                    brand: "Aisikai", 
                    description: "A leakage protection molded case circuit breaker.", 
                    brochure: "/brochures/askm1l-mccb.pdf" 
                },
                { 
                    name: "ASKM3EL Series LCD Electronic Leakage Protection MCCB", 
                    image: MCCB9, 
                    model: "ASKM3EL", 
                    brand: "Aisikai", 
                    description: "An LCD electronic leakage protection molded case circuit breaker.", 
                    brochure: "/brochures/askm3el-mccb.pdf" 
                },
                { 
                    name: "ASKM3E-Y Series LCD Electronic Normal Protection MCCB", 
                    image: MCCB10, 
                    model: "ASKM3E-Y", 
                    brand: "Aisikai", 
                    description: "An LCD electronic normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm3e-y-mccb.pdf" 
                },
                { 
                    name: "ASKM3E Series Electronic Normal Protection MCCB", 
                    image: MCCB11, 
                    model: "ASKM3E", 
                    brand: "Aisikai", 
                    description: "An electronic normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm3e-mccb.pdf" 
                },
                { 
                    name: "ASKM3L Series Thermomagnetic Leakage Protection MCCB", 
                    image: MCCB12, 
                    model: "ASKM3L", 
                    brand: "Aisikai", 
                    description: "A thermomagnetic leakage protection molded case circuit breaker.", 
                    brochure: "/brochures/askm3l-mccb.pdf" 
                },
                { 
                    name: "ASKM3 Series Thermomagnetic Normal Protection MCCB", 
                    image: MCCB13, 
                    model: "ASKM3", 
                    brand: "Aisikai", 
                    description: "A thermomagnetic normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm3-mccb.pdf" 
                },
                { 
                    name: "ASKM1E Series Electronic Molded Case Circuit Breaker", 
                    image: MCCB14, 
                    model: "ASKM1E", 
                    brand: "Aisikai", 
                    description: "An electronic molded case circuit breaker.", 
                    brochure: "/brochures/askm1e-mccb.pdf" 
                },
                { 
                    name: "ASKM2L Series Leakage Protection Molded Case Circuit Breaker", 
                    image: MCCB15, 
                    model: "ASKM2L", 
                    brand: "Aisikai", 
                    description: "A leakage protection molded case circuit breaker.", 
                    brochure: "/brochures/askm2l-mccb.pdf" 
                },
                { 
                    name: "ASKM2 Series Normal Protection Molded Case Circuit Breaker", 
                    image: MCCB16, 
                    model: "ASKM2", 
                    brand: "Aisikai", 
                    description: "A normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm2-mccb.pdf" 
                },
                { 
                    name: "ASKM2RT Series Thermal-magnetic Adjustable Normal Protection Molded", 
                    image: MCCB17, 
                    model: "ASKM2RT", 
                    brand: "Aisikai", 
                    description: "A thermal-magnetic adjustable normal protection molded case circuit breaker.", 
                    brochure: "/brochures/askm2rt-mccb.pdf" 
                }
            ] 
        },
        { 
            id: 6, 
            name: "Miniature Circuit Breaker", 
            products: [
                { 
                    name: "ASKB6L Series Leakage Protection MCB", 
                    image: MCB5, 
                    model: "ASKB6L", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb6l-mcb.pdf" 
                },
                { 
                    name: "ASKB6 Series Leakage Protection MCB", 
                    image: MCB6, 
                    model: "ASKB6", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb6-mcb.pdf" 
                },
                { 
                    name: "ASKB5L Series Leakage Protection MCB", 
                    image: MCB7, 
                    model: "ASKB5L", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb5l-mcb.pdf" 
                },
                { 
                    name: "ASKB5 Series Leakage Protection MCB", 
                    image: MCB8, 
                    model: "ASKB5", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb5-mcb.pdf" 
                },
                { 
                    name: "ASKB2L Series Leakage Protection MCB", 
                    image: MCB9, 
                    model: "ASKB2L", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb2l-mcb.pdf" 
                },
                { 
                    name: "ASKB2 Series Normal Protection MCB", 
                    image: MCB10, 
                    model: "ASKB2", 
                    brand: "Aisikai", 
                    description: "A normal protection miniature circuit breaker.", 
                    brochure: "/brochures/askb2-mcb.pdf" 
                },
                { 
                    name: "ASKB1L Series Leakage Protection MCB", 
                    image: MCB11, 
                    model: "ASKB1L", 
                    brand: "Aisikai", 
                    description: "A leakage protection miniature circuit breaker.", 
                    brochure: "/brochures/askb1l-mcb.pdf" 
                },
                { 
                    name: "ASKB1 Series Normal Protection MCB", 
                    image: MCB12, 
                    model: "ASKB1", 
                    brand: "Aisikai", 
                    description: "A normal protection miniature circuit breaker.", 
                    brochure: "/brochures/askb1-mcb.pdf" 
                }
            ] 
        },
        { 
            id: 7, 
            name: "Load Isolation Switch", 
            products: [
                { 
                    name: "SKG1 Load Isolation Switch", 
                    image: LIS1, 
                    model: "SKG1", 
                    brand: "Aisikai", 
                    description: "A load isolation switch for electrical systems.", 
                    brochure: "/brochures/skg1-load-isolation-switch.pdf" 
                }
            ] 
        },
        { 
            id: 8, 
            name: "Overvoltage and Undervoltage Protector", 
            products: [
                { 
                    name: "Overvoltage and Undervoltage Protector", 
                    image: OAUP1, 
                    model: "OAUP", 
                    brand: "Aisikai", 
                    description: "A protector for overvoltage and undervoltage conditions.", 
                    brochure: "/brochures/overvoltage-undervoltage-protector.pdf" 
                }
            ] 
        },
        { 
            id: 9, 
            name: "Surge Protective Device", 
            products: [
                { 
                    name: "SKD3 Series Surge Protective Device", 
                    image: SPD1, 
                    model: "SKD3", 
                    brand: "Aisikai", 
                    description: "A surge protective device for electrical systems.", 
                    brochure: "/brochures/skd3-surge-protective-device.pdf" 
                },
                { 
                    name: "SKD2 Series Surge Protective Device", 
                    image: SPD2, 
                    model: "SKD2", 
                    brand: "Aisikai", 
                    description: "A surge protective device for electrical systems.", 
                    brochure: "/brochures/skd2-surge-protective-device.pdf" 
                },
                { 
                    name: "SKD1 Series Surge Protective Device", 
                    image: SPD3, 
                    model: "SKD1", 
                    brand: "Aisikai", 
                    description: "A surge protective device for electrical systems.", 
                    brochure: "/brochures/skd1-surge-protective-device.pdf" 
                }
            ] 
        },
        { 
            id: 10, 
            name: "Intelligent Power Meter", 
            products: [
                { 
                    name: "Intelligent Power Meter", 
                    image: IPM1, 
                    model: "IPM", 
                    brand: "Aisikai", 
                    description: "An intelligent power meter for monitoring electrical systems.", 
                    brochure: "/brochures/intelligent-power-meter.pdf" 
                }
            ] 
        },
        { 
            id: 11, 
            name: "Battery Charger", 
            products: [
                { 
                    name: "Intelligent Battery Charger", 
                    image: BC1, 
                    model: "IBC", 
                    brand: "Aisikai", 
                    description: "An intelligent battery charger for various applications.", 
                    brochure: "/brochures/intelligent-battery-charger.pdf" 
                }
            ] 
        }
    ];

    useEffect(() => {
        // Set the default category to "Automatic Transfer Switch" (id 1)
        const defaultCategory = categories.find(category => category.id === 1);
        setActiveCategory(defaultCategory);
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col">
                <Header />
                {/* <Breadcrumb /> */}

                <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 px-6 xl:px-16 py-12">
                    {/* Left List Menu */}
                    <div className="w-full xl:w-[25rem] bg-gray-200 p-4 rounded-lg items-center flex flex-col justify-center">
                        <h2 className="text-lg font-bold mb-4">Product Category</h2>
                        <ul className="w-full flex flex-col gap-2">
                            {categories.map((category) => (
                                <li
                                    key={category.id}
                                    className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${
                                        activeCategory?.id === category.id ? "bg-primary text-white" : "bg-white text-gray-700"
                                    }`}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setSelectedProduct(null); // Clear selected product to show the product list
                                    }}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Product Display */}
                    <div className="w-full bg-white p-4 rounded-lg flex flex-col">
                        {selectedProduct ? (
                            <div className='flex flex-col gap-4'>
                                {/* Product Details */}
                                <div className="w-full bg-white px-6 rounded-lg shadow flex flex-col xl:flex-row gap-6 justify-center items-center">
                                    <div className='size-1/3 p-24'>
                                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    <div className="w-1/2 flex flex-col justify-start">
                                        <h1 className="text-2xl font-bold mb-4">{selectedProduct.name}</h1>
                                        <p className='text-md mb-4'> {selectedProduct.subtitle || "N/A"} </p>

                                        <p className="text-md mb-4"><strong>Model:</strong> {selectedProduct.model || "N/A"}</p>
                                        <p className="text-md mb-4"><strong>Brand:</strong> {selectedProduct.brand || "N/A"}</p>
                                    </div>
                                </div>

                                {/* Tabs for Description and Brochure */}
                                <div className="w-full bg-gray-100 p-6 rounded-lg shadow">
                                    <div className="flex border-b border-gray-300 mb-4">
                                        <button
                                            className={`px-4 py-2 font-medium ${activeTab === "description" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("description")}>
                                                Description
                                        </button>

                                        <button
                                            className={`px-4 py-2 font-medium ${activeTab === "technicalparameters" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("technicalparameters")}>
                                                Technical Parameters
                                        </button>

                                        <button
                                            className={`px-4 py-2 font-medium ${activeTab === "structureoverview" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("structureoverview")}>
                                                Structure Overview
                                        </button>

                                        <button
                                            className={`px-4 py-2 font-medium ${activeTab === "faq" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("faq")}>
                                                FAQ
                                        </button>

                                        <button
                                            className={`px-4 py-2 font-medium ${activeTab === "brochure" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("brochure")}>
                                                Brochure
                                        </button>
                                    </div>

                                    {/* Tab Content */}
                                    {activeTab === "description" && (
                                        <div className="h-auto text-gray-700">
                                            <p>{selectedProduct.description || "No description available."}</p>
                                        </div>
                                    )}
                                
                                    {activeTab === "technicalparameters" && (
                                        <div className="h-auto text-gray-700">
                                            <img src={selectedProduct.technicalparameters} alt="technical-parameters-image" className='w-full'/>
                                        </div>
                                    )}  

                                    {activeTab === "structureoverview" && (
                                        <div className="h-auto text-gray-700">
                                            <img src={selectedProduct.structureoverview} alt="technical-parameters-image" className='w-full'/>
                                        </div>
                                    )} 
                                    
                                    {activeTab === "faq" && (
                                        <div className="h-auto text-gray-700">
                                            <p>{selectedProduct.faq || "No FAQ Available"}</p>
                                        </div>
                                    )}

                                    {activeTab === "brochure" && (
                                        <div className="flex flex-col gap-4">
                                            {Array.isArray(selectedProduct.brochure) ? (
                                                selectedProduct.brochure.map((brochure, index) => (
                                                    <div key={index} className="flex flex-row items-center gap-2">
                                                        <FaFilePdf />
                                                        <a
                                                            href={brochure}
                                                            className="text-primary font-medium underline"
                                                            download
                                                        >
                                                            {brochure.split('/').pop() || `Brochure ${index + 1}`}
                                                        </a>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="flex flex-row items-center gap-2">
                                                    <FaFilePdf />
                                                    <a
                                                        href={selectedProduct.brochure || "#"}
                                                        className="text-primary font-medium underline"
                                                        download
                                                    >
                                                        {selectedProduct.brochure?.split('/').pop() || "Download Brochure"}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Section for other products in the same category */}
                                {activeCategory && (
                                    <div className="w-full bg-white p-6 rounded-lg shadow mt-8">
                                        <h2 className="text-lg font-bold mb-4">Other Products in {activeCategory.name}</h2>
                                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {activeCategory.products
                                                .filter((product) => product.name !== selectedProduct?.name) // Exclude the current product
                                                .map((product, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow cursor-pointer"
                                                        onClick={() => handleProductClick(product)}
                                                    >
                                                        <img src={product.image} alt={product.name} className="size-42 object-cover rounded-lg" />
                                                        <h3 className="text-md font-medium">{product.name}</h3>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                {/* Product List */}
                                <h2 className="text-lg font-bold mb-4 self-center">
                                    {activeCategory ? activeCategory.name : "Select a Category"}
                                </h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {activeCategory &&
                                        activeCategory.products.map((product, index) => (
                                            <li
                                                key={index}
                                                className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow cursor-pointer"
                                                onClick={() => handleProductClick(product)}
                                            >
                                                <img src={product.image} alt={product.name} className="size-42 object-cover rounded-lg" />
                                                <h3 className="text-md font-medium">{product.name}</h3>
                                                <button className='flex flex-row justify-center items-center gap-2 bg-gray-200 w-full py-2 rounded-sm'>
                                                    <PiEnvelopeSimple />
                                                    <span>Inquire</span>
                                                </button>
                                            </li>
                                        ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Products;