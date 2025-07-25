import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { watches } from "@/data/watches";
import { ArrowLeft, Check, MessageCircle, Shield, Truck, RotateCcw } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const watch = watches.find(w => w.id === parseInt(id || "0"));

  if (!watch) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The watch you're looking for doesn't exist.
          </p>
          <Button variant="luxury" asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = `Hi TimeAura! I'm interested in the ${watch.name} (${watch.category}'s watch) priced at $${watch.price.toLocaleString()}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-luxury-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-luxury-gold transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{watch.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/shop">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-card shadow-luxury">
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {watch.category === "men" ? "Men's Collection" : "Women's Collection"}
              </Badge>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                {watch.name}
              </h1>
              <p className="font-playfair text-3xl font-bold text-luxury-gold mb-6">
                ${watch.price.toLocaleString()}
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-600">In Stock</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {watch.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {watch.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <div className="space-y-4 pt-6 border-t">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full font-inter text-lg py-4"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Click to start a WhatsApp conversation and place your order
              </p>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Authenticity</p>
                <p className="text-xs text-muted-foreground">Guaranteed</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">2-5 Days</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 Day Policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-card shadow-card-luxury">
              <h3 className="font-playfair text-xl font-semibold mb-4">Care Instructions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Avoid exposure to extreme temperatures</li>
                <li>• Keep away from strong magnetic fields</li>
                <li>• Regular cleaning with soft, dry cloth</li>
                <li>• Professional servicing every 2-3 years</li>
                <li>• Store in provided box when not in use</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card-luxury">
              <h3 className="font-playfair text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Original watch with all components</li>
                <li>• Premium presentation box</li>
                <li>• Warranty certificate</li>
                <li>• Care instructions manual</li>
                <li>• TimeAura authenticity guarantee</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;