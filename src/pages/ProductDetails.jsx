import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import Breadcrumb from '../components/Breadcrumb';

import { FaFilePdf } from "react-icons/fa6";

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

import ATS1file from "../assets/files/ASP-Introduction.pdf";


const ProductDetails = () => {
    const location = useLocation();
    const { product: initialProduct } = location.state || {};

    const [selectedProduct, setSelectedProduct] = useState(initialProduct);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeTab, setActiveTab] = useState("description");

    const categories = [
        { 
            id: 1, 
            name: "Automatic Transfer Switch", 
            products: [
                { 
                    name: "ASP Anti-Surge Module",
                    subtitle: "At the moment of lightning release, the voltage is very high, the current is very large, and the energy release time is short. It is not enough to only use external lightning protection (lightning rod, etc.). lightning over-voltage will produce a great danger to electronic and electrical equipment. ASP anti-surge module has the function of lightning protection, which can effectively absorb the surge pulse from the power system to ensure the safe use of ATS in harsh environment and lightning areas, and reduce the probability of ATS being damaged by lightning in lightning environment", 
                    image: ATS1, 
                    model: "", 
                    brand: "", 
                    description: <p>ASP anti-surge module can absorb surges and effectively  counteract the damage caused by surges to smart electric  appliances through the built-in surge protection device.
                            Surges occur with high frequency and irregularity, so it is  necessary to take continuous protection for smart appliances.  Anti-surge module can effectively block high, medium and  low spike voltage of different intensities without interruption.
                            For the instantaneous burst of ultra-high current, the slightest  flow into the sophisticated control circuit of ATS can have  fatal consequences. Anti-surge module can effectively cut off  the ultra-high current in nanosecond, providing a high level of  protection for intelligent appliances. This module can effectively protect the internal control board of ATS.
                        </p>,
                    brochure: ATS1file 
                },
                { 
                    name: "SKT1 Series Class PC ATS", 
                    image: ATS2, 
                    model: "SKT1-PC", 
                    brand: "Aisikai", 
                    description: "A reliable automatic transfer switch for industrial use.", 
                    brochure: "/brochures/skt1-series-class-pc-ats.pdf" 
                },
                { 
                    name: "SKT2 Series Ultra-thin Class PC ATS", 
                    image: ATS3, 
                    model: "SKT2-PC", 
                    brand: "Aisikai", 
                    description: "An ultra-thin automatic transfer switch for compact spaces.", 
                    brochure: "/brochures/skt2-series-ultra-thin-class-pc-ats.pdf" 
                },
                { 
                    name: "ASKQ1 Series Household ATS 16A-63A", 
                    image: ATS4, 
                    model: "ASKQ1", 
                    brand: "Aisikai", 
                    description: "A household automatic transfer switch for 16A-63A.", 
                    brochure: "/brochures/askq1-series-household-ats.pdf" 
                },
                { 
                    name: "SKQ1 MCCB Type Class CB ATS", 
                    image: ATS5, 
                    model: "SKQ1-MCCB", 
                    brand: "Aisikai", 
                    description: "An MCCB type automatic transfer switch for class CB.", 
                    brochure: "/brochures/skq1-mccb-type-class-cb-ats.pdf" 
                },
                { 
                    name: "SKQ1 MCB Type Class CB ATS", 
                    image: ATS6, 
                    model: "SKQ1-MCB", 
                    brand: "Aisikai", 
                    description: "An MCB type automatic transfer switch for class CB.", 
                    brochure: "/brochures/skq1-mcb-type-class-cb-ats.pdf" 
                },
                { 
                    name: "ASKQ6 Series Solenoid Type Automatic Transfer Switch", 
                    image: ATS7, 
                    model: "ASKQ6", 
                    brand: "Aisikai", 
                    description: "A solenoid type automatic transfer switch for high performance.", 
                    brochure: "/brochures/askq6-series-solenoid-type-ats.pdf" 
                },
                { 
                    name: "ASKQ8 High Current Automatic Transfer Switch 3200~6300A", 
                    image: ATS8, 
                    model: "ASKQ8", 
                    brand: "Aisikai", 
                    description: "A high current automatic transfer switch for 3200~6300A.", 
                    brochure: "/brochures/askq8-high-current-ats.pdf" 
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
                    description: "LED-based intelligent ATS controller for efficient management.", 
                    brochure: "/brochures/skr2-a-led-ats-controller.pdf" 
                },
                { 
                    name: "SKR2-B LCD ATS Controller", 
                    image: IAC2, 
                    model: "SKR2-B", 
                    brand: "Aisikai", 
                    description: "LCD-based intelligent ATS controller with advanced features.", 
                    brochure: "/brochures/skr2-b-lcd-ats-controller.pdf" 
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
                    model: "VCB-EP", 
                    brand: "Aisikai", 
                    description: "An embedded pole type high voltage vacuum circuit breaker.", 
                    brochure: "/brochures/high-voltage-embedded-pole-vcb.pdf" 
                },
                { 
                    name: "High Voltage Insulating Cylinder Type Vacuum Circuit Breaker VCB", 
                    image: HVVCB2, 
                    model: "VCB-IC", 
                    brand: "Aisikai", 
                    description: "An insulating cylinder type high voltage vacuum circuit breaker.", 
                    brochure: "/brochures/high-voltage-insulating-cylinder-vcb.pdf" 
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
                    model: "ASKW2-F", 
                    brand: "Aisikai", 
                    description: "A fixed type intelligent universal circuit breaker.", 
                    brochure: "/brochures/askw2-fixed-type-ucb.pdf" 
                },
                { 
                    name: "ASKW2 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB6, 
                    model: "ASKW2-D", 
                    brand: "Aisikai", 
                    description: "A drawout type intelligent universal air circuit breaker.", 
                    brochure: "/brochures/askw2-drawout-type-ucb.pdf" 
                },
                { 
                    name: "ASKW3 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB7, 
                    model: "ASKW3-D", 
                    brand: "Aisikai", 
                    description: "A drawout type intelligent universal air circuit breaker.", 
                    brochure: "/brochures/askw3-drawout-type-ucb.pdf" 
                },
                { 
                    name: "ASKW3 Series Fixed Type Intelligent Universal Circuit Breaker", 
                    image: UCB8, 
                    model: "ASKW3-F", 
                    brand: "Aisikai", 
                    description: "A fixed type intelligent universal circuit breaker.", 
                    brochure: "/brochures/askw3-fixed-type-ucb.pdf" 
                },
                { 
                    name: "ASKW1 Series Fixed Type Intelligent Universal Circuit Breaker", 
                    image: UCB9, 
                    model: "ASKW1-F", 
                    brand: "Aisikai", 
                    description: "A fixed type intelligent universal circuit breaker.", 
                    brochure: "/brochures/askw1-fixed-type-ucb.pdf" 
                },
                { 
                    name: "ASKW1 Series Drawout Type Intelligent Universal Air Circuit Breaker", 
                    image: UCB10, 
                    model: "ASKW1-D", 
                    brand: "Aisikai", 
                    description: "A drawout type intelligent universal air circuit breaker.", 
                    brochure: "/brochures/askw1-drawout-type-ucb.pdf" 
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
        if (initialProduct) {
            const defaultCategory = categories.find(category =>
                category.products.some(product => product.name === initialProduct.name)
            );
            setActiveCategory(defaultCategory);
        }
    }, [initialProduct]);

    const handleCategoryChange = (categoryId) => {
        const selectedCategory = categories.find(category => category.id === parseInt(categoryId));
        setActiveCategory(selectedCategory);
        setSelectedProduct(null); // Clear selected product to show the product list
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <section className="font-primary m-0 p-0 box-border">
            <div className="flex flex-col">
                <Header />
                {/* <Breadcrumb /> */}

                <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-2 px-6 xl:px-16 py-12">
                    {/* Product Category Dropdown */}
                    <div className="w-full xl:w-auto bg-gray-200 p-4 rounded-lg items-center flex flex-col justify-center">
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

                    {/* Product List or Product Details */}
                    <div className='flex flex-col justify-center items-center'>
                        {selectedProduct ? (
                            <div className="w-full bg-white px-6 rounded-lg shadow flex flex-col xl:flex-row gap-6 justify-center items-center ">
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
                        ) : (
                            <div className="w-full bg-white p-4 xl:px-12 rounded-lg shadow flex flex-col justify-center items-center">
                                <h2 className="text-lg font-bold mb-4">Products in {activeCategory?.name || "Selected Category"}</h2>
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
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}

                        {/* Tabs for Description and Brochure */}
                        {selectedProduct && (
                            <div className="w-full bg-gray-100 p-6 rounded-lg shadow">
                                <div className="flex border-b border-gray-300 mb-4">
                                    <button
                                        className={`px-4 py-2 font-medium ${activeTab === "description" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                        onClick={() => setActiveTab("description")}
                                    >
                                        Description
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium ${activeTab === "brochure" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                                        onClick={() => setActiveTab("brochure")}
                                    >
                                        Brochure
                                    </button>
                                </div>

                                {/* Tab Content */}
                                {activeTab === "description" && (
                                    <div className="h-40 overflow-y-auto text-gray-700">
                                        <p>{selectedProduct.description || "No description available."}</p>
                                    </div>
                                )}
                                {activeTab === "brochure" && (
                                    <div className='flex flex-row items-center gap-2'>
                                        <FaFilePdf />
                                        <a href={selectedProduct.brochure || "#"} className="text-primary font-medium underline" download>
                                            {selectedProduct.brochure?.split('/').pop() || "Download Brochure"}
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}

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
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                <img src={product.image} alt={product.name} className="size-42 object-cover rounded-lg" />
                                                <h3 className="text-md font-medium">{product.name}</h3>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default ProductDetails;
