import { translations } from "../translations";

interface QualitySectionProps {
    language: "EN" | "TA";
}

export default function QualitySection({ language }: QualitySectionProps) {
    const t = translations[language].quality;

    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gray-50 py-12 px-6 rounded-3xl relative overflow-hidden">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-black text-[#0B0F19] uppercase mb-12 relative z-10 whitespace-pre-line">
                        {t.title}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 relative z-10">
                        {/* Left Text */}
                        <div className="text-left space-y-8">
                            <div>
                                <h3 className="font-bold text-lg text-[#0B0F19] whitespace-pre-line">{t.selection}</h3>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#0B0F19] whitespace-pre-line">{t.support}</h3>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="w-64 h-64 md:w-80 md:h-80 relative">
                            <img
                                src="/images/quality-car.png"
                                alt="Wheel Rim"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="text-right space-y-8">
                            <div>
                                <h3 className="font-bold text-lg text-[#0B0F19] whitespace-pre-line">{t.assurance}</h3>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-[#0B0F19] whitespace-pre-line">{t.delivery}</h3>
                            </div>
                        </div>
                    </div>
                    {/* Diagonal Background Stripe simulation */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 -skew-y-3 z-0 pointer-events-none transform scale-150"></div>
                </div>
            </div>
        </section>
    );
}
