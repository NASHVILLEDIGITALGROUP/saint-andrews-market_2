

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { X, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "Contact Us", page: "Contact" },
    { name: "Gallery", page: "Gallery" },
  ];

  const handleVisitUsClick = () => {
    if (currentPageName === "Home") {
      // If on home page, scroll to location section
      const element = document.getElementById("location-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to home page and then scroll to location section
      navigate("/Home");
      // Use setTimeout to ensure the page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById("location-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  // Handle hash-based navigation when page loads
  useEffect(() => {
    if (window.location.hash === "#location-section") {
      setTimeout(() => {
        const element = document.getElementById("location-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [currentPageName]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Text (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link to={createPageUrl("Home")} className="flex items-center gap-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                  alt="Saint Andrews Market Logo"
                  className="h-14 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold leading-tight" style={{ color: '#D97706' }}>
                    Saint Andrews Market
                  </h2>
                  <p className="text-sm text-brand-slate font-medium">Shell Station & Convenience Store</p>
                </div>
              </Link>
            </div>
            
            {/* Logo (Mobile) */}
             <div className="md:hidden">
                 <Link to={createPageUrl("Home")} className="flex items-center gap-3">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                      alt="Saint Andrews Market Logo"
                      className="h-10 w-auto"
                    />
                    <div>
                      <h2 className="text-lg font-bold" style={{ color: '#D97706' }}>Saint Andrews Market</h2>
                    </div>
                </Link>
             </div>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                 <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className={`text-gray-700 hover:text-brand-navy font-medium transition-colors duration-200 ${
                      currentPageName === link.page ? "text-brand-navy border-b-2 border-brand-gold pb-1" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
              ))}
              <Button 
                onClick={handleVisitUsClick}
                size="sm" 
                className="text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                style={{ backgroundColor: '#D97706' }}
              >
                Visit Us
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-brand-navy" onClick={() => setIsMenuOpen(true)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="fixed top-0 right-0 h-full w-[280px] sm:w-80 bg-white shadow-xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg text-gray-700 hover:text-brand-navy font-medium transition-colors ${
                    currentPageName === link.page ? "text-brand-navy" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleVisitUsClick();
                }}
                className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold mt-4"
              >
                Visit Us
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-white py-16 px-4 overflow-hidden" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                  alt="Saint Andrews Market Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold text-brand-gold-light">Saint Andrews Market</h3>
                  <p className="text-white text-sm font-medium">Shell Station & Convenience Store</p>
                </div>
              </div>
              <p className="text-white leading-relaxed text-center">
                Your trusted neighborhood convenience store and Shell gas station in Murfreesboro, TN. 
                Providing quality fuel, fresh food, and friendly service to our community.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-brand-gold-light text-center">Contact Information</h4>
              <div className="text-white space-y-4">
                <div className="text-center">
                  <p className="font-medium text-white mb-1">📍 Address</p>
                  <p className="text-base sm:text-lg font-medium">1725 St Andrews Dr<br />Murfreesboro, TN 37128</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-white mb-1">📞 Phone</p>
                  <p className="text-lg sm:text-xl font-medium">(615) 896-9879</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-white mb-1">🕐 Hours</p>
                  <p className="text-base sm:text-lg font-medium">Mon–Sat: 4 AM–12 AM<br />Sunday: 5 AM–12 AM</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-brand-gold-light text-center">Connect With Us</h4>
              <p className="text-white text-sm sm:text-base text-center">
                Follow us for updates, promotions,<br />
                and community news.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center">
                <button 
                  onClick={() => window.open("https://www.facebook.com/saintandrewscitgo", "_blank")}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open("https://www.instagram.com/saint_andrews_market/", "_blank")}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open("https://www.youtube.com/@SaintAndrewsMarket", "_blank")}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open("https://www.tiktok.com/@saint.andrews.mar", "_blank")}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-white flex flex-col items-center justify-center">
            <p className="text-sm sm:text-base">&copy; 2025 Saint Andrews Market. All rights reserved.</p>
            <p className="mt-2 text-sm sm:text-base">
              Website developed by{" "}
              <a
                href="https://nashvilledigitalgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold-light hover:text-brand-gold transition-colors font-medium"
              >
                Nashville Digital Group
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-brand-navy hover:bg-brand-navy-light text-white shadow-lg transition-all duration-300 z-50 animate-in fade-in"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-7 w-7" />
        </Button>
      )}
    </div>
  );
}

