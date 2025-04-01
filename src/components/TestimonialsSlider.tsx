
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    role: "Stała klientka",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Najlepsza kawiarnia w mieście! Uwielbiam ich etiopską kawę, która ma niesamowite nuty owocowe. Obsługa zawsze miła i pomocna.",
  },
  {
    id: 2,
    name: "Jan Nowak",
    role: "Barista",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Jako barista mogę docenić jakość ziaren, które FreshRoast używa. Ich proces palenia wydobywa wyjątkowe aromaty. Zawsze wracam po więcej!",
  },
  {
    id: 3,
    name: "Marta Wiśniewska",
    role: "Blogerka kawowa",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "Odwiedziłam wiele kawiarni w całej Polsce, ale FreshRoast wyróżnia się świeżością i dbałością o szczegóły. Ich palarnia to prawdziwy skarb.",
  },
  {
    id: 4,
    name: "Piotr Adamczyk",
    role: "Przedsiębiorca",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "Codziennie zaczynam dzień od kawy z FreshRoast. Ich kolumbijska kawa to idealne połączenie intensywności i słodyczy. Polecam!",
  },
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        fill={index < rating ? "#D4A76A" : "none"}
        color={index < rating ? "#D4A76A" : "#D4A76A"}
      />
    ));
  };

  return (
    <section className="section-padding bg-coffee-cream">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Co mówią nasi klienci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Opinie osób, które doceniają naszą kawę i atmosferę
          </p>
        </div>

        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto md:mx-0 object-cover border-4 border-coffee-caramel"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">{renderStars(testimonial.rating)}</div>
                      <p className="text-lg md:text-xl italic mb-4">"{testimonial.text}"</p>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-coffee-caramel">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} className="text-coffee-darkRoast" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight size={24} className="text-coffee-darkRoast" />
          </button>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === activeIndex ? "bg-coffee-caramel" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
