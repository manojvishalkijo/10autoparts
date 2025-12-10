import { Car, Bike, Snowflake, Tractor, Zap } from "lucide-react";
import { translations } from "../translations";

interface CategoryIconsProps {
    language: "EN" | "TA";
}

export default function CategoryIcons({ language }: CategoryIconsProps) {
    const t = translations[language].categories;

    const categories = [
        { name: t.cars, icon: <Car className="w-8 h-8" /> },
        { name: t.motorcycles, icon: <Bike className="w-8 h-8" /> },
        { name: t.snowmobiles, icon: <Snowflake className="w-8 h-8" /> },
        { name: t.atvs, icon: <Tractor className="w-8 h-8" /> },
        { name: t.scooters, icon: <Zap className="w-8 h-8" /> },
    ];

    return (
        <section className="py-8 bg-white">
            <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-6">
                {categories.map((cat) => (
                    <div key={cat.name} className="flex flex-col items-center justify-center w-24 h-24 border rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-white">
                        <div className="text-gray-400 mb-2">{cat.icon}</div>
                        <span className="text-xs font-bold text-black">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
