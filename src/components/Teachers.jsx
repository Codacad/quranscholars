import React from "react";

const teachers = [
  {
    name: "Sheikh Ahmed Al-Tayeb",
    image: "https://via.placeholder.com/150",
    bio: "An expert in Quranic studies with over 20 years of teaching experience.",
  },
  {
    name: "Dr. Fatima Al-Zahra",
    image: "https://via.placeholder.com/150",
    bio: "Specialist in Hadith and Islamic jurisprudence, passionate about sharing knowledge.",
  },
  {
    name: "Imam Khalid Yusuf",
    image: "https://via.placeholder.com/150",
    bio: "Dedicated to helping students understand and memorize the Quran.",
  },
];

function Teachers() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Our Teachers</h2>
        <p className="text-gray-600 text-lg mb-12">
          Meet our experienced scholars who are dedicated to Islamic education.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={`https://i.pravatar.cc/150?img=${index+3}`}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">
                {teacher.name}
              </h3>
              <p className="text-gray-600 mt-2">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
