
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

// Mock data for coffee products
const coffeeProducts = [
  {
    id: 1,
    name: "Etiopska Yirgacheffe",
    description: "Jasno palona kawa o kwiatowych nutach i cytrusowej kwasowości",
    image: "https://images.unsplash.com/photo-1559525839-d31a8a61d6d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 39.99,
    category: "specialty",
  },
  {
    id: 2,
    name: "Kolumbijska Supremo",
    description: "Średnio palona kawa o orzechowym aromacie i karmelowej słodyczy",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 34.99,
    category: "classic",
  },
  {
    id: 3,
    name: "Sumatrzańska Mandheling",
    description: "Ciemno palona kawa o ziemistym charakterze i niskiej kwasowości",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 36.99,
    category: "dark",
  },
  {
    id: 4,
    name: "Gwatemalska Antigua",
    description: "Wyważona kawa o czekoladowym posmaku i delikatnej kwasowości",
    image: "https://images.unsplash.com/photo-1565600129909-605a61e4331c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 37.99,
    category: "medium",
  },
  {
    id: 5,
    name: "Kostarykańska Tarrazu",
    description: "Jasno palona kawa o owocowych nutach i wyrazistej kwasowości",
    image: "https://images.unsplash.com/photo-1575021707136-8d9d15ad75e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    price: 38.99,
    category: "specialty",
  },
];

const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % coffeeProducts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + coffeeProducts.length) % coffeeProducts.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="section-padding bg-coffee-paper">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasza oferta kaw</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odkryj wyjątkowe smaki kaw z całego świata, palonych z pasją w naszej palarni
          </p>
        </div>

        <div className="relative overflow-hidden" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {coffeeProducts.map((product) => (
              <div
                key={product.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="flex flex-col md:flex-row items-center coffee-card overflow-hidden">
                  <div className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 flex flex-col items-start">
                    <div className="inline-block bg-coffee-caramel bg-opacity-20 text-coffee-darkRoast text-sm px-3 py-1 rounded-full mb-4">
                      {product.category === "specialty" ? "Kawa speciality" : 
                       product.category === "classic" ? "Klasyczna" : 
                       product.category === "dark" ? "Ciemno palona" : "Średnio palona"}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xl font-bold">{product.price.toFixed(2)} zł</span>
                      <button className="flex items-center gap-2 bg-coffee-darkRoast text-white py-2 px-4 rounded-md transition-colors hover:bg-coffee-mediumRoast">
                        <ShoppingCart size={18} />
                        Dodaj do koszyka
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} className="text-coffee-darkRoast" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight size={24} className="text-coffee-darkRoast" />
          </button>

          <div className="flex justify-center mt-6">
            {coffeeProducts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === activeIndex ? "bg-coffee-caramel" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
