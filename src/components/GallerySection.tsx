import { translations } from "../translations";

interface GallerySectionProps {
    language: "EN" | "TA";
}

export default function GallerySection({ language }: GallerySectionProps) {
    const t = translations[language].gallery;

    // Images focused on "Working Mechanics" and "Behind the Scenes"
    const images = [
        "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600", // Mechanic checking under car
        "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600", // Dirty hands holding wrench/part
        "https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg?auto=compress&cs=tinysrgb&w=600", // Mechanic leaning over engine
        "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600", // Inspecting engine bay
        "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=600", // Spray painting or body work
        "https://images.pexels.com/photos/5233256/pexels-photo-5233256.jpeg?auto=compress&cs=tinysrgb&w=600", // Welding or detailed repair
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-2">{t.subtitle}</h3>
                    <div className="inline-block bg-[#F8F9FA] px-12 py-4 transform skew-x-12">
                        <h2 className="text-4xl font-black text-[#0B0F19] uppercase transform -skew-x-12">{t.title}</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Masonry layout simulation */}
                    <div className="space-y-4">
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[0]} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer object-cover" alt="Mechanic working under car" />
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[3]} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer object-cover" alt="Inspecting Engine" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[1]} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" alt="Mechanic Hands" />
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[4]} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" alt="Body work" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[2]} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer object-cover" alt="Engine Repair" />
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl">
                            <img src={images[5]} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer" alt="Welding" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
