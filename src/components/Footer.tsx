
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock newsletter signup
    if (email) {
      toast({
        title: "Zapisano do newslettera!",
        description: "Dziękujemy za dołączenie do naszej społeczności.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-coffee-espresso text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              Fresh<span className="text-coffee-caramel">Roast</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Kawiarnia i palarnia specjalizująca się w najwyższej jakości kawie z całego świata,
              palonej z pasją i doświadczeniem od 2010 roku.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-coffee-caramel transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-coffee-caramel transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-coffee-caramel transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  Sklep online
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Informacje kontaktowe</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-coffee-caramel flex-shrink-0 mt-1" />
                <span className="text-gray-300">ul. Kawowa 15, 00-123 Warszawa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-coffee-caramel flex-shrink-0" />
                <a href="tel:+48123456789" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-coffee-caramel flex-shrink-0" />
                <a href="mailto:kontakt@freshroast.pl" className="text-gray-300 hover:text-coffee-caramel transition-colors">
                  kontakt@freshroast.pl
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-coffee-caramel flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Pon - Pt: 7:00 - 20:00</p>
                  <p>Sob - Ndz: 8:00 - 21:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Zapisz się, aby otrzymywać informacje o promocjach i nowościach
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Twój adres email"
                className="w-full bg-white bg-opacity-10 rounded-md py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coffee-caramel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-coffee-caramel text-white rounded-md px-3 hover:bg-opacity-90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FreshRoast. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-coffee-caramel transition-colors text-sm">
              Polityka prywatności
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-coffee-caramel transition-colors text-sm">
              Regulamin
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-coffee-caramel transition-colors text-sm">
              Polityka cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
