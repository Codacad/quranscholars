import HeroImage from "../assets/images/hero.svg"
import SeekingKnowledge from "../components/SeekingKnowledge";
import Welcome from "../components/Welcome";
import  '../css/Home.css'
const Home = () => {
  return (
    <>
      <div id="main" className="home md:p-px10p flex md:min-h-[100vh] py-8 items-center bg-red-50">
        <div className="home-contents grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
          <div className="text flex flex-col md:gap-4 max-md:items-center max-md:text-center gap-4 justify-center px-4">
            <h3 className="text-secondary bg-orange-200 w-64 rounded-3xl text-center font-bold p-2 text-sm">Embark on a Journey of Faith</h3>
            <h1 className="text-3xl font-bold text-primary leading-[1.6em]">
              Dive into Interactive Halal Learning for All Ages, Guided by Quran
              and Hadith.
            </h1>
            <p className="text-navlinks">
              ہر عمر کے گروہ کے لئے ڈھالا گیا، تقویٰ، دائمی تعلیم، اور روحانی
              بڑھائی، قرآن اور حدیث کی روشنی میں۔
            </p>
            <button className="w-32 bg-primary text-white p-2 rounded-full mt-4">Explore More</button>
          </div>
          <div className="image px-8"><img src={HeroImage} alt="" /></div>
        </div>
      </div>
      <Welcome />
      <SeekingKnowledge />
    </>
  );
};

export default Home;
