// components/FeaturedCourse.js

export default function FeaturedCourse() {
  return (
    <section className="w-full max-w-7xl mb-16 shadow-2xl rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">

        {/* Left side: Video Preview */}
        <div className="relative flex flex-col items-center justify-center p-8 min-h-[450px] text-white bg-slate-900">
          <div className="relative z-10 text-center">
            <button className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50 transition-transform transform hover:scale-110 mb-6">
              {/* FIX: Using a more robust SVG for the play icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-white"
                style={{ marginLeft: '4px' }} // Visually centers the icon
              >
                <path d="M8 5.14v13.72L19.78 12 8 5.14z" />
              </svg>
            </button>
            <p className="font-semibold">Preview this course</p>
          </div>
        </div>

        {/* Right side: Course Details */}
        <div className="p-10 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Materialism (مٹیریل ازم): The Complete CourseKit
          </h2>
          <p className="text-gray-600 mt-2">
            A comprehensive course by Shaoor Institute exploring the philosophical, psychological, and societal impacts of materialism from an Islamic perspective.
          </p>
          <div className="flex items-center space-x-4 my-5 text-sm text-gray-700">
            <span className="bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded">Top Rated</span>
            <span className="text-orange-500 font-bold">★ 4.8</span>
            <span>(1,205 ratings)</span>
            <span>11,432 students</span>
          </div>
          <div className="text-sm mb-8">
            <span>Created by <a href="#" className="text-blue-600 font-semibold underline">Shaoor Institute</a></span>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-4xl font-bold text-gray-900">Free</span>
            <a href="#" className="bg-blue-600 text-white font-bold px-10 py-4 rounded-md shadow-lg transition-colors hover:bg-blue-700">
              Enroll Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}