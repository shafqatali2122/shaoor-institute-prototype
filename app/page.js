// app/page.js
import CourseCarousel from '../components/CourseCarousel';
import CategoryGrid from '../components/CategoryGrid'; // 1. Import the new CategoryGrid
import Endorsements from '../components/Endorsements';
import AboutInstitute from '../components/AboutInstitute';

// CSS files for the carousel library
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Data for the carousel
const latestCourses = [
  {
    title: 'Materialism (مٹیریل ازم)',
    description: 'A comprehensive course exploring the philosophical, psychological, and societal impacts of materialism.',
    thumbnail: '/materialism_thumbnail.jpg',
    rating: '4.8',
    ratingCount: '1,205',
    studentCount: '11,432',
    creator: 'Shaoor Institute'
  },
  {
    title: 'Modernism',
    description: 'Understanding the key concepts of Modernity, its philosophical roots, and its impact on society.',
    thumbnail: '/modernism_thumbnail.jpg',
    rating: '4.7',
    ratingCount: '987',
    studentCount: '9,821',
    creator: 'Shaoor Institute'
  },
  {
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
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
      </nav>

      <header className="w-full max-w-7xl text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900">Online Courses for Deeper Understanding</h2>
        <p className="mt-3 text-lg text-gray-600">Intellectual and Educational Courses by Shaoor Institute</p>
      </header>

      <CourseCarousel courses={latestCourses} />

      {/* 2. Replace the old course cards section with the new CategoryGrid */}
      <CategoryGrid />

      <Endorsements />
      <AboutInstitute />

    </main>
  );
}