// app/dashboard/courses/page.js
import Link from 'next/link';

// Mock data for courses created by this teacher
const teacherCourses = [
  {
    id: 1,
    title: 'Materialism (مٹیریل ازم)',
    status: 'Published',
    students: 11432,
  },
  {
    id: 2,
    title: 'Introduction to Islamic Psychology',
    status: 'Draft',
    students: 0,
  },
];

export default function TeacherDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-7xl flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900">My Courses Dashboard</h1>
          <p className="mt-3 text-lg text-gray-600">Manage your courses and create new content.</p>
        </div>
        <Link href="/dashboard/courses/new">
          <div className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
            Create New Course
          </div>
        </Link>
      </header>

      <section className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Enrolled Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teacherCourses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">{course.title}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{course.students}</td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}