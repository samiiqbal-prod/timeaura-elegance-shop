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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-ambient-light overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ambient-purple rounded-full opacity-20 animate-float blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ambient-green rounded-full opacity-30 animate-float blur-xl" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-ambient-purple rounded-full opacity-10 animate-scale-pulse blur-lg"></div>
        </div>
        
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroWatch}
            alt="Luxury Watch"
            className="w-full h-full object-cover animate-scale-pulse"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Time<span className="text-ambient-purple animate-pulse-glow">Aura</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-ambient-muted max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
            Discover the perfect fusion of elegance and precision. Our curated collection 
            of luxury timepieces represents the pinnacle of horological craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="font-inter text-lg px-8 py-4 hover:shadow-glow transition-all duration-500"
            >
              <Link to="/shop">Explore Collection</Link>
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              asChild
              className="font-inter text-lg px-8 py-4 hover:shadow-green transition-all duration-500"
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
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ambient opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow animate-pulse-glow">
                <Shield className="w-8 h-8 text-ambient-deep" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Authenticity Guaranteed</h3>
              <p className="text-muted-foreground text-sm">100% genuine timepieces</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow animate-pulse-glow">
                <Truck className="w-8 h-8 text-ambient-deep" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Quick & secure shipping</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow animate-pulse-glow">
                <Clock className="w-8 h-8 text-ambient-deep" />
              </div>
              <h3 className="font-playfair text-lg font-semibold mb-2">Expert Service</h3>
              <p className="text-muted-foreground text-sm">Professional support</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow animate-pulse-glow">
                <Star className="w-8 h-8 text-ambient-deep" />
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
      <section className="py-20 bg-ambient-dark text-ambient-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-ambient-purple rounded-full opacity-5 animate-float blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-ambient-green rounded-full opacity-5 animate-float blur-2xl" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              What Our Customers Say
            </h2>
            <p className="text-ambient-muted text-lg max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Read testimonials from satisfied customers who found their perfect timepiece.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-ambient-purple/20 p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ambient-purple fill-current" />
                ))}
              </div>
              <p className="text-ambient-muted mb-4">
                "Exceptional quality and service. My new watch is absolutely stunning 
                and arrived faster than expected. Highly recommend TimeAura!"
              </p>
              <div className="font-semibold text-ambient-light">Ahmed Khan</div>
              <div className="text-ambient-muted text-sm">Verified Buyer</div>
            </Card>
            <Card className="bg-gradient-card border-ambient-green/20 p-6 hover:shadow-green transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ambient-green fill-current" />
                ))}
              </div>
              <p className="text-ambient-muted mb-4">
                "Beautiful collection and excellent customer service. The WhatsApp ordering 
                process was so convenient. Will definitely shop again."
              </p>
              <div className="font-semibold text-ambient-light">Sarah Ali</div>
              <div className="text-ambient-muted text-sm">Verified Buyer</div>
            </Card>
            <Card className="bg-gradient-card border-ambient-purple/20 p-6 hover:shadow-glow transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-ambient-purple fill-current" />
                ))}
              </div>
              <p className="text-ambient-muted mb-4">
                "Premium timepieces at great prices. The attention to detail and 
                packaging was impressive. TimeAura exceeded my expectations."
              </p>
              <div className="font-semibold text-ambient-light">Hassan Sheikh</div>
              <div className="text-ambient-muted text-sm">Verified Buyer</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
