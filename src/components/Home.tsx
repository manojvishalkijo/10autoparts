import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import CategoryIcons from "./CategoryIcons";
import QualitySection from "./QualitySection";
import PremiumBrands from "./PremiumBrands";
import TrendingSection from "./TrendingSection";
import GallerySection from "./GallerySection";
import ProductPage from "./ProductPage";
import { Phone, X } from "lucide-react";

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  type?: "Car" | "Bike";
  quantity?: number;
}


// --- Landing Page Component ---
function LandingPage({ language, addToCart }: { language: "EN" | "TA", addToCart: (p: Product) => void }) {
  return (
    <main>
      <Hero language={language} />
      <CategoryIcons language={language} />
      <QualitySection language={language} />
      <PremiumBrands language={language} />
      <TrendingSection addToCart={addToCart} language={language} />
      <GallerySection language={language} />
    </main>
  );
}

// --- Main App Component ---
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "TA">("EN");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(
      cart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const orderViaWhatsApp = () => {
    if (cart.length === 0) return;
    if (!customerName || !customerPhone) {
      alert(
        language === "EN"
          ? "Please enter your name and mobile number!"
          : "உங்கள் பெயர் மற்றும் மொபைல் எண்ணை உள்ளிடவும்!"
      );
      return;
    }

    const phoneNumber = "919442351404";

    const formatCurrency = (amount: number) =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(amount);

    let message =
      language === "EN"
        ? `Hello! My name is ${customerName}.\nMobile: ${customerPhone}\n\nI would like to order:\n\n`
        : `வணக்கம்! என் பெயர் ${customerName}.\nமொபைல்: ${customerPhone}\n\nநான் ஆர்டர் செய்ய விரும்புகிறேன்:\n\n`;

    cart.forEach((item) => {
      const itemTotal = item.product.price * item.quantity;
      message += `${item.quantity}x ${item.product.name} - ${formatCurrency(itemTotal)}\n`;
    });

    message += `\n${language === "EN" ? "Total" : "மொத்தம்"}: ${formatCurrency(getTotalPrice())}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Scroll to top on route change wrapper could be added here but keeping simple

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col">
        <Header
          language={language}
          setLanguage={setLanguage}
          cartCount={cartTotalItems}
          openCart={() => setIsCartOpen(true)}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage language={language} addToCart={addToCart} />} />
            <Route path="/products" element={
              <ProductPage
                language={language}
                setLanguage={setLanguage}
                cart={cart}
                addToCart={addToCart}
                openCart={() => setIsCartOpen(true)}
              />
            } />
          </Routes>
        </div>

        <Footer language={language} />

        {/* Global Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-end pt-0 h-screen">
            <div className="bg-white shadow-2xl w-full max-w-md h-full flex flex-col animate-in slide-in-from-right duration-300">
              <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                <h2 className="text-xl font-black uppercase tracking-tight">{language === "EN" ? "Your Cart" : "உங்கள் வண்டி"}</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-black transition-colors"><X className="h-6 w-6" /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <Phone className="w-12 h-12 mb-4 opacity-20" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase text-gray-500">Contact Details</label>
                      <input type="text" placeholder={language === "EN" ? "Your Name" : "உங்கள் பெயர்"} value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="border-gray-200 bg-gray-50 p-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                      <input type="text" placeholder={language === "EN" ? "Mobile Number" : "மொபைல் எண்"} value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="border-gray-200 bg-gray-50 p-3 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>

                    <div className="space-y-4">
                      {cart.map(item => (
                        <div key={item.product.id} className="flex gap-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <h3 className="font-bold text-sm text-gray-900 line-clamp-1">{item.product.name}</h3>
                              <p className="text-gray-500 text-xs">₹{item.product.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                              <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500 hover:border-black hover:text-black text-sm font-bold">-</button>
                              <span className="font-semibold text-sm">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.product.id, 1)} className="w-6 h-6 rounded-full border flex items-center justify-center text-gray-500 hover:border-black hover:text-black text-sm font-bold">+</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t bg-gray-50">
                  <div className="flex justify-between items-center text-lg font-bold mb-4">
                    <span className="text-gray-600">{language === "EN" ? "Total" : "மொத்தம்"}</span>
                    <span className="text-black">₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button onClick={orderViaWhatsApp} className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20BD5A] flex items-center justify-center space-x-2 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>{language === "EN" ? "Order via WhatsApp" : "வாட்ஸ்அப்பில் ஆர்டர் செய்யவும்"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
