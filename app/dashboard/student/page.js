// app/dashboard/student/page.js
import Link from 'next/link';
import EnrolledCourseCard from '../../../components/EnrolledCourseCard'; // Reuse the card component

// --- Mock Data ---
const studentProfile = {
  name: 'Abdullah Ahmad',
  email: 'abdullah.a@example.com',
  // We'll add more fields later (CNIC, qualifications, etc.)
};

const enrolledCourses = [
  { slug: 'materialism', title: 'Materialism (مٹیریل ازم)', creator: 'Shaoor Institute', thumbnail: '/materialism_thumbnail.jpg', progress: 75 },
  { slug: 'modernism', title: 'Modernism', creator: 'Shaoor Institute', thumbnail: '/modernism_thumbnail.jpg', progress: 20 },
];
// --- End Mock Data ---

export default function StudentDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-100">
      {/* Simple header for navigation */}
       <nav className="w-full max-w-7xl p-4 mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
         <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </nav>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: My Profile */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 sticky top-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">My Profile</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Name:</span>
                <p>{studentProfile.name}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Email:</span>
                <p>{studentProfile.email}</p>
              </div>
              {/* Placeholder for more details */}
              <div className="pt-3 border-t text-sm text-gray-500">
                (More details like CNIC, Qualifications will show here)
              </div>
              <button className="mt-4 w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: My Courses */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <EnrolledCourseCard key={course.slug} course={course} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">You are not enrolled in any courses yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}