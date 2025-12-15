import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import Header from "./Header";

import Footer from "./Footer";
import { ShoppingBag, Filter, ShoppingCart, User, Phone, X } from "lucide-react";
import { translations } from "../translations";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image: string;
    category?: string;
    quantity?: number; // For cart logic
}

interface ProductPageProps {
    language: "EN" | "TA";
    setLanguage: (lang: "EN" | "TA") => void;
    cart: any[];
    addToCart: (product: any) => void;
    openCart: () => void;
    // Shared props from parent if kept within same state context or using context api
    // For now assuming passed down
}

export default function ProductPage({
    language,
    setLanguage,
    cart,
    addToCart,
    openCart
}: ProductPageProps) {

    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState(15000); // Default max
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Full Product List (Combined from Home)
    const allProducts: Product[] = [
        { id: 101, name: "Mahindra Thar Alloys", price: 12999.00, image: "/images/products/thar_alloy.png", category: "Off-Road" },
        { id: 102, name: "Tata Nexon Diamond Cut", price: 8500.00, image: "/images/products/nexon_alloy.png", category: "Alloy" },
        { id: 103, name: "Safari Storme Rims", price: 7800.00, image: "/images/products/safari_rim.png", category: "Steel" },
        { id: 104, name: "Swift Sport Alloys", price: 6500.00, image: "/images/products/swift_alloy.png", category: "Sport" },
        { id: 105, name: "Bolero Steel Rims", price: 4500.00, image: "/images/products/bolero_rim.png", category: "Heavy Duty" },
        { id: 201, name: "Brembo Brake Pads", price: 3500.00, image: "/images/products/brembo_pads.png", category: "Spares" },
        { id: 202, name: "Scorpio Shock Absorbers", price: 4200.00, image: "/images/products/scorpio_shock.png", category: "Spares" },
        { id: 203, name: "XUV700 Engine Cover", price: 5500.00, image: "/images/products/xuv700_cover.png", category: "Spares" },
        { id: 204, name: "Alto Clutch Plate", price: 1800.00, image: "/images/products/alto_clutch.png", category: "Spares" },
        { id: 205, name: "Creta Headlight Assembly", price: 8900.00, image: "/images/products/creta_headlight.png", category: "Spares" },
    ];

    const filteredProducts = allProducts.filter(p => {
        const matchCategory = categoryFilter ? (p.category === categoryFilter || (categoryFilter === "Spares" && !p.category?.includes("Alloy") && !p.category?.includes("Off-Road") && !p.category?.includes("Steel") && !p.category?.includes("Sport") && !p.category?.includes("Heavy Duty"))) : true;
        // Simplified logic: If "Spares" selected, show items that generally look like spares or explicitly marked. 
        // Better: Update data to have explicit main categories. For now doing loose matching to reuse data.
        // Actually let's just use the 'category' field.
        const strictCategory = categoryFilter ? p.category === categoryFilter || (categoryFilter === "Spares" && !["Off-Road", "Alloy", "Steel", "Sport", "Heavy Duty"].includes(p.category || "")) : true;

        const matchPrice = p.price <= priceRange;
        return strictCategory && matchPrice;
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">


            {/* Main Content */}
            <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

                {/* Title & Mobile Filter Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl font-black uppercase text-[#0B0F19]">{language === "EN" ? "Catalog" : "தயாரிப்புகள்"}</h1>
                        <p className="text-gray-500 mt-2">{filteredProducts.length} {language === "EN" ? "Products Found" : "தயாரிப்புகள் காணப்பட்டன"}</p>
                    </div>

                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full font-bold text-sm"
                    >
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                    </button>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar (Desktop & Mobile) */}

                    <div className="lg:w-64 flex-shrink-0 lg:block">

                        <div className="w-64 flex-shrink-0 lg:block">

                            <Sidebar
                                language={language}
                                categoryFilter={categoryFilter}
                                setCategoryFilter={setCategoryFilter}
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                                isMobileOpen={isSidebarOpen}
                                setIsMobileOpen={setIsSidebarOpen}
                            />
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <div key={product.id} className="bg-white rounded-2xl p-6 relative group hover:shadow-xl transition-all border border-gray-100 flex flex-col">
                                        <div className="h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl p-4">
                                            <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110" />
                                        </div>

                                        <div className="text-center flex-1 flex flex-col">
                                            {product.category && <p className="text-xs text-gray-500 mb-1">{product.category}</p>}
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm line-clamp-2 min-h-[40px]">{product.name}</h4>
                                            <div className="mt-auto">
                                                <div className="font-black text-xl text-[#0B0F19]">₹{product.price.toFixed(2)}</div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => addToCart(product)}
                                            className="mt-4 w-full bg-black text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                        >
                                            <ShoppingBag className="w-4 h-4" />
                                            {language === "EN" ? "Add to Cart" : "வண்டியில் சேர்"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="bg-gray-100 p-6 rounded-full mb-4">
                                    <ShoppingBag className="w-12 h-12 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Found</h3>
                                <p className="text-gray-500">Try adjusting your filters.</p>
                                <button onClick={() => { setCategoryFilter(null); setPriceRange(20000); }} className="mt-6 text-black font-bold underline">Clear All Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
