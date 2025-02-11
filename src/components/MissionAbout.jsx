export default function MissionAbout() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Mission Section */}
        <div className="mb-16 bg-white p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Our Mission
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            "At Islamic Academy, our mission is to empower Muslims worldwide with authentic Islamic knowledge through accessible online education. We strive to bridge the gap between traditional Islamic learning and modern technology, making Quranic wisdom, Prophetic teachings, and Islamic sciences available to all believers - regardless of age, location, or background. Our commitment is to nurture an informed Ummah grounded in Quran and Sunnah, equipped to practice and preserve our faith in its purest form."
          </p>
        </div>

        {/* About Us Section */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            About Islamic Academy
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-6"></div>
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              Islamic Academy is a revolutionary online platform dedicated to spreading authentic Islamic knowledge to every Muslim household. Founded on the principle 'Ilm for All', we break down geographical and temporal barriers to Islamic education, offering structured learning programs for children, adults, and seniors alike.
            </p>

            <p className="leading-relaxed">
              Our diverse curriculum ranges from Quran recitation to advanced Islamic studies, taught by qualified scholars and certified instructors. Through interactive online classes, we make learning flexible yet profound - enabling students to study at their own pace while maintaining traditional teaching values.
            </p>

            <p className="leading-relaxed">
              We believe every Muslim deserves access to proper Islamic education. Whether you're a busy parent, working professional, or retiree - our virtual classrooms adapt to your schedule while maintaining academic rigor. Our vision is to create a global community of learned Muslims who carry the light of knowledge to future generations.
            </p>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-red-600 font-bold text-xl mb-3">Our Promise</h3>
              <p className="text-gray-600">Authentic knowledge from qualified scholars with chain of transmission (Sanad)</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-red-600 font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-gray-600">To create a global classroom preserving Islamic tradition through modern means</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-red-600 font-bold text-xl mb-3">Age Inclusion</h3>
              <p className="text-gray-600">Comprehensive programs for students from 5 to 85+ years</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-red-600 font-bold text-xl mb-3">Curriculum</h3>
              <p className="text-gray-600">Quran, Hadith, Fiqh, Islamic History & Special convert programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}