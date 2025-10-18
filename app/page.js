// app/page.js
"use client"; // Add this because the user menu needs interactivity

import CourseCarousel from '../components/CourseCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Endorsements from '../components/Endorsements';
import AboutInstitute from '../components/AboutInstitute';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react'; // Import useState for dropdown

// CSS files for the carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- LATEST COURSES DATA (MUST BE DEFINED HERE) ---
const latestCourses = [
  {
    slug: 'materialism',
    title: 'Materialism (مٹیریل ازم)',
    description: 'A comprehensive course exploring the philosophical, psychological, and societal impacts of materialism.',
    thumbnail: '/materialism_thumbnail.jpg',
    rating: '4.8',
    ratingCount: '1,205',
    studentCount: '11,432',
    creator: 'Shaoor Institute'
  },
  {
    slug: 'modernism',
    title: 'Modernism',
    description: 'Understanding the key concepts of Modernity, its philosophical roots, and its impact on society.',
    thumbnail: '/modernism_thumbnail.jpg',
    rating: '4.7',
    ratingCount: '987',
    studentCount: '9,821',
    creator: 'Shaoor Institute'
  },
  {
    slug: 'feminism',
    title: 'Feminism',
    description: 'A critical review of feminist movements, core tenets, gender theory, and critiques from an Islamic perspective.',
    thumbnail: '/feminism_thumbnail.jpg',
    rating: '4.9',
    ratingCount: '2,154',
    studentCount: '15,309',
    creator: 'Shaoor Institute'
  }
];
// --- END LATEST COURSES DATA ---


export default function Home() {
  // Mock state: Assume user is logged in for prototype
  const isLoggedIn = true;
  const userName = "Abdullah A.";
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col items-center p-6 md:p-12">
        <nav className="w-full max-w-7xl p-4 mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <a href="#category-grid" className="text-gray-700 hover:text-blue-600">Explore Courses</a> 

            {isLoggedIn ? (
              // User Menu
              <div className="relative">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center text-gray-700 hover:text-blue-600">
                  <span>{userName}</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/dashboard/student" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Student Dashboard</Link>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
            )}
          </div>
        </nav>

        <header className="w-full max-w-7xl text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">Online Courses for Deeper Understanding</h2>
          <p className="mt-3 text-lg text-gray-600">Intellectual and Educational Courses by Shaoor Institute</p>
        </header>

        {/* Carousel using the defined latestCourses */}
        <CourseCarousel courses={latestCourses} /> 

        <div id="category-grid" className="w-full scroll-mt-20"> 
            <CategoryGrid />
        </div>
        <Endorsements />
        <AboutInstitute />

      </main>
      <Footer />
    </div>
  );
}