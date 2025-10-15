// app/page.js
import CourseCard from '../components/CourseCard';
import FeaturedCourse from '../components/FeaturedCourse';

const courses = [
  {
    icon: 'purple',
    title: 'Modernism',
    description: 'Understanding the key concepts of Modernity.',
    price: '99',
    originalPrice: '129',
    details: ['10 Lessons', 'Quizzes', 'Certificate'],
    featureTitle: "You'll Learn:",
    features: ['Historical Context', 'Philosophical Roots', 'Impact on Society', 'Islamic Perspective', 'Key Thinkers'],
    color: 'purple'
  },
  {
    icon: 'group',
    title: 'Feminism',
    description: 'A critical review of feminist movements and thought.',
    price: '99',
    originalPrice: '129',
    details: ['12 Lessons', 'Discussions', 'Certificate'],
    featureTitle: "You'll Experience:",
    features: ['Waves of Feminism', 'Core Tenets', 'Intersectionality', 'Gender Theory', 'Responses and Critiques'],
    color: 'orange'
  },
  {
    icon: 'blue',
    title: 'Liberalism',
    description: 'Exploring the ideology of individual liberty and rights.',
    price: '99',
    originalPrice: '129',
    details: ['8 Lessons', 'Case Studies', 'Certificate'],
    featureTitle: "You'll Learn:",
    features: ['Classical vs. Modern', 'Economic Liberalism', 'Political Philosophy', 'Secularism', 'Its influence on Muslim thought'],
    color: 'blue'
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

      <FeaturedCourse />

      <section className="w-full max-w-7xl mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Other Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>
    </main>
  );
}