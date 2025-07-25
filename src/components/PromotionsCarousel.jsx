import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromotionsCarousel() {
  const [currentPromo, setCurrentPromo] = useState(0);

  // Promotional images
  const promotions = [
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/83a12b796_WhatsAppImage2025-07-10at41856AM.jpg",
      alt: "We Have All What You Need - Saint Andrews Market"
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4b82c3af0_WhatsAppImage2025-07-16at114938PM.jpg",
      alt: "Refuel, Refresh, Reload - All in One Stop!"
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/715dcf503_WhatsAppImage2025-07-16at114937PM.jpg",
      alt: "More than Fuel - It's your Daily Convenience Hub!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  const goToPrevious = () => {
    setCurrentPromo((prev) => 
      prev === 0 ? promotions.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentPromo((prev) => (prev + 1) % promotions.length);
  };

  return (
    <div className="relative max-w-lg md:max-w-xl lg:max-w-2xl mx-auto py-8">
      <div className="relative max-w-lg mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${
              index === currentPromo ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <img
              src={promo.image}
              alt={promo.alt}
              className="w-full aspect-square object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full text-brand-navy shadow-lg transition-all duration-300 md:left-[-70px] border border-gray-200"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full text-brand-navy shadow-lg transition-all duration-300 md:right-[-70px] border border-gray-200"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPromo(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentPromo 
                ? "bg-brand-gold shadow-lg scale-110" 
                : "bg-white/70 hover:bg-white/90 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
}