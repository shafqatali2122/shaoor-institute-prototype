// components/FeaturedCourse.js

export default function FeaturedCourse() {
  return (
    <section className="w-full max-w-6xl mb-12 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left side: Image with Play Button */}
        <div className="relative flex items-center justify-center bg-gray-900 min-h-64">
          {/* Using a placeholder image relevant to the topic */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550567716-ac454e32b40b?q=80&w=2070')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative text-center text-white p-4">
            <p className="font-semibold">Course No. 1001</p>
            <h2 className="text-4xl font-bold my-2">Materialism (مٹیریل ازم)</h2>
            <a href="#" className="mt-4 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700">
              Watch Video Lecture
            </a>
          </div>
        </div>

        {/* Right side: Course Details */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800">Complete CourseKit</h3>
          <p className="text-gray-600 mt-2 mb-4">
            [cite_start]This course has been developed by the Shaoor Institute[cite: 13]. It includes a complete toolkit for students and teachers.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
            [cite_start]<span>✔ Lesson [cite: 24]</span>
            [cite_start]<span>✔ Lesson Plan (For Teachers) [cite: 24]</span>
            [cite_start]<span>✔ Reflective Questions Cards [cite: 24]</span>
            [cite_start]<span>✔ Scenario Cards [cite: 24]</span>
            [cite_start]<span>✔ Questionnaire [cite: 24]</span>
            [cite_start]<span>✔ PPT & PDF Presentations [cite: 24]</span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm">
              [cite_start]<span className="font-bold">Project Director:</span> Shoaib Madni [cite: 17] <br/>
              [cite_start]<span className="font-bold">Project Manager:</span> Hafiz Muhammad Shariq [cite: 19]
            </div>
            <a href="#" className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-purple-700">
              Enroll Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}