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
                { name: "Product 2A", image: ATS1 },
                { name: "Product 2B", image: ATS1 }
            ] 
        },
        { id: 3, name: "High Voltage Vacuum Circuit Breaker", 
            products: [
                { name: "Product 3A", image: ATS1 },
                { name: "Product 3B", image: ATS1 }
            ] 
        },
        { id: 4, name: "Universal Circuit Breaker", 
            products: [
                { name: "Product 4A", image: ATS1 },
                { name: "Product 4B", image: ATS1 }
            ] 
        },
        { id: 5, name: "Molded Case Circuit Breaker", 
            products: [
                { name: "Product 5A", image: ATS1 },
                { name: "Product 5B", image: ATS1 }
            ] 
        },
        { id: 6, name: "Miniature Circuit Breaker", 
            products: [
                { name: "Product 6A", image: ATS1 },
                { name: "Product 6B", image: ATS1 }
            ] 
        },
        { id: 7, name: "Load Isolation Switch", 
            products: [
                { name: "Product 7A", image: ATS1 },
                { name: "Product 7B", image: ATS1 }
            ] 
        },
        { id: 8, name: "Overvoltage and Undervoltage Protector", 
            products: [
                { name: "Product 8A", image: ATS1 },
                { name: "Product 8B", image: ATS1 }
            ] 
        },
        { id: 9, name: "Surge Protective Device", 
            products: [
                { name: "Product 9A", image: ATS1 },
                { name: "Product 9B", image: ATS1 }
            ] 
        },
        { id: 10, name: "Intelligent Power Meter", 
            products: [
                { name: "Product 10A", image: ATS1 },
                { name: "Product 10B", image: ATS1 }
            ] 
        },
        { id: 11, name: "Battery Charger", 
            products: [
                { name: "Product 11A", image: ATS1 },
                { name: "Product 11B", image: ATS1 }
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