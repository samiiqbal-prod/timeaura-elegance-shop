import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Clock, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About TimeAura
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Born from a passion for exceptional timepieces, TimeAura represents the perfect 
            fusion of traditional craftsmanship and contemporary elegance. We believe that 
            a watch is more than just a tool to tell time—it's a statement of style, 
            precision, and personal expression.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TimeAura was founded with a simple mission: to make luxury timepieces 
                accessible to everyone who appreciates fine craftsmanship. Our journey 
                began when our founder, a passionate watch collector, realized the gap 
                between exceptional quality and affordability in the watch market.
              </p>
              <p>
                Today, we partner with renowned manufacturers and artisans worldwide to 
                curate a collection that embodies both timeless elegance and contemporary 
                innovation. Each watch in our collection is carefully selected for its 
                superior quality, distinctive design, and exceptional value.
              </p>
              <p>
                We believe that everyone deserves to own a watch that not only keeps 
                perfect time but also tells their unique story. That's why we're committed 
                to offering exceptional timepieces at accessible prices, without compromising 
                on quality or service.
              </p>
            </div>
          </div>
          <div className="bg-gradient-card rounded-lg p-8 shadow-card-luxury">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">5+ Years</h3>
                <p className="text-muted-foreground text-sm">In Business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">10k+</h3>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">100%</h3>
                <p className="text-muted-foreground text-sm">Authentic</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">5★</h3>
                <p className="text-muted-foreground text-sm">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-card shadow-card-luxury">
            <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-luxury-black" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Quality First</h3>
            <p className="text-muted-foreground">
              Every timepiece undergoes rigorous quality checks to ensure it meets 
              our exacting standards for precision and durability.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card-luxury">
            <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-luxury-black" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Customer Care</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our priority. We provide personalized service 
              and support to help you find the perfect timepiece.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-card shadow-card-luxury">
            <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-luxury-black" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Timeless Design</h3>
            <p className="text-muted-foreground">
              We curate watches that transcend trends, offering designs that remain 
              elegant and relevant for years to come.
            </p>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="bg-luxury-black text-luxury-white rounded-lg p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-luxury-gray text-lg max-w-3xl mx-auto leading-relaxed">
            To make luxury timepieces accessible to everyone, while maintaining the highest 
            standards of quality and service. We believe that great design and exceptional 
            craftsmanship should be available to all who appreciate the art of timekeeping.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;