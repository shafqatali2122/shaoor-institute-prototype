// app/page.js
import CourseCarousel from '../components/CourseCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Endorsements from '../components/Endorsements';
import AboutInstitute from '../components/AboutInstitute';
import Link from 'next/link'; // 1. Import the Link component

// CSS files for the carousel library
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- (Your course data remains the same, so it's omitted for brevity) ---
const latestCourses = [ /* ... */ ];
const otherCourses = [ /* ... */ ];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
        {/* 2. Add navigation links here */}
        <div className="flex items-center space-x-6 text-blue-600 font-semibold">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/my-courses" className="hover:underline">My Courses</Link>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
        </div>
      </nav>
      
      {/* ... (rest of your homepage code remains the same) ... */}

      <header className="w-full max-w-7xl text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900">Online Courses for Deeper Understanding</h2>
        <p className="mt-3 text-lg text-gray-600">Intellectual and Educational Courses by Shaoor Institute</p>
      </header>

      <CourseCarousel courses={latestCourses} />
      <CategoryGrid />
      <Endorsements />
      <AboutInstitute />
    </main>
  );
}