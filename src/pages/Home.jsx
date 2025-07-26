
import React, { useState } from "react";
import { MapPin, Phone, Clock, Star, Fuel, ShoppingCart, Coffee, Instagram, Facebook, Youtube, Zap, Package, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ProductCategories from "../components/ProductCategories";
import PromotionsCarousel from "../components/PromotionsCarousel";
import LocationMap from "../components/LocationMap";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviews = [
    {
      id: 1,
      title: "Great Neighborhood Spot!",
      content: "I love having Saint Andrews Market nearby. It's my go-to for quick snacks, drinks, and even a fresh bite when I'm on the go. The staff is always polite and welcoming. Definitely a place that feels like part of the community.",
      author: "Sarah T.",
      rating: 5
    },
    {
      id: 2,
      title: "Clean, Convenient, and Friendly",
      content: "This place has everything I need—great gas prices, clean restrooms, and a surprisingly good selection of groceries and essentials. It's always a smooth, fast stop on my way home.",
      author: "Mike R.",
      rating: 5
    },
    {
      id: 3,
      title: "Best Quick Stop in the Area!",
      content: "Saint Andrews Market is perfect for a quick stop. The hot food is fresh, the shelves are stocked, and the customer service is top-notch. It's become my regular spot for gas and snacks.",
      author: "Latoya G.",
      rating: 5
    },
    {
      id: 4,
      title: "Always a Pleasant Experience",
      content: "Every time I come in, I'm greeted with a smile. It's clean, organized, and has a little bit of everything. Love supporting a local business that actually cares.",
      author: "Chris D.",
      rating: 5
    },
    {
      id: 5,
      title: "Highly Recommend!",
      content: "Saint Andrews Market is a hidden gem! Great selection, reasonable prices, and the staff goes above and beyond to help. Whether I need gas, groceries, or a quick meal, they've got it all.",
      author: "Priya K.",
      rating: 5
    }
  ];

  // Get visible reviews with proper cycling
  const getVisibleReviews = () => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    const reviewsPerView = isMobile ? 1 : 2;
    
    if (currentReviewIndex + reviewsPerView <= reviews.length) {
      return reviews.slice(currentReviewIndex, currentReviewIndex + reviewsPerView);
    } else {
      // Handle the last slide: show last review + first review(s)
      if (isMobile) {
        return [reviews[currentReviewIndex]];
      } else {
        return [reviews[currentReviewIndex], reviews[0]];
      }
    }
  };

  const nextReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 2;
    
    setCurrentReviewIndex((prevIndex) => 
      prevIndex + reviewsPerView >= reviews.length ? 0 : prevIndex + reviewsPerView
    );
  };

  const prevReviews = () => {
    const isMobile = window.innerWidth < 768;
    const reviewsPerView = isMobile ? 1 : 2;
    
    setCurrentReviewIndex((prevIndex) => 
      prevIndex - reviewsPerView < 0 ? Math.max(0, reviews.length - reviewsPerView) : prevIndex - reviewsPerView
    );
  };

  const visibleReviews = getVisibleReviews();

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
                <a 
                  href="#location-section"
                  className="inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Direction
                </a>
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
            <p className="text-xl md:text-2xl text-brand-slate leading-relaxed max-w-4xl mx-auto mb-12">
              Your premier destination for <span className="font-semibold text-brand-gold">Quality Shell Fuel</span>, 
              <span className="font-semibold text-brand-gold"> Fresh Snacks</span>, and 
              <span className="font-semibold text-brand-gold"> Daily Essentials</span>. 
              Conveniently located in the heart of Murfreesboro, we're committed to providing 
              fast, friendly service to help you get back on your way.
            </p>
            
            {/* Quick Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#fuel-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                Shell Fuel
              </a>
              <span className="text-gray-400">•</span>
              <a href="#essentials-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                Daily Essentials
              </a>
              <span className="text-gray-400">•</span>
              <a href="#products-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                Product Selection
              </a>
              <span className="text-gray-400">•</span>
              <a href="#promotions-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                Promotions
              </a>
              <span className="text-gray-400">•</span>
              <a href="#location-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                Location
              </a>
              <span className="text-gray-400">•</span>
              <a href="#faq-section" className="text-brand-navy hover:text-brand-gold transition-colors duration-200 font-medium">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Up Section - Enhanced */}
      <section id="fuel-section" className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              <span className="text-brand-gold">Shell Quality Fuel</span> Every Time
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Experience Shell's premium fuel quality with our state-of-the-art pumps and competitive pricing. 
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
                <span className="font-semibold text-brand-gold"> Shell's advanced fuel technology</span> helps improve engine performance, 
                reduce emissions, and protect your engine from harmful deposits.
              </p>
              <p className="text-brand-slate">
                <a href="#products-section" className="text-brand-gold hover:text-brand-gold-dark underline font-medium transition-colors duration-200">
                  View our complete product selection →
                </a>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6">
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-bold text-xl sm:text-2xl text-brand-navy mb-1">Regular</div>
                  <div className="text-sm text-brand-slate">87 Octane</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="font-bold text-xl sm:text-2xl text-brand-navy mb-1">Plus</div>
                  <div className="text-sm text-brand-slate">89 Octane</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
                  <div className="font-bold text-xl sm:text-2xl text-brand-navy mb-1">Premium</div>
                  <div className="text-sm text-brand-gold-dark font-medium">93 Octane</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Essentials Section - NEW */}
      <section id="essentials-section" className="py-24 px-4 bg-gradient-to-br from-brand-gold/5 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Daily <span className="text-brand-gold">Essentials</span> & <span className="text-brand-gold">Snacks</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Stock up on your favorite snacks, beverages, and daily necessities.<br />
              <span className="font-semibold text-brand-gold">Fresh, convenient, and always available!</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Snacks & Chips */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                    <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
                    <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
                    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                    <path d="M12 2 L12 4" strokeWidth="2"/>
                    <path d="M12 20 L12 22" strokeWidth="2"/>
                    <path d="M2 12 L4 12" strokeWidth="2"/>
                    <path d="M20 12 L22 12" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Snacks & Chips</h3>
                <p className="text-brand-slate text-sm">Fresh chips, pretzels, nuts, and more. Perfect for on-the-go snacking!</p>
              </CardContent>
            </Card>

            {/* Fresh Food */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Utensils className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Fresh Food</h3>
                <p className="text-brand-slate text-sm">Hot dogs, sandwiches, fresh bakery items, and ready-to-eat meals.</p>
              </CardContent>
            </Card>

            {/* Beverages */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Coffee className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Beverages</h3>
                <p className="text-brand-slate text-sm">Coffee, energy drinks, sodas, water, and fresh juices. Stay refreshed!</p>
              </CardContent>
            </Card>

            {/* Daily Essentials */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Daily Essentials</h3>
                <p className="text-brand-slate text-sm">Batteries, medicines, personal care items, and household necessities.</p>
              </CardContent>
            </Card>
          </div>

          {/* Special Offers */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-gold/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Special Offers on Daily Essentials</h3>
              <p className="text-brand-slate mb-6">
                Save money on your favorite snacks and daily products. 
                <span className="font-semibold text-brand-gold"> Check our <a href="#promotions-section" className="underline hover:text-brand-gold-dark transition-colors duration-200">promotions section</a> for the latest deals!</span>
              </p>
              <a 
                href="#promotions-section"
                className="inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Current Promotions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products-section" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Complete <span className="text-brand-gold">Product Selection</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Everything you need for your journey, from fresh food to everyday essentials
            </p>
          </div>
          <ProductCategories />
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions-section" className="py-24 px-4 bg-white">
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

      {/* Location Section */}
      <section id="location-section" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Visit Our <span className="text-brand-gold">Location</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Conveniently located in the heart of Murfreesboro for easy access.
            </p>
            <p className="text-center mt-4">
              <a href="#faq-section" className="text-brand-gold hover:text-brand-gold-dark underline font-medium transition-colors duration-200">
                Have questions? Check our FAQ →
              </a>
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Card className="p-8 shadow-xl border-0 bg-white rounded-2xl">
                <CardContent className="p-0 space-y-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Address</h3>
                      <p className="text-brand-slate text-lg sm:text-xl font-medium">1725 St Andrews Dr<br />Murfreesboro, TN 37128</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Phone</h3>
                      <p className="text-brand-slate text-lg sm:text-xl font-medium">(615) 896-9879</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-3">Hours of Operation</h3>
                      <div className="space-y-2 text-brand-slate text-lg sm:text-xl font-medium">
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

      {/* FAQ Section */}
      <section id="faq-section" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Frequently Asked <span className="text-brand-gold">Questions</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Find answers to common questions about our products, services, and location
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4">
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-navy hover:text-brand-gold transition-colors duration-300 text-left">
                What products and services does Saint Andrews Market offer?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-brand-slate text-lg leading-relaxed">
                  We offer a wide range of essentials including Shell-quality fuel, hot food, snacks, cold beverages, bakery items, tobacco products, vape essentials, fresh juice, lottery tickets, and more. Whether you're fueling up your car or grabbing a quick bite, we've got you covered.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4">
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-navy hover:text-brand-gold transition-colors duration-300 text-left">
                Where is Saint Andrews Market located?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-brand-slate text-lg leading-relaxed">
                  We are conveniently located at{" "}
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=1725%20St%20Andrews%20Dr%2C%20Murfreesboro%2C%20TN%2037128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:text-brand-gold-dark underline font-medium transition-colors duration-200"
                  >
                    1725 St Andrews Dr, Murfreesboro, TN 37128
                  </a>
                  —easily accessible from Veterans Parkway and close to residential communities in West Murfreesboro.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4">
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-navy hover:text-brand-gold transition-colors duration-300 text-left">
                What are your hours of operation?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-brand-slate text-lg leading-relaxed">
                  We're open Monday to Saturday from 4:00 AM to 12:00 AM, and Sunday from 5:00 AM to 12:00 AM, so you can stop by early morning or late night for fuel, snacks, or everyday essentials.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4">
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-navy hover:text-brand-gold transition-colors duration-300 text-left">
                Do you sell food and drinks?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-brand-slate text-lg leading-relaxed">
                  Yes! We offer fresh hot food, snacks, chips, cold drinks, candy, bakery items, and even fresh juice. Whether you're grabbing breakfast on the go or a late-night snack, we have delicious options ready for you.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4">
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-navy hover:text-brand-gold transition-colors duration-300 text-left">
                Is Saint Andrews Market locally owned and operated?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-brand-slate text-lg leading-relaxed">
                  Yes — we're proud to be a community-driven business, focused on providing friendly service and convenience to Murfreesboro residents. We're more than just a gas station — we're your neighborhood market.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Customer Reviews Section - Carousel */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-brand-gold/10 px-6 py-3 rounded-full border border-brand-gold/20 mb-6">
              <Star className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">Customer Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              <span className="block">What Our</span>
              <span className="block text-brand-gold">Customers Say</span>
            </h2>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevReviews}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-200/50 hover:scale-110 hover:shadow-2xl group"
            >
              <ChevronLeft className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
            </button>
            
            <button
              onClick={nextReviews}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 border border-gray-200/50 hover:scale-110 hover:shadow-2xl group"
            >
              <ChevronRight className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
            </button>

            {/* Reviews Container */}
            <div className="overflow-hidden px-4 md:px-20 pb-8">
              <div className="flex gap-4 md:gap-8 justify-center items-stretch">
                {visibleReviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className="w-full max-w-sm md:max-w-lg flex-shrink-0 transform transition-all duration-700 ease-out flex"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden group transform hover:scale-105 relative flex-1 flex flex-col">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardContent className="p-6 md:p-8 relative flex-1 flex flex-col">
                        {/* Quote icon */}
                        <div className="absolute top-4 md:top-6 right-4 md:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <svg className="w-8 md:w-12 h-8 md:h-12 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>

                        <div className="flex items-center gap-1 mb-4 md:mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 md:w-5 h-4 md:h-5 text-brand-gold fill-current drop-shadow-sm" />
                          ))}
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-3 md:mb-4 group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                          {review.title}
                        </h3>
                        
                        <p className="text-brand-slate leading-relaxed mb-4 md:mb-6 text-base md:text-lg italic flex-1">
                          "{review.content}"
                        </p>
                        
                        <div className="flex items-center justify-between pt-3 md:pt-4 border-t-2 border-gray-200">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-brand-gold to-brand-gold-dark rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs md:text-sm">
                                {review.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs md:text-sm font-semibold text-brand-navy">{review.author}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center mt-12 md:mt-16 gap-2 md:gap-3">
              {Array.from({ length: Math.ceil(reviews.length / (window.innerWidth < 768 ? 1 : 2)) }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentReviewIndex(i * (window.innerWidth < 768 ? 1 : 2))}
                  className={`w-3 md:w-4 h-3 md:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentReviewIndex === i * (window.innerWidth < 768 ? 1 : 2)
                      ? 'bg-brand-gold scale-125 shadow-lg shadow-brand-gold/30' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
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
