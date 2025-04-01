
import { Coffee, Users, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nasza historia
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                FreshRoast to miejsce, gdzie pasja do kawy łączy się z wieloletnim doświadczeniem. 
                Nasza przygoda rozpoczęła się w 2010 roku, gdy jako niewielka kawiarnia serwowaliśmy 
                kawę z najlepszych palarni w Polsce.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                W 2015 roku postanowiliśmy pójść o krok dalej i otworzyliśmy własną palarnię. 
                Od tego czasu sami wybieramy najlepsze ziarna z całego świata, 
                które palmy z dbałością o każdy detal procesu, wydobywając z nich to, co najlepsze.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Dziś FreshRoast to nie tylko kawiarnia i palarnia, ale także społeczność pasjonatów kawy, 
                którzy dzielą się wiedzą i doświadczeniem podczas organizowanych przez nas warsztatów i degustacji.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-coffee-caramel bg-opacity-20 rounded-full p-4 mb-4">
                    <Coffee size={32} className="text-coffee-darkRoast" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Własna palarnia</h3>
                  <p className="text-gray-600">Świeżo palona kawa każdego dnia</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-coffee-caramel bg-opacity-20 rounded-full p-4 mb-4">
                    <Users size={32} className="text-coffee-darkRoast" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Doświadczeni bariści</h3>
                  <p className="text-gray-600">Mistrzowie w swoim fachu</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-coffee-caramel bg-opacity-20 rounded-full p-4 mb-4">
                    <Clock size={32} className="text-coffee-darkRoast" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Od 2010 roku</h3>
                  <p className="text-gray-600">Ponad dekada doświadczenia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div
              className={`h-full grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              <div className="overflow-hidden rounded-lg h-72">
                <img
                  src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Nasze wnętrze"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-72 transform translate-y-8">
                <img
                  src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Przygotowanie kawy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-72 transform translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Palenie kawy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-72 transform -translate-y-4">
                <img
                  src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Nasza kawa"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
