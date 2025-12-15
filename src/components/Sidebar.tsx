import { Filter, X } from "lucide-react";
import { translations } from "../translations";

interface SidebarProps {
    language: "EN" | "TA";
    categoryFilter: string | null;
    setCategoryFilter: (category: string | null) => void;
    priceRange: number;
    setPriceRange: (price: number) => void;
    isMobileOpen: boolean;
    setIsMobileOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
    language,
    categoryFilter,
    setCategoryFilter,
    priceRange,
    setPriceRange,
    isMobileOpen,
    setIsMobileOpen
}: SidebarProps) {

    const categories = [
        { id: "all", label: language === "EN" ? "All Products" : "அனைத்து தயாரிப்புகள்" },
        { id: "Alloy", label: language === "EN" ? "Alloys" : "அலாய் வீல்" },
        { id: "Steel", label: language === "EN" ? "Steel Rims" : "எஃகு சக்கரங்கள்" },
        { id: "Off-Road", label: language === "EN" ? "Off-Road" : "ஆஃப்-ரோடு" },
        { id: "Spares", label: language === "EN" ? "Spare Parts" : "உதிரி பாகங்கள்" },
        { id: "Accessories", label: language === "EN" ? "Accessories" : "துணைக்கருவிகள்" },
    ];

    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            )}

            {/* Sidebar Content */}
            <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[60]
        lg:relative lg:translate-x-0 lg:shadow-none lg:h-auto lg:w-auto lg:bg-transparent lg:block
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
                <div className="p-6 h-full overflow-y-auto lg:p-0">
                    <div className="flex justify-between items-center lg:hidden mb-6">
                        <h2 className="font-bold text-lg">Filters</h2>
                        <button onClick={() => setIsMobileOpen(false)}><X className="w-6 h-6" /></button>
                    </div>

                    <div className="space-y-8">
                        {/* Categories */}
                        <div>
                            <h3 className="font-black text-sm uppercase tracking-wider mb-4 border-b pb-2">{language === "EN" ? "Categories" : "வகைகள்"}</h3>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <button
                                            onClick={() => { setCategoryFilter(cat.id === "all" ? null : cat.id); setIsMobileOpen(false); }}
                                            className={`text-sm hover:text-black transition-colors flex items-center w-full text-left
                                        ${(categoryFilter === cat.id || (categoryFilter === null && cat.id === "all")) ? "font-bold text-black" : "text-gray-500"}
                                    `}
                                        >
                                            <span className={`w-2 h-2 rounded-full mr-2 ${(categoryFilter === cat.id || (categoryFilter === null && cat.id === "all")) ? "bg-black" : "bg-transparent border border-gray-300"}`}></span>
                                            {cat.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="font-black text-sm uppercase tracking-wider mb-4 border-b pb-2">{language === "EN" ? "Price Range" : "விலை வரம்பு"}</h3>
                            <div className="px-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="20000"
                                    step="100"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                                />
                                <div className="flex justify-between mt-2 text-xs font-bold text-gray-600">
                                    <span>₹0</span>
                                    <span>₹{priceRange.toLocaleString()}</span>
                                    <span>₹20,000+</span>
                                </div>
                            </div>
                        </div>

                        {/* Availability Mock */}
                        <div>
                            <h3 className="font-black text-sm uppercase tracking-wider mb-4 border-b pb-2">{language === "EN" ? "Availability" : "இருப்பு"}</h3>
                            <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                <input type="checkbox" className="rounded text-black focus:ring-black" defaultChecked />
                                <span>{language === "EN" ? "In Stock" : "கையிருப்பில்"}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
