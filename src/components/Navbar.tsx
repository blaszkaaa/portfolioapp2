
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-coffee-darkRoast">
          Fresh<span className="text-coffee-caramel">Roast</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-coffee-caramel transition-colors">
            Strona główna
          </Link>
          <Link to="/about" className="font-medium hover:text-coffee-caramel transition-colors">
            O nas
          </Link>
          <Link to="/menu" className="font-medium hover:text-coffee-caramel transition-colors">
            Menu
          </Link>
          <Link to="/shop" className="font-medium hover:text-coffee-caramel transition-colors">
            Sklep
          </Link>
          <Link to="/blog" className="font-medium hover:text-coffee-caramel transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium hover:text-coffee-caramel transition-colors">
            Kontakt
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-coffee-darkRoast hover:text-coffee-caramel transition-colors" />
            <span className="absolute -top-2 -right-2 bg-coffee-caramel text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-coffee-darkRoast" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[56px] left-0 w-full bg-white bg-opacity-95 shadow-md transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link to="/" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            Strona główna
          </Link>
          <Link to="/about" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            O nas
          </Link>
          <Link to="/menu" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to="/shop" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            Sklep
          </Link>
          <Link to="/blog" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            Blog
          </Link>
          <Link to="/contact" className="font-medium py-2 hover:text-coffee-caramel transition-colors" onClick={toggleMenu}>
            Kontakt
          </Link>
          <Link to="/cart" className="font-medium py-2 hover:text-coffee-caramel transition-colors flex items-center" onClick={toggleMenu}>
            <ShoppingCart className="mr-2" size={20} />
            Koszyk (0)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
