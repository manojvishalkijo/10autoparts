import { translations } from "../translations";

interface PremiumBrandsProps {
    language: "EN" | "TA";
}

export default function PremiumBrands({ language }: PremiumBrandsProps) {
    const t = translations[language].brands;

    const brands = [
        {
            name: "Tata Motors",
            image: "https://images.pexels.com/photos/16380637/pexels-photo-16380637/free-photo-of-tata-truck-on-road-in-india.jpeg?auto=compress&cs=tinysrgb&w=800", // More specific if available, else generic indian truck/car
            logo: "TATA MOTORS"
        },
        {
            name: "Mahindra",
            image: "https://images.pexels.com/photos/14541018/pexels-photo-14541018.jpeg?auto=compress&cs=tinysrgb&w=800", // Jeep style
            logo: "Mahindra"
        },
        {
            name: "Maruti Suzuki",
            image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800", // Generic hatchback
            logo: "Maruti Suzuki"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-2">{t.sparesFor}</h3>
                    <h2 className="text-4xl font-black text-[#0B0F19] uppercase">{t.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {brands.map((brand) => (
                        <div key={brand.name} className="relative group overflow-hidden rounded-2xl h-96">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 text-white text-3xl font-black italic">
                                {brand.logo}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
