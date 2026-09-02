import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div>
      <div />
      <div>
        <div>
          <img
            src={`https://i.pravatar.cc/150?img=${index + 10}`}
            alt={`${testimonial.name} avatar`} />

          
          <div>
            <p>
              {testimonial.name}
            </p>
            <p>
              {testimonial.role}
            </p>
          </div>
        </div>

        <div>
          <FaQuoteLeft size={24} />
        </div>

        <p>
          {testimonial.quote}
        </p>

        <div>
          <FaQuoteRight size={24} />
        </div>
      </div>
    </div>);

};

export default TestimonialCard;
