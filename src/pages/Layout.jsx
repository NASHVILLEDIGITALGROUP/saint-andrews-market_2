

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "./utils";
import { X, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
      // If on other pages, navigate to home page with hash
      window.location.href = createPageUrl("Home") + "#location-section";
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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Text (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <Link to={createPageUrl("Home")}>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                  alt="Saint Andrews Market Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <Link to={createPageUrl("Home")}>
                <h1 className="text-2xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors">
                  Saint Andrews Market
                </h1>
              </Link>
            </div>
            
            {/* Logo (Mobile) */}
             <div className="md:hidden">
                 <Link to={createPageUrl("Home")}>
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                      alt="Saint Andrews Market Logo"
                      className="h-10 w-auto"
                    />
                </Link>
             </div>
             
             {/* Centered Title (Mobile) */}
             <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <Link to={createPageUrl("Home")}>
                    <h1 className="text-yellow-600 text-2xl font-bold">
                      Saint Andrews Market
                    </h1>
                </Link>
            </div>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                 <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className={`text-gray-700 hover:text-yellow-600 font-medium transition-colors ${
                      currentPageName === link.page ? "text-yellow-600 border-b-2 border-yellow-600 pb-1" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
              ))}
              <Button 
                onClick={handleVisitUsClick}
                size="sm" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6"
              >
                Visit Us!
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
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
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.page)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg text-gray-700 hover:text-yellow-600 font-medium transition-colors ${
                    currentPageName === link.page ? "text-yellow-600" : ""
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
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold mt-4"
              >
                Visit Us!
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
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/387602c5e_Untitleddesign32.png"
                  alt="Saint Andrews Market Logo"
                  className="h-10 w-auto"
                />
                <h3 className="text-2xl font-bold">Saint Andrews Market</h3>
              </div>
              <p className="text-gray-400">
                Your friendly neighborhood Shell station in Murfreesboro, TN
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>📍 1725 St Andrews Dr<br />Murfreesboro, TN 37128</p>
                <p>📞 (615) 896-9879</p>
                <p>🕐 Mon–Sat: 4 AM–12 AM<br />🕐 Sun: 5 AM–12 AM</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect With Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => window.open("https://www.facebook.com/saintandrewscitgo", "_blank")}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open("https://www.instagram.com/saint_andrews_market/", "_blank")}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={() => window.open("https://www.youtube.com/@SaintAndrewsMarket", "_blank")}
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Saint Andrews Market. All rights reserved.</p>
            <p className="mt-2">
              Developed By{" "}
              <a
                href="https://nashvilledigitalgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
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
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg transition-all duration-300 z-50 animate-in fade-in"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-7 w-7" />
        </Button>
      )}
    </div>
  );
}

