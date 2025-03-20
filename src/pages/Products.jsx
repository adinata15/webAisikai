import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

import { PiEnvelopeSimple } from "react-icons/pi";

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

const Products = () => {
    const [activeCategory, setActiveCategory] = useState();

    const categories = [
        
        { id: 1, name: "Automatic Transfer Switch", 
            products: [
                { name: "ASP Anti-Surge Module", image: ATS1 },
                { name: "SKT1 Series Class PC ATS", image: ATS2 },
                { name: "SKT2 Series Ultra-thin Class PC ATS", image: ATS3 },
                { name: "ASKQ1 Series Household ATS 16A-63A", image: ATS4 },
                { name: "SKQ1 MCCB Type Class CB ATS", image: ATS5 },
                { name: "SKQ1 MCB Type Class CB ATS", image: ATS6 },
                { name: "ASKQ6 Series Solenoid Type Automatic Transfer Switch", image: ATS7 },
                { name: "ASKQ8 High Current Automatic Transfer Switch 3200~6300A", image: ATS8 }
            ] 
        },

        { id: 2, name: "Intelligent ATS Controller", 
            products: [
                { name: "SKR2-A LED ATS ControllerA", image: IAC1 },
                { name: "SKR2-B LCD ATS Controller", image: IAC2 }
            ] 
        },
        { id: 3, name: "High Voltage Vacuum Circuit Breaker", 
            products: [
                { name: "High Voltage Embedded Pole Type Vacuum Circuit Breaker VCB", image: HVVCB1 },
                { name: "High Voltage Insulating Cylinder Type Vacuum Circuit Breaker VCB", image: HVVCB2 }
            ] 
        },
        { id: 4, name: "Universal Circuit Breaker", 
            products: [
                { name: "ASKW2 Series Fixed Type Intelligent Universal Circuit Breaker", image: UCB5 },
                { name: "ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker", image: UCB6 },
                { name: "ASKW3 Series Drawout Type Intelligent Universal Air Circuit Breaker", image: UCB7 },
                { name: "ASKW3 Series Fixed Type Intelligent Universal Circuit Breaker", image: UCB8 },
                { name: "ASKW1 Series Fixed Type Intelligent Universal Circuit Breaker", image: UCB9 },
                { name: "ASKW1 Series Drawout Type Intelligent Universal Air Circuit Breaker", image: UCB10 }
            ] 
        },
        { id: 5, name: "Molded Case Circuit Breaker", 
            products: [
                { name: "ASKM2E-Y Series Intelligent Electronic Molded Case Circuit Breaker", image: MCCB5 },
                { name: "ASKM2E Series Intelligent Electronic Molded Case Circuit Breaker", image: MCCB6 },
                { name: "ASKM1 Series Normal Protection Molded Case Circuit Breaker", image: MCCB7 },
                { name: "ASKM1L Series Leakage Protection Molded Case Circuit Breaker", image: MCCB8 },
                { name: "ASKM3EL Series LCD Electronic Leakage Protection MCCB", image: MCCB9 },
                { name: "ASKM3E-Y Series LCD Electronic Normal Protection MCCB", image: MCCB10 },
                { name: "ASKM3E Series Electronic Normal Protection MCCB", image: MCCB11 },
                { name: "ASKM3L Series Thermomagnetic Leakage Protection MCCB", image: MCCB12 },
                { name: "ASKM3 Series Thermomagnetic Normal Protection MCCB", image: MCCB13 },
                { name: "ASKM1E Series Electronic Molded Case Circuit Breaker", image: MCCB14 },
                { name: "ASKM2L Series Leakage Protection Molded Case Circuit Breaker", image: MCCB15 },
                { name: "ASKM2 Series Normal Protection Molded Case Circuit Breaker", image: MCCB16 },
                { name: "ASKM2RT Series Thermal-magnetic Adjustable Normal Protection Molded", image: MCCB17 }
            ] 
        },
        { id: 6, name: "Miniature Circuit Breaker", 
            products: [
                { name: "ASKB6L Series Leakage Protection MCB", image: MCB5 },
                { name: "ASKB6 Series Leakage Protection MCB", image: MCB6 },
                { name: "ASKB5L Series Leakage Protection MCB", image: MCB7 },
                { name: "ASKB5 Series Leakage Protection MCB", image: MCB8 },
                { name: "ASKB2L Series Leakage Protection MCB", image: MCB9 },
                { name: "ASKB2 Series Normal Protection MCB", image: MCB10 },
                { name: "ASKB1L Series Leakage Protection MCB", image: MCB11 },
                { name: "ASKB1 Series Normal Protection MCB", image: MCB12 }
            ] 
        },
        { id: 7, name: "Load Isolation Switch", 
            products: [
                { name: "SKG1 Load Isolation Switch", image: LIS1 }
            ] 
        },
        { id: 8, name: "Overvoltage and Undervoltage Protector", 
            products: [
                { name: "Overvoltage and Undervoltage Protector", image: OAUP1 },
            ] 
        },
        { id: 9, name: "Surge Protective Device", 
            products: [
                { name: "SKD3 Series Surge Protective Device", image: SPD1 },
                { name: "SKD2 Series Surge Protective Device", image: SPD2 },
                { name: "SKD1 Series Surge Protective Device", image: SPD3 }
            ] 
        },
        { id: 10, name: "Intelligent Power Meter", 
            products: [
                { name: "Intelligent Power Meter", image: IPM1 }
            ] 
        },
        { id: 11, name: "Battery Charger", 
            products: [
                { name: "Intelligent Battery Charger", image: BC1 }
            ] 
        },
    ];

    useEffect(() => {
        // Set the default category to "Automatic Transfer Switch" (id 1)
        const defaultCategory = categories.find(category => category.id === 1);
        setActiveCategory(defaultCategory);
    }, []);

    return (
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col">
                <Header />
                <Breadcrumb />

                <div className="flex flex-col lg:flex-row gap-6 px-6 py-12">
                    {/* Left Dropdown */}
                    <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Product Category</h2>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            value={activeCategory?.id || ""}
                            onChange={(e) => {
                                const selectedCategory = categories.find(
                                    (category) => category.id === parseInt(e.target.value)
                                );
                                setActiveCategory(selectedCategory || null);
                            }}>

                            <option value="">Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Right Product Display */}
                    <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-4">
                            {activeCategory ? activeCategory.name : "Select a Category"}
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {activeCategory &&
                                activeCategory.products.map((product, index) => (
                                    <li key={index} className="flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow">
                                        <img src={product.image} alt={product.name} className="size-42 object-cover rounded-lg"/>
                                        <h3 className="text-md font-medium">{product.name}</h3>                                         
                                        <button className='flex flex-row justify-center items-center gap-2 bg-gray-200 w-full py-2 rounded-sm'>
                                            <PiEnvelopeSimple />    
                                            <a href="">Inquire</a>
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Products;