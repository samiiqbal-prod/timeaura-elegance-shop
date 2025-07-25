import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Watch } from "@/data/watches";

interface ProductCardProps {
  watch: Watch;
}

const ProductCard = ({ watch }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-gradient-card hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-2">
      <Link to={`/product/${watch.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs font-inter font-medium text-luxury-gray uppercase tracking-wide">
              {watch.category === "men" ? "Men's Collection" : "Women's Collection"}
            </span>
          </div>
          <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover:text-luxury-gold transition-colors">
            {watch.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {watch.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-playfair text-xl font-bold text-luxury-gold">
              ${watch.price.toLocaleString()}
            </span>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;