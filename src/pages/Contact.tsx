import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question about our timepieces? Ready to place an order? 
            We're here to help you find the perfect watch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">WhatsApp (Recommended)</h3>
                    <p className="text-muted-foreground mb-3">
                      Quick and easy ordering through WhatsApp. Get instant responses 
                      and personalized assistance.
                    </p>
                    <Button
                      variant="whatsapp"
                      asChild
                      className="w-full sm:w-auto"
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
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-2">+92 300 123 4567</p>
                    <p className="text-sm text-muted-foreground">
                      Available Monday - Saturday, 9AM - 8PM
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">info@timeaura.com</p>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-luxury-black" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Why Choose WhatsApp */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-8">
              Why Order via WhatsApp?
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <h3 className="font-playfair text-lg font-semibold mb-3">Instant Communication</h3>
                <p className="text-muted-foreground">
                  Get immediate responses to your questions and receive real-time updates 
                  about your order status.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <h3 className="font-playfair text-lg font-semibold mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Receive one-on-one assistance to help you choose the perfect timepiece 
                  based on your preferences and budget.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <h3 className="font-playfair text-lg font-semibold mb-3">Secure & Convenient</h3>
                <p className="text-muted-foreground">
                  Place your order securely through WhatsApp with detailed product 
                  information and transparent pricing.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-card-luxury">
                <h3 className="font-playfair text-lg font-semibold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick processing and delivery coordination directly through WhatsApp 
                  for a seamless experience.
                </p>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-luxury-black text-luxury-white rounded-lg p-8 mt-8 text-center">
              <h3 className="font-playfair text-xl font-bold mb-4">Ready to Order?</h3>
              <p className="text-luxury-gray mb-6">
                Start a conversation with us on WhatsApp to begin your timepiece journey.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="font-inter text-lg px-8 py-4"
              >
                <a
                  href="https://wa.me/923001234567?text=Hi TimeAura, I'm interested in your watch collection."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;