import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-luxury rounded-full flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
              <Clock className="w-5 h-5 text-luxury-black" />
            </div>
            <span className="font-playfair text-xl font-semibold text-foreground">
              TimeAura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter font-medium transition-colors hover:text-luxury-gold ${
                  isActive(item.href)
                    ? "text-luxury-gold"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="luxury"
              size="sm"
              asChild
            >
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-inter font-medium transition-colors hover:text-luxury-gold ${
                    isActive(item.href)
                      ? "text-luxury-gold"
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="luxury"
                size="sm"
                className="w-fit"
                asChild
              >
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;