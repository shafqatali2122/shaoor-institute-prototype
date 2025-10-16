// app/my-courses/page.js
import EnrolledCourseCard from '../../components/EnrolledCourseCard';
import Link from 'next/link';

// Mock data for courses the student has enrolled in
const enrolledCourses = [
  {
    slug: 'materialism',
    title: 'Materialism (مٹیریل ازم)',
    creator: 'Shaoor Institute',
    thumbnail: '/materialism_thumbnail.jpg',
    progress: 75, // The student is 75% done
  },
  {
    slug: 'modernism',
    title: 'Modernism',
    creator: 'Shaoor Institute',
    thumbnail: '/modernism_thumbnail.jpg',
    progress: 20, // The student is 20% done
  },
];

export default function MyCoursesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-7xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">My Courses</h1>
        <p className="mt-3 text-lg text-gray-600">Continue your learning journey.</p>
      </header>

      <section className="w-full max-w-7xl">
        {enrolledCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrolledCourses.map((course) => (
              <EnrolledCourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">You haven't enrolled in any courses yet.</h3>
            <Link href="/">
              <div className="mt-6 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700">
                Explore Courses
              </div>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}