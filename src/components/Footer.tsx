import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { translations } from "../translations";

interface FooterProps {
    language: "EN" | "TA";
}

export default function Footer({ language }: FooterProps) {
    const t = translations[language].footer;

    return (
        <footer className="bg-[#0B0F19] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="font-black text-2xl tracking-tighter">10AutoParts</div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t.desc}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.links}</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Information</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.contact}</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>123 Auto Street, Car City</li>
                            <li>+1 (234) 567 890</li>
                            <li>contact@10autoparts.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.newsletter}</h4>
                        <p className="text-gray-400 text-sm mb-4">{t.subscribe}</p>
                        <div className="flex bg-gray-800 rounded-full p-1 pl-4">
                            <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none text-sm text-white placeholder-gray-500" />
                            <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Send className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>{t.rights}</p>
                </div>
            </div>
        </footer>
    );
}
