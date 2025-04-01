
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold font-playfair text-center mb-12">O nas</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Ta strona jest w trakcie budowy. Wkrótce znajdziesz tu więcej informacji o naszej kawiarni i palarni.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
