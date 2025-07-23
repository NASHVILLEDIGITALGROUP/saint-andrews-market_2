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
  Zap
} from "lucide-react";

export default function ProductCategories() {
  const categories = [
    { name: "Fresh Food & Bakery Items", icon: Croissant, color: "bg-orange-100 text-orange-600" },
    { name: "Snacks & Chips", icon: Cookie, color: "bg-yellow-100 text-yellow-600" },
    { name: "Chocolates & Candy", icon: Candy, color: "bg-pink-100 text-pink-600" },
    { name: "Beverages & Cold Drinks", icon: Coffee, color: "bg-blue-100 text-blue-600" },
    { name: "Auto Care", icon: Car, color: "bg-gray-100 text-gray-600" },
    { name: "Lottery", icon: Ticket, color: "bg-green-100 text-green-600" },
    { name: "Ice Cream", icon: IceCream, color: "bg-purple-100 text-purple-600" },
    { name: "Bread & Rolls", icon: Wheat, color: "bg-amber-100 text-amber-600" },
    { name: "Nuts & Seeds", icon: Nut, color: "bg-stone-100 text-stone-600" },
    { name: "Fresh Juices", icon: Apple, color: "bg-lime-100 text-lime-600" },
    { name: "Medicines", icon: Pill, color: "bg-red-100 text-red-600" },
    { name: "Batteries", icon: Battery, color: "bg-indigo-100 text-indigo-600" },
    { name: "Ice Bags", icon: Snowflake, color: "bg-cyan-100 text-cyan-600" },
    { name: "Vapes", icon: Zap, color: "bg-violet-100 text-violet-600" },
    { name: "ATM Service", icon: CreditCard, color: "bg-emerald-100 text-emerald-600" },
    { name: "Tobacco Products", icon: Flame, color: "bg-slate-100 text-slate-600" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="group flex flex-col items-center text-center space-y-3 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            <category.icon className="w-8 h-8" />
          </div>
          <span className="text-sm font-medium text-gray-700 leading-tight group-hover:text-gray-900 transition-colors">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}