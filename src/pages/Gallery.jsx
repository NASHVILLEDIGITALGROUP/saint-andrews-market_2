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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            See what's happening at Saint Andrews Market! Follow our Instagram for the latest updates, promotions, and behind-the-scenes content.
          </p>
          <Button 
            onClick={() => window.open("https://www.instagram.com/saint_andrews_market/", "_blank")}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white font-semibold py-3 px-8 text-base rounded-full shadow-lg"
          >
            @saint_andrews_market
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={imageUrl}
                alt={`Saint Andrews Market Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}