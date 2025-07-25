import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { watches } from "@/data/watches";
import { Star, Shield, Clock, Truck } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";

const Index = () => {
  const featuredWatches = watches.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-luxury-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroWatch}
            alt="Luxury Watch"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Time<span className="text-luxury-gold">Aura</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-luxury-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the perfect fusion of elegance and precision. Our curated collection 
            of luxury timepieces represents the pinnacle of horological craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="font-inter text-lg px-8 py-4"
            >
              <Link to="/shop">Explore Collection</Link>
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              asChild
              className="font-inter text-lg px-8 py-4"
            >
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Authenticity Guaranteed</h3>
              <p className="text-muted-foreground text-sm">100% genuine timepieces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Quick & secure shipping</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Expert Service</h3>
              <p className="text-muted-foreground text-sm">Professional support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-luxury-black" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">5-Star Reviews</h3>
              <p className="text-muted-foreground text-sm">Trusted by customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Timepieces
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked selections from our exclusive collection, each piece representing 
              the perfect harmony of form and function.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch) => (
              <ProductCard key={watch.id} watch={watch} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="luxury"
              size="lg"
              asChild
              className="font-inter text-lg px-8 py-4"
            >
              <Link to="/shop">View All Watches</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-luxury-black text-luxury-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-luxury-gray text-lg max-w-2xl mx-auto">
              Read testimonials from satisfied customers who found their perfect timepiece.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-luxury-charcoal border-luxury-charcoal p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Exceptional quality and service. My new watch is absolutely stunning 
                and arrived faster than expected. Highly recommend TimeAura!"
              </p>
              <div className="font-semibold text-luxury-white">Ahmed Khan</div>
              <div className="text-luxury-gray text-sm">Verified Buyer</div>
            </Card>
            <Card className="bg-luxury-charcoal border-luxury-charcoal p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Beautiful collection and excellent customer service. The WhatsApp ordering 
                process was so convenient. Will definitely shop again."
              </p>
              <div className="font-semibold text-luxury-white">Sarah Ali</div>
              <div className="text-luxury-gray text-sm">Verified Buyer</div>
            </Card>
            <Card className="bg-luxury-charcoal border-luxury-charcoal p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-luxury-gray mb-4">
                "Premium timepieces at great prices. The attention to detail and 
                packaging was impressive. TimeAura exceeded my expectations."
              </p>
              <div className="font-semibold text-luxury-white">Hassan Sheikh</div>
              <div className="text-luxury-gray text-sm">Verified Buyer</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
