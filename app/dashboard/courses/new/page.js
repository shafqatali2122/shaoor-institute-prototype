// app/dashboard/courses/new/page.js
import Link from 'next/link';

export default function NewCoursePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href="/dashboard/courses" className="text-blue-600 hover:underline">&larr; Back to Dashboard</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Create a New Course</h1>
        <p className="mt-3 text-lg text-gray-600">Fill in the basic details to get started.</p>
      </header>

      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <form className="space-y-6">
          <div>
            <label htmlFor="course-title" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input type="text" id="course-title" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          </div>

          <div>
            <label htmlFor="course-description" className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea id="course-description" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>

          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="show-contributors"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="show-contributors" className="font-medium text-gray-700">Show contributor names</label>
              <p className="text-gray-500">Check this box to display the names of contributors and reviewers on the course materials.</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
            Save and Continue
          </button>
        </form>
      </section>
    </main>
  );
}