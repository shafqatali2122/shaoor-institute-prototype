// app/page.js
import CourseCarousel from '../components/CourseCarousel';
import CategoryGrid from '../components/CategoryGrid';
import Endorsements from '../components/Endorsements';
import AboutInstitute from '../components/AboutInstitute';
import Footer from '../components/Footer'; // Import the new Footer component
import Link from 'next/link';

// CSS files for the carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data for the carousel
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

export default function Home() {
  return (
    // Note: The Footer is outside the 'main' element for proper page structure
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col items-center p-6 md:p-12">
        <nav className="w-full max-w-7xl p-4 mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
          <div className="flex items-center space-x-6 font-semibold">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/my-courses" className="text-gray-700 hover:text-blue-600">My Courses</Link>
            {/* This is the corrected line */}
            <Link href="/auth" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
          </div>
        </nav>

        <header className="w-full max-w-7xl text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900">Online Courses for Deeper Understanding</h2>
          <p className="mt-3 text-lg text-gray-600">Intellectual and Educational Courses by Shaoor Institute</p>
        </header>

        {/* All your sections are now back */}
        <CourseCarousel courses={latestCourses} />
        <CategoryGrid />
        <Endorsements />
        <AboutInstitute />

      </main>

      {/* The Footer is placed here, at the end of the page */}
      <Footer />
    </div>
  );
}