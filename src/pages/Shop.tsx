import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { watches } from "@/data/watches";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [filter, setFilter] = useState<"all" | "men" | "women">("all");

  const filteredWatches = filter === "all" 
    ? watches 
    : watches.filter(watch => watch.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete range of luxury timepieces, from classic dress watches 
            to modern sports chronographs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-secondary rounded-lg p-1">
            <Button
              variant={filter === "all" ? "luxury" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-md"
            >
              All Watches
            </Button>
            <Button
              variant={filter === "men" ? "luxury" : "ghost"}
              size="sm"
              onClick={() => setFilter("men")}
              className="rounded-md"
            >
              Men's Collection
            </Button>
            <Button
              variant={filter === "women" ? "luxury" : "ghost"}
              size="sm"
              onClick={() => setFilter("women")}
              className="rounded-md"
            >
              Women's Collection
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWatches.map((watch) => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>

        {/* Empty State */}
        {filteredWatches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No watches found in this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;