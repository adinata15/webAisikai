import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

import askq1 from '../assets/images/askq1.jpg';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState(null);

    const categories = [
        { 
            id: 1, 
            name: "Category 1", 
            products: [
                { 
                    id: "1A", 
                    name: "Product 1A", 
                    image: askq1, // Fix: Use the image path directly
                    link: "/product/1A" 
                },
                { 
                    id: "1B", 
                    name: "Product 1B", 
                    image: "/path/to/product1B.jpg", 
                    link: "/product/1B" 
                }
            ] 
        },
        { id: 2, name: "Category 2", products: ["Product 2A", "Product 2B"] },
        { 
            id: 3, 
            name: "Category 3 (Expandable)", 
            subcategories: [
                { id: 31, name: "Subcategory 3A", products: ["Product 3A1", "Product 3A2"] },
                { id: 32, name: "Subcategory 3B", products: ["Product 3B1", "Product 3B2"] }
            ]
        },
        { id: 4, name: "Category 4", products: ["Product 4A", "Product 4B"] },
        { 
            id: 5, 
            name: "Category 5 (Expandable)", 
            subcategories: [
                { id: 51, name: "Subcategory 5A", products: ["Product 5A1", "Product 5A2"] },
                { id: 52, name: "Subcategory 5B", products: ["Product 5B1", "Product 5B2"] }
            ]
        },
        { id: 6, name: "Category 6", products: ["Product 6A", "Product 6B"] },
        { id: 7, name: "Category 7", products: ["Product 7A", "Product 7B"] },
        { id: 8, name: "Category 8", products: ["Product 8A", "Product 8B"] },
        { id: 9, name: "Category 9", products: ["Product 9A", "Product 9B"] },
        { id: 10, name: "Category 10", products: ["Product 10A", "Product 10B"] },
        { id: 11, name: "Category 11", products: ["Product 11A", "Product 11B"] },
    ];

    const handleCategoryClick = (category) => {
        if (category.subcategories) {
            setExpandedCategory(expandedCategory === category.id ? null : category.id);
        } else {
            setActiveCategory(category);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setActiveCategory(subcategory);
    };

    return(
        <section className='flex flex-col gap-6'>
            <Header />
            <Breadcrumb />

            <div className="flex flex-row gap-8">
                {/* Left Accordion */}
                <div className="w-1/3 bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Product Category</h2>
                    <ul className="space-y-2">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <button
                                    className="w-full text-left px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-200"
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category.name}
                                </button>
                                {category.subcategories && expandedCategory === category.id && (
                                    <ul className="ml-4 mt-2 space-y-2">
                                        {category.subcategories.map((subcategory) => (
                                            <li key={subcategory.id}>
                                                <button
                                                    className="w-full text-left px-4 py-2 bg-gray-50 rounded-lg shadow hover:bg-gray-200"
                                                    onClick={() => handleSubcategoryClick(subcategory)}
                                                >
                                                    {subcategory.name}
                                                </button>
                                            </li>
                                        ))} 
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Product Display */}
                <div className="w-2/3 bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-bold mb-4">
                        {activeCategory ? activeCategory.name : "Select a Category"}
                    </h2>
                    <ul className="space-y-4">
                        {activeCategory && activeCategory.products.map((product) => (
                            <li key={product.id} className="flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-lg shadow">
                                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
                                <h3 className="text-md font-medium">{product.name}</h3>
                                <a href={product.link} className="text-primary font-bold underline">View Details</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default Products;