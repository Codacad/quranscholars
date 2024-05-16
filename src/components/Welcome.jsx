import { Link } from "react-router-dom";
import WelcomeImgTeaching from "../assets/images/teaching.svg";
import WelcomeImgPhone from "../assets/images/phone-inhand.png";
import "../css/Welcome.css";
const Welcome = () => {
  return (
    <>
      <div className="welcome md:bg-red-50 bg-white grid grid-cols-2 max-md:grid-cols-1 justify-center items-center md:pt-[10%] md:pl-[10%] md:pr-[10%] md:pb-[5%] p-4 gap-4">
        <div className="img w-full md:order-2">
          <img src={WelcomeImgTeaching} alt="" className="w-full" />
        </div>
        <div className="text flex max-md:items-center max-md:text-center flex-col gap-2">
          <h1 className="md:text-4xl text-2xl font-bold leading-[1.3em] text-primary uppercase mb-2">
            Welcome to our Quran Sholar Website
          </h1>
          <p className="md:text-xl text-sm text-paragraph leading-8">
            Dear brothers and sisters, we are glad to see you on our religious
            website. Here you will find everything you need for peace in your
            soul. Our online project was created for Muslims and is supported by
            thousands of people all over the world.
          </p>
          <Link
            to={"#"}
            className="bg-primary p-2 rounded-full text-white text-center w-32 my-4"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
