import React from "react";
import { 
  Croissant, 
  Cookie, 
  Candy, 
  Coffee, 
  Car, 
  Ticket, 
  IceCream, 
  Wheat,
  Nut,
  Apple,
  Pill,
  Battery,
  Snowflake,
  Flame,
  CreditCard,
  Zap,
  Fuel
} from "lucide-react";

export default function ProductCategories() {
  const categories = [
    { name: "Shell Fuel", icon: Fuel, color: "bg-yellow-50 text-yellow-600 border-yellow-200", featured: true },
    { name: "Fresh Food & Bakery", icon: Croissant, color: "bg-orange-50 text-orange-600 border-orange-200", featured: true },
    { name: "Snacks & Chips", icon: Cookie, color: "bg-amber-50 text-amber-600 border-amber-200", featured: true },
    { name: "Beverages & Drinks", icon: Coffee, color: "bg-blue-50 text-blue-600 border-blue-200", featured: true },
    { name: "Daily Essentials", icon: Battery, color: "bg-green-50 text-green-600 border-green-200", featured: true },
    { name: "Chocolates & Candy", icon: Candy, color: "bg-pink-50 text-pink-600 border-pink-200", featured: true },
    { name: "Auto Care", icon: Car, color: "bg-gray-50 text-gray-600 border-gray-200", featured: true },
    { name: "Ice Cream", icon: IceCream, color: "bg-purple-50 text-purple-600 border-purple-200", featured: true },
    { name: "Bread & Rolls", icon: Wheat, color: "bg-amber-50 text-amber-600 border-amber-200" },
    { name: "Nuts & Seeds", icon: Nut, color: "bg-stone-50 text-stone-600 border-stone-200" },
    { name: "Fresh Juices", icon: Apple, color: "bg-lime-50 text-lime-600 border-lime-200" },
    { name: "Medicines", icon: Pill, color: "bg-red-50 text-red-600 border-red-200" },
    { name: "Ice Bags", icon: Snowflake, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { name: "Vapes", icon: Zap, color: "bg-violet-50 text-violet-600 border-violet-200" },
    { name: "ATM Service", icon: CreditCard, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { name: "Tobacco Products", icon: Flame, color: "bg-slate-50 text-slate-600 border-slate-200" },
    { name: "Lottery", icon: Ticket, color: "bg-green-50 text-green-600 border-green-200" }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const additionalCategories = categories.filter(cat => !cat.featured);

  return (
    <div className="space-y-12">
      {/* Featured Categories - Gas, Food, Snacks, Essentials */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {featuredCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
          >
            <div className="text-center space-y-3 sm:space-y-4">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-brand-navy text-sm sm:text-lg leading-tight group-hover:text-brand-gold transition-colors">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {additionalCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
          >
            <div className="text-center space-y-3 sm:space-y-4">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-semibold text-brand-navy text-sm sm:text-lg leading-tight group-hover:text-brand-gold transition-colors">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8">
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Everything You Need, All in One Place</h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            From quality Shell fuel to fresh snacks and daily essentials, we've got you covered. 
            Stop by today and discover why Saint Andrews Market is your trusted convenience destination.
          </p>
          <button 
            className="bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('location-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Visit Our Store
          </button>
        </div>
      </div>
    </div>
  );
}