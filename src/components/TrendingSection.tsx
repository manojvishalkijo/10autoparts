import { ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { translations } from "../translations";
import { useRef } from "react";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image: string;
    category?: string;
}

interface TrendingSectionProps {
    addToCart: (product: any) => void;
    language: "EN" | "TA";
}

export default function TrendingSection({ addToCart, language }: TrendingSectionProps) {
    const t = translations[language].trending;

    // Using refs for scroll functionality
    const wheelsRef = useRef<HTMLDivElement>(null);
    const sparesRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = 300;
            ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    const wheels: Product[] = [
        { id: 101, name: "Mahindra Thar Alloys", price: 12999.00, image: "/images/products/thar_alloy.png", category: "Off-Road" },
        { id: 102, name: "Tata Nexon Diamond Cut", price: 8500.00, image: "/images/products/nexon_alloy.png", category: "Alloy" },
        { id: 103, name: "Safari Storme Rims", price: 7800.00, image: "/images/products/safari_rim.png", category: "Steel" },
        { id: 104, name: "Swift Sport Alloys", price: 6500.00, image: "/images/products/swift_alloy.png", category: "Sport" },
        { id: 105, name: "Bolero Steel Rims", price: 4500.00, image: "/images/products/bolero_rim.png", category: "Heavy Duty" },
    ];

    const spares: Product[] = [
        { id: 201, name: "Brembo Brake Pads", price: 3500.00, image: "/images/products/brembo_pads.png" },
        { id: 202, name: "Scorpio Shock Absorbers", price: 4200.00, image: "/images/products/scorpio_shock.png" },
        { id: 203, name: "XUV700 Engine Cover", price: 5500.00, image: "/images/products/xuv700_cover.png" },
        { id: 204, name: "Alto Clutch Plate", price: 1800.00, image: "/images/products/alto_clutch.png" },
        { id: 205, name: "Creta Headlight Assembly", price: 8900.00, image: "/images/products/creta_headlight.png" },
    ];


    const ProductCard = ({ product }: { product: Product }) => (
        <div className="bg-gray-50 rounded-2xl p-6 relative group hover:shadow-lg transition-all min-w-[280px] snap-start">
            <div className="h-40 flex items-center justify-center mb-4">
                <img src={product.image} alt={product.name} className="h-full object-contain mix-blend-multiply" />
            </div>

            <div className="text-center">
                <div className="flex justify-center text-yellow-400 mb-2 text-xs">★★★★★</div>
                {product.category && <p className="text-xs text-gray-500 mb-1">{product.category}</p>}
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{product.name}</h4>
                <div className="font-black text-lg">₹{product.price.toFixed(2)}</div>
            </div>

            <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors"
                title={t.addToCart}
            >
                <ShoppingBag className="w-4 h-4" />
            </button>
        </div>
    );

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h3 className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-2">{t.newArrivals}</h3>
                    <div className="inline-block bg-[#F8F9FA] px-12 py-4 transform -skew-x-12">
                        <h2 className="text-4xl font-black text-[#0B0F19] uppercase transform skew-x-12">{t.explore}</h2>
                    </div>
                </div>

                {/* Trending Wheels */}
                <div className="mb-16">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-[#0B0F19]">{t.wheels}</h3>
                            <a href="#" className="text-sm text-gray-500 flex items-center hover:text-black">{t.viewAll} <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => scroll(wheelsRef, 'left')} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /></button>
                            <button onClick={() => scroll(wheelsRef, 'right')} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                    {/* Horizontal Scroll Container */}
                    <div
                        ref={wheelsRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {wheels.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>

                {/* Trending Spares */}
                <div>
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-2xl font-black text-[#0B0F19]">{t.spares}</h3>
                            <a href="#" className="text-sm text-gray-500 flex items-center hover:text-black">{t.viewAll} <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => scroll(sparesRef, 'left')} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /></button>
                            <button onClick={() => scroll(sparesRef, 'right')} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div
                        ref={sparesRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {spares.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>

            </div>
        </section>
    );
}
