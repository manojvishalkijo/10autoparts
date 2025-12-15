import { ShoppingCart, Menu, X, Wrench } from "lucide-react";
import { translations } from "../translations";
// import { Link } from "react-router-dom"; // Cannot just import Link because Header might be used outside router if logic fails, but we wrapped App.
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
    language: "EN" | "TA";
    setLanguage: (lang: "EN" | "TA") => void;
    cartCount: number;
    openCart: () => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({
    language,
    setLanguage,
    cartCount,
    openCart,
    isMenuOpen,
    setIsMenuOpen,
}: HeaderProps) {
    const t = translations[language].nav;
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="flex items-center font-black text-2xl tracking-tighter cursor-pointer">
                        <span>10</span>
                        <Wrench className="h-6 w-6 text-gray-800 mx-0.5" />
                        <span>autoparts</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-black transition-colors">{t.home}</Link>
                    <Link to="/products" className="hover:text-black transition-colors">{t.catalog}</Link>

                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-4">
                    {/* Search bar placeholder - Could direct to products page with search query in future */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5 cursor-pointer" onClick={() => navigate('/products')}>
                        <span className="text-xs text-gray-400 mr-2">{language === "EN" ? "Search" : "தேடுக"}</span>
                        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" /><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>

                    {/* Text Toggle Shift */}
                    <div className="flex bg-gray-100 rounded-full p-1 relative">
                        <button
                            onClick={() => setLanguage("EN")}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === "EN" ? "bg-black text-white shadow-md" : "text-gray-500 hover:text-black"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage("TA")}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === "TA" ? "bg-black text-white shadow-md" : "text-gray-500 hover:text-black"}`}
                        >
                            தமிழ்
                        </button>
                    </div>

                    <button onClick={openCart} className="relative text-gray-600 hover:text-black">
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600">
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-4">
                    <Link to="/" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
                    <Link to="/products" className="block text-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>{t.catalog}</Link>

                </div>
            )}
        </header>
    );
}
