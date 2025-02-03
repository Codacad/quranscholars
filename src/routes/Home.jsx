import HeroImage from "../assets/images/hero.svg";
import SeekingKnowledge from "../components/SeekingKnowledge";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonial";
import Welcome from "../components/Welcome";
import "../css/Home.css";
const Home = () => {
  return (
    <>
      <div
        id="main"
        className="home bg-gray-50 md:p-10 flex md:min-h-[100vh] py-8 items-center"
      >
        <div className="home-contents grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
          {/* Text Section */}
          <div className="text flex flex-col md:gap-6 max-md:items-center max-md:text-center gap-4 justify-center px-4">
            {/* Journey Title */}
            <h3 className="text-red-600 bg-red-200 w-64 rounded-3xl text-center font-bold p-2 text-sm">
              Embark on a Journey of Faith
            </h3>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-red-600 leading-[1.6em]">
              Dive into Interactive Halal Learning for All Ages, Guided by Quran
              and Hadith.
            </h1>

            {/* Description */}
            <p className="text-red-700">
              ہر عمر کے گروہ کے لئے ڈھالا گیا، تقویٰ، دائمی تعلیم، اور روحانی
              بڑھائی، قرآن اور حدیث کی روشنی میں۔
            </p>

            {/* Call-to-Action Button */}
            <button className="w-32 bg-red-600 text-white p-2 rounded-full mt-6 hover:bg-red-700 transition-all">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="image px-8">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full rounded-lg"
            />
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
