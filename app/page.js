// app/page.js
"use client"; 

import CourseCarousel from '../components/CourseCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Endorsements from '../components/Endorsements';
import AboutInstitute from '../components/AboutInstitute';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react'; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const latestCourses = [
  { slug: 'materialism', title: 'Materialism (مٹیریل ازم)', description: 'A comprehensive course...', thumbnail: '/materialism_thumbnail.jpg', rating: '4.8', ratingCount: '1,205', studentCount: '11,432', creator: 'Shaoor Institute' },
  { slug: 'modernism', title: 'Modernism', description: 'Understanding the key concepts...', thumbnail: '/modernism_thumbnail.jpg', rating: '4.7', ratingCount: '987', studentCount: '9,821', creator: 'Shaoor Institute' },
  { slug: 'feminism', title: 'Feminism', description: 'A critical review...', thumbnail: '/feminism_thumbnail.jpg', rating: '4.9', ratingCount: '2,154', studentCount: '15,309', creator: 'Shaoor Institute' }
];

export default function Home() {
  const isLoggedIn = true; // Mock state
  const userName = "Abdullah A.";
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col items-center p-6 md:p-12">
        <nav className="w-full max-w-7xl p-4 mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>

            {/* Replaced "Explore Courses" with "Enroll Now" Button linking to category grid */}
            <a href="#category-grid" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 font-bold">
              Enroll Now
            </a> 

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
              <Link href="/auth" className="text-gray-700 hover:text-blue-600">Login</Link>
            )}
          </div>
        </nav>

        <header className="w-full max-w-7xl text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">Online Courses for Deeper Understanding</h2>
          <p className="mt-3 text-lg text-gray-600">Intellectual and Educational Courses by Shaoor Institute</p>
        </header>

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