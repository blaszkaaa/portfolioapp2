
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-coffee-darkRoast text-white relative overflow-hidden">
      {/* Background overlay pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Odkryj świat wyjątkowych doznań kawowych
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            Dołącz do naszej społeczności miłośników kawy. Zamawiaj online, odwiedź nas lub zapisz się na warsztaty.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shop"
              className="bg-coffee-caramel text-white py-3 px-8 rounded-md font-medium transition-all hover:bg-opacity-90 flex items-center justify-center gap-2"
            >
              Zamów kawę online <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-md font-medium transition-all hover:bg-white hover:text-coffee-darkRoast flex items-center justify-center gap-2"
            >
              Znajdź nas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
