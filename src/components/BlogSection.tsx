import { translations } from "../translations";

interface BlogSectionProps {
    language: "EN" | "TA";
}

export default function BlogSection({ language }: BlogSectionProps) {
    const t = translations[language].blog;

    const posts = [
        {
            id: 1,
            title: language === "EN" ? "TOP 5 CAR MAINTENANCE TIPS FOR WINTER" : "குளிர்காலத்திற்கான சிறந்த 5 கார் பராமரிப்பு குறிப்புகள்",
            date: "November 25, 2024",
            desc: language === "EN" ? "As Temperatures Drop, It's Essential To Prepare Your Vehicle For Winter Conditions. From Tire Care To....." : "வெப்பநிலை குறையும் போது, ​​​​உங்கள் வாகனத்தை குளிர்கால நிலைமைகளுக்கு தயார் செய்வது அவசியம்...",
            image: "https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg?auto=compress&cs=tinysrgb&w=600" // Mechanic working
        },
        {
            id: 2,
            title: language === "EN" ? "HOW TO IDENTIFY GENUINE SPARE PARTS FOR YOUR CAR" : "உங்கள் காருக்கான உண்மையான உதிரிபாகங்களை எப்படி அடையாளம் காண்பது",
            date: "October 15, 2024",
            desc: language === "EN" ? "Counterfeit Parts Can Compromise Your Car's Performance And Safety. This Guide Will Help You Spot Fake....." : "போலி பாகங்கள் உங்கள் காரின் செயல்திறன் மற்றும் பாதுகாப்பை சமரசம் செய்யலாம். இந்த வழிகாட்டி உங்களுக்கு உதவும்...",
            image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600" // Engine
        },
        {
            id: 3,
            title: language === "EN" ? "5 SIGNS IT'S TIME TO REPLACE YOUR CAR BATTERY" : "உங்கள் கார் பேட்டரியை மாற்றுவதற்கான 5 அறிகுறிகள்",
            date: "August 20, 2024",
            desc: language === "EN" ? "Don't Let A Weak Battery Leave You Stranded. Look Out For These Key Indicators And Learn When....." : "பலவீனமான பேட்டரி உங்களை நடுவழியில் விட வேண்டாம். இந்த முக்கிய அறிகுறிகளை கவனியுங்கள்...",
            image: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600" // Battery or car part
        }
    ];

    return (
        <section id="blog" className="bg-white pb-20">
            {/* Banner - Full Width */}
            <div className="relative w-full h-[600px] mb-32">
                {/* Using a drifting car image similar to the GT-R Nismo */}
                <img
                    src="https://images.pexels.com/photos/3954426/pexels-photo-3954426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full h-full object-cover"
                    alt="Drifting Car"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
                    {/* Text from image seems to come after "TRUE MEN..." small text but user asked for "SAFETY GEAR..." */}
                    {/* <p className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-90">TRUE MEN EMBRACE THE GRIT.</p> */}
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 drop-shadow-lg font-impact" style={{ fontFamily: 'Impact, sans-serif' }}>
                        {t.bannerTitle}
                    </h2>
                    <button className="bg-white text-black px-10 py-3 rounded-full font-black text-sm tracking-widest hover:bg-gray-200 transition-colors uppercase">
                        {t.learnMore}
                    </button>
                </div>
            </div>

            {/* Blog Posts - Overlapping */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <div key={post.id} className="bg-[#F9F9F9] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center pb-8 text-center">
                            <div className="w-[90%] mt-6 h-48 rounded-2xl overflow-hidden shadow-md">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{post.date}</p>
                                <h3 className="font-black text-[#0B0F19] text-xl leading-Tight mb-4 uppercase max-w-[80%]">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3 max-w-[90%] mb-6">
                                    {post.desc}
                                </p>
                                <button className="bg-[#0B0F19] text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 mt-auto">
                                    {t.readMore}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
