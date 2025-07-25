import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link for nashvilledigitalgroup@gmail.com only
      const emailContent = `
New inquiry from Saint Andrews Market website:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
      `;

      const subject = "New Contact Form Submission - Saint Andrews Market";
      const body = encodeURIComponent(emailContent);
      
      // Open email client with pre-filled content - only to nashvilledigitalgroup@gmail.com
      const mailtoLink = `mailto:nashvilledigitalgroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.open(mailtoLink);

      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error opening email client:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Get In <span className="text-brand-gold">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">
            Have a question or need assistance? We'd love to hear from you. 
            Contact us today and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 sm:p-8 shadow-xl border-0 bg-white rounded-2xl">
              <CardHeader className="p-0 mb-6 sm:mb-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-brand-navy">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Address</h3>
                    <p className="text-brand-slate text-base sm:text-lg"><span className="font-medium">1725 St Andrews Dr</span><br /><span className="font-medium">Murfreesboro, TN 37128</span></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Phone</h3>
                    <p className="text-brand-slate text-base sm:text-lg"><span className="font-medium">(615) 896-9879</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Hours of Operation</h3>
                    <div className="space-y-2 text-brand-slate text-base sm:text-lg">
                      <p><span className="font-medium">Monday–Saturday:</span> <span className="font-medium">4 AM–12 AM</span></p>
                      <p><span className="font-medium">Sunday:</span> <span className="font-medium">5 AM–12 AM</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl text-brand-navy mb-2">Email</h3>
                    <p className="text-brand-slate text-base sm:text-lg break-words"><span className="font-medium">saintandrewsmarket@gmail.com</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-6 sm:p-8 shadow-xl border-0 bg-white rounded-2xl">
              <CardHeader className="p-0 mb-6 sm:mb-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-brand-navy">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {submitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-brand-navy mb-3">
                      Thank You For Reaching Out To Us!
                    </h3>
                    <p className="text-brand-slate text-base sm:text-lg mb-6">
                      Our Team Will Reach You Soon.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-8 py-3 rounded-lg"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-32 border-gray-300 focus:border-brand-navy focus:ring-brand-navy"
                        placeholder="Enter your message"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}