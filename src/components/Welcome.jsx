import { Link } from "react-router-dom";
import WelcomeImgTeaching from "../assets/images/teaching.svg";
import WelcomeImgPhone from "../assets/images/phone-inhand.png";
import "../css/Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome bg-white md:bg-red-50 grid md:grid-cols-2 max-md:grid-cols-1 justify-center items-center md:pt-16 md:px-16 py-8 px-4 gap-8">
        
        {/* Image Section */}
        <div className="img w-full md:order-2 flex justify-center">
          <img src={WelcomeImgTeaching} alt="Teaching" className="w-full max-w-md rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="text flex flex-col gap-6 max-md:items-center max-md:text-center">
          <h1 className="text-red-600 text-4xl font-extrabold leading-[1.3em] mb-4 uppercase tracking-wide">
            Welcome to our Quran Scholar Website
          </h1>
          <p className="text-paragraph md:text-xl text-base font-medium leading-7">
            Dear brothers and sisters, we are glad to see you on our religious website. Here, you will find everything you need to bring peace to your soul. Our online project was created for Muslims and is supported by thousands of people all over the world.
          </p>

          <Link
            to="#"
            className="bg-red-600 hover:bg-red-700 transition-all p-3 rounded-full text-white text-center w-40 my-6 md:w-48 shadow-lg transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
