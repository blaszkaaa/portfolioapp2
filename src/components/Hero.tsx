
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after component mounts to trigger animation
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Odkryj smak świeżo palonej kawy
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Nasza kawiarnia i palarnia oferuje najwyższej jakości kawę z całego świata, 
            paloną na miejscu z dbałością o każdy szczegół.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shop"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Zamów online <ChevronRight size={20} />
            </Link>
            <Link
              to="/menu"
              className="bg-transparent text-white border-2 border-white py-3 px-6 rounded-md font-medium transition-all hover:bg-white hover:text-coffee-darkRoast flex items-center justify-center gap-2"
            >
              Zobacz menu <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
