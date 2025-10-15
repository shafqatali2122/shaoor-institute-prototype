// app/category/[slug]/page.js
import CourseCard from '../../../components/CourseCard';
import Link from 'next/link'; // 1. Import the Link component here

// --- MOCK DATA ---
const allCategories = {
  'uloom-e-islami': { name: 'Uloom e Islami' },
  'uloom-e-jadida': { name: 'Uloom e Jadida' },
  'tafheem-e-maghrib': { name: 'Tafheem e Maghrib' },
  'jadeed-falsafa': { name: 'Jadeed Falsafa' },
  'tazkiyah-e-nafs': { name: 'Tazkiyah e Nafs' },
  'ilhaad': { name: 'Ilhaad' },
};

const allCourses = [
  { categorySlug: 'tafheem-e-maghrib', icon: 'purple', title: 'Post-Modernism', description: 'Exploring the key concepts.', price: '99', originalPrice: '129', details: ['10 Lessons', 'Quizzes', 'Certificate'], featureTitle: "You'll Learn:", features: ['Key concepts', 'Philosophical Roots', 'Impact on Society'], color: 'purple' },
  { categorySlug: 'tafheem-e-maghrib', icon: 'group', title: 'Liberalism', description: 'A critical review of the ideology.', price: '99', originalPrice: '129', details: ['12 Lessons', 'Discussions', 'Certificate'], featureTitle: "You'll Experience:", features: ['Core Tenets', 'Political Philosophy', 'Responses and Critiques'], color: 'orange' },
  { categorySlug: 'tafheem-e-maghrib', icon: 'heart', title: 'Humanism', description: 'Exploring the ideology.', price: '99', originalPrice: '129', details: ['8 Lessons', 'Case Studies', 'Certificate'], featureTitle: "You'll Learn:", features: ['Classical vs. Modern', 'Secularism', 'Influence on Muslim thought'], color: 'blue' },
  { categorySlug: 'ilhaad', icon: 'purple', title: 'Atheism: A Critical Review', description: 'Understanding modern atheistic arguments.', price: '149', originalPrice: '199', details: ['15 Lessons', 'Debates', 'Certificate'], featureTitle: "You'll Learn:", features: ['Historical Atheism', 'New Atheist Arguments', 'Philosophical Critiques'], color: 'purple' },
];
// --- END OF MOCK DATA ---

export default function CategoryPage({ params }) {
  const { slug } = params;
  const category = allCategories[slug];
  const coursesForCategory = allCourses.filter(course => course.categorySlug === slug);

  if (!category) {
    return <div className="p-12 text-center">Category not found.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8">
        {/* 2. Replace the <a> tag with the <Link> component */}
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-7xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">{category.name}</h1>
        <p className="mt-3 text-lg text-gray-600">Courses in this category</p>
      </header>

      <section className="w-full max-w-7xl mb-12">
        {coursesForCategory.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesForCategory.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No courses available in this category yet.</p>
        )}
      </section>
    </main>
  );
}