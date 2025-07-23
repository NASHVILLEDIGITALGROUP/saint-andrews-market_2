import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationMap() {
  const address = "1725 St Andrews Dr, Murfreesboro, TN 37128";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <CardContent className="p-0">
        <div className="relative">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80"
            title="Saint Andrews Market Location"
          />
        </div>
        
        <div className="p-6 bg-white">
          <Button 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
            onClick={() => window.open(googleMapsUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}