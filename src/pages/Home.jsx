
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
          className="relative h-[500px] md:h-[600px] bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/08f6530f3_Herosectionsam.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
                <span className="block">Welcome to</span>
                <span className="block text-brand-gold-light">Saint Andrews Market</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                Your trusted Shell station and convenience store in Murfreesboro, TN
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleScrollToSection('location-section')}
                >
                  Get Direction
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center shadow-lg">
                <Fuel className="w-8 h-8 text-brand-gold-light" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
                Saint Andrews Market
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-brand-slate leading-relaxed max-w-4xl mx-auto">
              Your premier destination for quality fuel, fresh food, and exceptional service. 
              Conveniently located in the heart of Murfreesboro, we're committed to providing 
              fast, friendly service to help you get back on your way.
            </p>
          </div>
        </div>
      </section>

      {/* Fuel Up Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Quality Fuel, <span className="text-brand-gold">Every Time</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Experience Shell's premium fuel quality with our state-of-the-art pumps and competitive pricing
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 to-transparent rounded-2xl"></div>
              <img
                src="/image1.jpeg"
                alt="Saint Andrews Market - Shell Gas Station"
                className="w-full h-96 object-cover object-center rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-4 border-white/20 group-hover:border-brand-gold/30"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <span className="text-sm font-semibold text-brand-navy">Shell Quality Fuel</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-brand-navy/5 px-6 py-3 rounded-full border border-brand-navy/10">
                <Fuel className="w-6 h-6 text-brand-navy" />
                <span className="text-brand-navy font-semibold">Shell Premium Quality</span>
              </div>
              <p className="text-xl text-brand-slate leading-relaxed">
                We offer all fuel grades—from Regular to Premium—ensuring your vehicle gets precisely what it needs. 
                Our modern pumps provide a quick, clean, and efficient fueling experience every time.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-bold text-2xl text-brand-navy mb-1">Regular</div>
                  <div className="text-sm text-brand-slate">87 Octane</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-bold text-2xl text-brand-navy mb-1">Plus</div>
                  <div className="text-sm text-brand-slate">89 Octane</div>
                </div>
                <div className="text-center p-6 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
                  <div className="font-bold text-2xl text-brand-navy mb-1">Premium</div>
                  <div className="text-sm text-brand-gold-dark font-medium">93 Octane</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Convenience & <span className="text-brand-gold">Quality</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Everything you need for your journey, from fresh food to everyday essentials
            </p>
          </div>
          <ProductCategories />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Current <span className="text-brand-gold">Promotions</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Take advantage of our latest offers and save on your favorite products
            </p>
          </div>
          <PromotionsCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Everything You Need, All in One Place</h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            From fresh food to automotive essentials, we've got you covered. 
            Stop by today and discover why Saint Andrews Market is your trusted convenience destination.
          </p>
          <button 
            className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => handleScrollToSection('location-section')}
          >
            Visit Our Store
          </button>
        </div>
      </div>

      {/* Location Section */}
      <section id="location-section" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Visit Our <span className="text-brand-gold">Location</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Conveniently located in the heart of Murfreesboro for easy access
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Card className="p-8 shadow-xl border-0 bg-white rounded-2xl">
                <CardContent className="p-0 space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-brand-navy mb-2">Address</h3>
                      <p className="text-brand-slate text-lg">1725 St Andrews Dr<br />Murfreesboro, TN 37128</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-brand-navy mb-2">Phone</h3>
                      <p className="text-brand-slate text-xl font-medium">(615) 896-9879</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-brand-navy mb-3">Hours of Operation</h3>
                      <div className="space-y-2 text-brand-slate text-lg">
                        <p><span className="font-medium">Monday–Saturday:</span> 4 AM–12 AM</p>
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
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Star className="w-10 h-10 text-brand-gold hidden md:block" />
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              <span className="block">Community-Driven</span>
              <span className="block text-brand-gold">Customer-Focused</span>
            </h2>
            <Star className="w-10 h-10 text-brand-gold hidden md:block" />
          </div>
          <p className="text-xl md:text-2xl text-brand-slate leading-relaxed mb-12 max-w-4xl mx-auto">
            At Saint Andrews Market, we're proud to be part of the Murfreesboro community. 
            Our commitment is simple: to provide exceptional service in a welcoming environment. 
            Stop by today and experience why locals keep choosing Saint Andrews Market!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-lg rounded-full px-8 py-4 border border-gray-200">
              <span className="text-brand-navy font-semibold text-lg">🤝 Friendly Service</span>
            </div>
            <div className="bg-white shadow-lg rounded-full px-8 py-4 border border-gray-200">
              <span className="text-brand-navy font-semibold text-lg">⚡ Quick & Easy</span>
            </div>
            <div className="bg-white shadow-lg rounded-full px-8 py-4 border border-gray-200">
              <span className="text-brand-navy font-semibold text-lg">🏘️ Local Community</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
