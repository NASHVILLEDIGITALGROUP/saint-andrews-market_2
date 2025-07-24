import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function Gallery() {
  const galleryImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/fc99221ac_WhatsAppImage2025-07-16at114938PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c70b9dc6c_WhatsAppImage2025-07-16at114937PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/355a9d58c_WhatsAppImage2025-07-10at41856AM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/eaa7511e7_WhatsAppImage2025-07-10at125043AM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cd63253d2_WhatsAppImage2025-07-08at124749AM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b39f0bee5_WhatsAppImage2025-07-08at124748AM.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our <span className="text-brand-gold">Gallery</span>
          </h1>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto mb-8">
            See what's happening at Saint Andrews Market! Follow our Instagram for the latest updates, 
            promotions, and behind-the-scenes content.
          </p>
          <Button 
            onClick={() => window.open("https://www.instagram.com/saint_andrews_market/", "_blank")}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white font-semibold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @saint_andrews_market
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl aspect-square group">
              <img
                src={imageUrl}
                alt={`Saint Andrews Market Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}