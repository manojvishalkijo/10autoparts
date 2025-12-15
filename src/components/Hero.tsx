import { translations } from "../translations";

interface HeroProps {
    language: "EN" | "TA";
}

export default function Hero({ language }: HeroProps) {
    const t = translations[language].hero;

    return (
        <section id="home" className="relative bg-white pt-10 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
                {/* Text Side */}
                <div className="z-10 relative pl-4 md:pl-12">
                    <div className="font-black text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-[#0B0F19] tracking-tighter">

                        {/* MAKE STORE */}
                        <div className="flex items-center">
                            <span>{t.line1}</span>
                            {t.line2 && <span className="text-xl sm:text-2xl font-bold text-gray-400 ml-4 rotate-90 origin-left translate-y-6 tracking-widest">{t.line2}</span>}
                        </div>

                        {/* SELL PARTS */}
                        <div className="flex items-center">
                            <span>{t.line3}</span>
                            {t.line4 && <span className="text-xl sm:text-2xl font-bold text-gray-400 ml-4 rotate-90 origin-left translate-y-6 tracking-widest">{t.line4}</span>}
                        </div>

                        {/* EARN MONEY */}
                        <div className="flex items-center">
                            <span>{t.line5}</span>
                            {t.line6 && <span className="text-xl sm:text-2xl font-bold text-gray-400 ml-4 rotate-90 origin-left translate-y-6 tracking-widest">{t.line6}</span>}
                        </div>

                    </div>
                    {/* Subtitle not used in the strict image mock, but keeping it for context if needed, or hiding it? 
              The mockup has no subtitle. I will keep it small or hide it to be "exactly like this".
              User said "exactly like this". The image has NO subtitle. I will remove it or comment it out.
              But previous instructions asked for Indian content. I'll make it subtle.
          */}
                    {/* <p className="mt-8 text-gray-600 text-lg font-medium">{t.subtitle}</p> */}
                </div>

                {/* Image Side */}
                <div className="relative">
                    <img
                        src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Indian Context Car"
                        className="w-full object-contain transform scale-110"
                    />
                </div>
            </div>
        </section>
    );
}
