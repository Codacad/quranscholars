import { faUser, faFileAlt, faComments, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-red-600 text-white py-20 px-4">
        <div className="container w-[80%] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Islam the Right Way</h1>
          <p className="text-xl md:text-2xl mb-8">Start your Islamic learning journey in 4 simple steps</p>
        </div>
      </section>

   
      <section className="container py-16 px-4">
        <div className="grid md:w-[80%]  mx-auto md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faUser} className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Create Account</h3>
            <p className="text-gray-600">Register using your email or social media accounts. It takes less than 2 minutes to set up your student profile.</p>
          </div>


          <div className="bg-white p-8 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faFileAlt} className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Admission Form</h3>
            <p className="text-gray-600">Complete our detailed admission form to help us understand your learning goals and current knowledge level.</p>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faComments} className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Coordinator Contact</h3>
            <p className="text-gray-600">Our admission coordinator will contact you within 24 hours to finalize your learning plan and schedule.</p>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faBookOpen} className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Start Classes</h3>
            <p className="text-gray-600">Begin your classes within 48 hours with qualified teachers through our interactive online platform.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="container md:w-[80%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">Qualified Teachers</h3>
              <p className="text-gray-600">All our instructors are certified with Ijazah and years of teaching experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">Flexible Schedule</h3>
              <p className="text-gray-600">Choose class timings that work best for you, 24/7 availability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">Progress Tracking</h3>
              <p className="text-gray-600">Regular assessments and progress reports to ensure effective learning.</p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Ready to Start Your Learning Journey</h2>
        <Link to={'/register'} className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
          Get Started Now
        </Link>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What are the technical requirements</h3>
              <p className="text-gray-600">You just need a stable internet connection, Zoom installed, and a webcam.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I choose my teacher</h3>
              <p className="text-gray-600">Yes, we'll match you with suitable teachers based on your needs and preferences.</p>
            </div>
            <div className="pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What payment methods do you accept</h3>
              <p className="text-gray-600">We accept all major credit cards and PayPal. We also offer scholarships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}