import React from 'react';
import { Leaf, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-bold">Simran Trading Company</h3>
            </div>
            <p className="text-green-200 mb-4">
              Trusted Ayurvedic & Herbal Products for over 20 years. Bringing you nature's best remedies for health and wellness.
            </p>
            <div className="flex items-center space-x-2 text-green-200">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-green-200">Shop No. 3, Near Shani Mandir</p>
                  <p className="text-green-200">Peth Road, Nashik-03, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div>
                  <a href="tel:9730076826" className="text-green-200 hover:text-white transition-colors">
                    9730076826
                  </a>
                  <span className="text-green-300"> / </span>
                  <a href="tel:9860617286" className="text-green-200 hover:text-white transition-colors">
                    9860617286
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/products" className="block text-green-200 hover:text-white transition-colors">Our Products</a>
              <a href="/about" className="block text-green-200 hover:text-white transition-colors">About Us</a>
              <a href="/why-choose-us" className="block text-green-200 hover:text-white transition-colors">Why Choose Us</a>
              <a href="/how-to-order" className="block text-green-200 hover:text-white transition-colors">How to Order</a>
              <a href="/contact" className="block text-green-200 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2025 Simran Trading Company. All rights reserved. | Serving Nashik with quality Ayurvedic products for 20+ years.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;