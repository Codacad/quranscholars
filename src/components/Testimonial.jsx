import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      role: "Student of Quranic Studies",
      quote:
        "This platform has brought me closer to understanding the Quran and its teachings. The resources are comprehensive and spiritually uplifting.",
      image: "/path/to/avatar1.jpg",
    },
    {
      name: "Fatimah Al-Zahra",
      role: "Islamic Scholar",
      quote:
        "As a teacher of Islamic studies, I highly recommend this platform. The lectures and materials are well-structured and easy to follow, even for beginners.",
      image: "/path/to/avatar2.jpg",
    },
    {
      name: "Imam Khalid Bin Zayed",
      role: "Religious Leader",
      quote:
        "I have been recommending this platform to my congregation. It offers valuable knowledge and helps strengthen one's connection with Allah and the Prophet (PBUH).",
      image: "/path/to/avatar3.jpg",
    },
  ];

  return (
    <section className="testimonials bg-gray-50 py-16 px-6">
      <div className="container md:w-[80%] mx-auto text-center">
        <h2 className="text-red-900 text-4xl font-semibold mb-8">
          What Our Students Say
        </h2>
        <p className="text-lg mb-12 text-gray-700">
          Hear from our learners who have gained valuable Islamic knowledge and
          spiritual insights through our platform.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-lg p-6 text-left transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}}`}
                  alt={`${testimonial.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-xl text-red-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="quote-icon mb-4 text-red-900">
                <FaQuoteLeft size={30} />
              </div>

              <p className="testimonial-quote text-gray-700 text-lg italic">
                {testimonial.quote}
              </p>

              <div className="quote-icon mt-4 text-red-900">
                <FaQuoteRight size={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
