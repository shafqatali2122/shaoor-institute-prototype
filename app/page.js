// app/page.js
import CourseCard from '../components/CourseCard';
import FeaturedCourse from '../components/FeaturedCourse'; // Import the new component

// Updated course data from your PDF
const courses = [
  {
    icon: 'brain',
    title: 'Modernism',
    description: 'Understanding the key concepts of Modernity.',
    price: '99',
    originalPrice: '129',
    details: ['10 Lessons', 'Quizzes', 'Certificate'],
    features: [
      'Historical Context',
      'Philosophical Roots',
      'Impact on Society',
      'Islamic Perspective',
      'Key Thinkers'
    ],
    color: 'purple'
  },
  {
    icon: 'group',
    title: 'Feminism',
    description: 'A critical review of feminist movements and thought.',
    price: '99',
    originalPrice: '129',
    details: ['12 Lessons', 'Discussions', 'Certificate'],
    features: [
      'Waves of Feminism',
      'Core Tenets',
      'Intersectionality',
      'Gender Theory',
      'Responses and Critiques'
    ],
    color: 'orange'
  },
  {
    icon: 'heart',
    title: 'Liberalism',
    description: 'Exploring the ideology of individual liberty and rights.',
    price: '99',
    originalPrice: '129',
    details: ['8 Lessons', 'Case Studies', 'Certificate'],
    features: [
      'Classical vs. Modern',
      'Economic Liberalism',
      'Political Philosophy',
      'Secularism',
      'Its influence on Muslim thought'
    ],
    color: 'blue'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">

      <nav className="w-full max-w-6xl p-4 border-b mb-8 text-center bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
        <div className="flex justify-center space-x-6 mt-2 text-blue-600">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </div>
      </nav>

      <header className="w-full max-w-6xl text-center bg-blue-600 text-white py-16 rounded-lg shadow-xl mb-12">
        <h2 className="text-4xl font-extrabold">Online Courses for Deeper Understanding</h2>
        <p className="mt-2 text-lg">Intellectual and Educational Courses by Shaoor Institute</p>
      </header>

      {/* Add the new FeaturedCourse component here */}
      <FeaturedCourse />

      <section className="w-full max-w-6xl mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-700">Explore Other Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-6xl text-center bg-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-bold text-gray-700">Endorsement by Scholars</h3>
      </section>

    </main>
  );
}