import { Link } from "react-router-dom";
import { Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-luxury rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-luxury-black" />
              </div>
              <span className="font-playfair text-xl font-semibold">
                TimeAura
              </span>
            </div>
            <p className="text-luxury-gray mb-6 max-w-md">
              Discover timeless elegance with our curated collection of luxury watches. 
              Each timepiece tells a story of precision, craftsmanship, and style.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-luxury-charcoal rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-luxury-charcoal rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-luxury-gray hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-luxury-gray">
              <li>WhatsApp: +92 300 123 4567</li>
              <li>Email: info@timeaura.com</li>
              <li>Mon-Sat: 9AM-8PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-charcoal mt-8 pt-8 text-center text-luxury-gray">
          <p>&copy; 2024 TimeAura. All rights reserved. Crafted with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;