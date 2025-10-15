// app/page.js
import CourseCard from '../components/CourseCard'; // Import the new component

// Data for our courses, based on your image
const courses = [
  {
    icon: 'heart',
    title: 'Psychotherapy',
    description: 'Healing through professional techniques',
    price: '149',
    originalPrice: '199',
    details: ['12 Classes', 'Group Sessions', 'Certificate'],
    features: [
      'Cognitive Behavioral Therapy (CBT)',
      'Art Therapy for emotional expression',
      'Dialectical Behavior Therapy (DBT)',
      'Mindfulness practices',
      'Group support sessions'
    ],
    color: 'blue'
  },
  {
    icon: 'group',
    title: 'Group Counselling',
    description: 'Healing through shared experiences',
    price: '99',
    originalPrice: '129',
    details: ['8 Sessions', 'Small Groups', 'Expert Facilitators'],
    features: [
      'Safe and confidential environment',
      'Peer support and shared experiences',
      'Emotional healing techniques',
      'Building healthy relationships',
      'Developing communication skills'
    ],
    color: 'orange'
  },
  {
    icon: 'brain',
    title: 'Master Your Brain',
    description: 'Unlock your cognitive potential',
    price: '59',
    originalPrice: '89',
    details: ['40 Minutes/Day', '3 Days', 'Performance Boost'],
    features: [
      'Advanced memory techniques',
      'Smarter exam preparation',
      'Information retention strategies',
      'Focus enhancement methods',
      '10x academic performance'
    ],
    color: 'purple'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">

      {/* Navigation Bar Placeholder */}
      <nav className="w-full max-w-6xl p-4 border-b mb-8 text-center bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
        <div className="flex justify-center space-x-6 mt-2 text-blue-600">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </div>
      </nav>

      {/* Banner Placeholder */}
      <header className="w-full max-w-6xl text-center bg-blue-600 text-white py-16 rounded-lg shadow-xl mb-12">
        <h2 className="text-4xl font-extrabold">HEADING / TAGLINE</h2>
        <p className="mt-2 text-lg">TOPICS & CATEGORIES</p>
      </header>

      {/* Course Section */}
      <section className="w-full max-w-6xl mb-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-700">WHAT&apos;S NEW | POPULAR COURSES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Use the CourseCard component for each course */}
          {courses.map((course) => (
            <CourseCard 
              key={course.title}
              icon={course.icon}
              title={course.title}
              description={course.description}
              price={course.price}
              originalPrice={course.originalPrice}
              details={course.details}
              features={course.features}
              color={course.color}
            />
          ))}
        </div>
      </section>

      {/* Endorsement Section */}
      <section className="w-full max-w-6xl text-center bg-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-bold text-gray-700">Endorsement by Scholars</h3>
      </section>

      {/* About Section */}
      <section className="w-full max-w-6xl text-center p-8">
        <h3 className="text-3xl font-bold text-gray-700">INTRO OF SHAOOR INSTITUTE</h3>
      </section>

    </main>
  );
}