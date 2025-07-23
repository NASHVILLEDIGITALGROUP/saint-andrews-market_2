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
      <div className="relative max-w-lg mx-auto overflow-hidden rounded-2xl shadow-lg">
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
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-200/80 hover:bg-gray-300 rounded-full text-gray-800 shadow-md transition-all duration-300 md:left-[-60px]"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-200/80 hover:bg-gray-300 rounded-full text-gray-800 shadow-md transition-all duration-300 md:right-[-60px]"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPromo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentPromo 
                ? "bg-yellow-400" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}