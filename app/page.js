// app/page.js
import CourseCard from '../components/CourseCard';
import CourseCarousel from '../components/CourseCarousel';
import Endorsements from '../components/Endorsements';     // 1. Re-import Endorsements
import AboutInstitute from '../components/AboutInstitute';   // 2. Re-import AboutInstitute

// CSS files for the carousel library
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Data for the carousel with all details
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

// Data for the "Explore Other Courses" section
const otherCourses = [
  { icon: 'purple', title: 'Post-Modernism', description: 'Exploring the key concepts.', price: '99', originalPrice: '129', details: ['10 Lessons', 'Quizzes', 'Certificate'], featureTitle: "You'll Learn:", features: ['Key concepts', 'Philosophical Roots', 'Impact on Society'], color: 'purple' },
  { icon: 'group', title: 'Liberalism', description: 'A critical review of the ideology.', price: '99', originalPrice: '129', details: ['12 Lessons', 'Discussions', 'Certificate'], featureTitle: "You'll Experience:", features: ['Core Tenets', 'Political Philosophy', 'Responses and Critiques'], color: 'orange' },
  { icon: 'heart', title: 'Humanism', description: 'Exploring the ideology.', price: '99', originalPrice: '129', details: ['8 Lessons', 'Case Studies', 'Certificate'], featureTitle: "You'll Learn:", features: ['Classical vs. Modern', 'Secularism', 'Influence on Muslim thought'], color: 'blue' }
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

      <section className="w-full max-w-7xl mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Other Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      {/* 3. Add the sections back to the page */}
      <Endorsements />
      <AboutInstitute />

    </main>
  );
}