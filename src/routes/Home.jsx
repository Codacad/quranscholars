import HeroImage from "../assets/images/hero.svg";
import SeekingKnowledge from "../components/SeekingKnowledge";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonial";
import Welcome from "../components/Welcome";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import GridBackground from "../p5_sketches/GridBackground";
const Home = () => {
  const gridWrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (gridWrapperRef.current) {
      setWidth(gridWrapperRef.current.offsetWidth);
      setHeight(gridWrapperRef.current.offsetHeight);
    }
    const handleResizeWidth = () => {
      if (gridWrapperRef.current) {
        setWidth(gridWrapperRef.current.offsetWidth);
        setHeight(gridWrapperRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResizeWidth);

    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);

  return (
    <>
      <div id="main" className="home bg-gray-50 md:p-10 flex py-8 items-center">
        <div className="home-contents grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
          {/* Text Section */}
          <div className="text flex flex-col md:gap-6 max-md:items-center max-md:text-center gap-4 justify-center px-4">
            {/* Journey Title */}
            <h3 className="text-red-600 bg-red-200 w-64 rounded-3xl text-center font-bold p-2 text-sm">
              Embark on a Journey of Faith
            </h3>

            {/* Main Heading */}
            <h1 className="md:text-5xl text-3xl font-bold text-red-600 leading-[1.6em]">
              Dive into Interactive Halal Learning for All Ages, Guided by Quran
              and Hadith.
            </h1>

            {/* Description */}
            <p className="text-red-700 text-2xl">
              ہر عمر کے گروہ کے لئے ڈھالا گیا، تقویٰ، دائمی تعلیم، اور روحانی
              بڑھائی، قرآن اور حدیث کی روشنی میں۔
            </p>

            {/* Call-to-Action Button */}
            <Link
              to={"/register"}
              className="w-32 text-center bg-red-600 text-white p-2 rounded-full mt-6 hover:bg-red-700 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Image Section */}
          <div ref={gridWrapperRef} className="image">
            <GridBackground dimensions={{ width, height }} />
          </div>
        </div>
      </div>

      <Welcome />
      <SeekingKnowledge />
      <Teachers />
      <Testimonials />
    </>
  );
};

export default Home;
