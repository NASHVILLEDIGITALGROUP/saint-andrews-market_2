
import React from "react";
import { MapPin, Phone, Clock, Star, Fuel, ShoppingCart, Coffee, Instagram, Facebook, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ProductCategories from "../components/ProductCategories";
import PromotionsCarousel from "../components/PromotionsCarousel";
import LocationMap from "../components/LocationMap";

export default function Home() {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero-section" className="relative">
        <div 
          className="relative h-96 md:h-[500px] bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/08f6530f3_Herosectionsam.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-between text-center p-4 py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md max-w-3xl">
              Welcome to Saint Andrews Market – Your Local Convenience Hub!
            </h1>
            <div>
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Visit Us Today & Grab Your Snacks!
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Fuel className="w-6 h-6 text-gray-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Saint Andrews Market
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Need a quick stop in Murfreesboro? Saint Andrews Market, your friendly neighborhood Shell gas station and convenience store, offers more than just a fill-up. Conveniently located in the heart of your residential community, we provide easy access and fast, friendly service to help you recharge and get back on your way swiftly.
            </p>
          </div>
        </div>
      </section>

      {/* Fuel Up Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="block">Fuel Up</span>
            <span className="block">Fast & Easy</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4c0f680af_shellgasstation.jpg"
                alt="Shell gas station at night"
                className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-yellow-50 px-4 py-2 rounded-full">
                <Fuel className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-700 font-medium">Shell Quality Fuel</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                We offer all fuel types—from Regular to Premium—ensuring your vehicle gets precisely what it needs. Enjoy a quick, clean, and efficient fuel-up experience every time.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="font-bold text-2xl text-gray-900">Regular</div>
                  <div className="text-sm text-gray-600">87 Octane</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="font-bold text-2xl text-gray-900">Plus</div>
                  <div className="text-sm text-gray-600">89 Octane</div>
                </div>
                <div className="col-span-2 lg:col-span-1 text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="font-bold text-2xl text-gray-900">Premium</div>
                  <div className="text-sm text-yellow-700">93 Octane</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Snacks, Drinks & Essentials
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Everything you need for your journey, from fresh food to everyday essentials
          </p>
          <ProductCategories />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Current Promotions
          </h2>
          <PromotionsCarousel />
        </div>
      </section>

      {/* Location Section */}
      <section id="location-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Visit Our Location
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="p-8 shadow-lg border-0 bg-white">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">1725 St Andrews Dr<br />Murfreesboro, TN 37128</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700 text-lg">(615) 896-9879</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <p><span className="font-medium">Mon–Sat:</span> 4 AM–12 AM</p>
                        <p><span className="font-medium">Sunday:</span> 5 AM–12 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:sticky lg:top-8">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-8 h-8 text-gray-900 hidden md:block" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="block">Community-Driven</span>
              <span className="block">Customer-Focused</span>
            </h2>
            <Star className="w-8 h-8 text-gray-900 hidden md:block" />
          </div>
          <p className="text-xl text-gray-800 leading-relaxed mb-8">
            At Saint Andrews Market, we're proud to be part of the Murfreesboro community. Our commitment is simple: to provide fast, friendly service in a comfortable, welcoming environment. Stop by today and experience why locals keep choosing Saint Andrews Market!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
              <span className="text-gray-900 font-medium">🤝 Friendly Service</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
              <span className="text-gray-900 font-medium">⚡ Quick & Easy</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200">
              <span className="text-gray-900 font-medium">🏘️ Local Community</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
