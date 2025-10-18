// app/dashboard/courses/new/page.js
import Link from 'next/link';

export default function NewCoursePage() {
  // Mock categories for the dropdown - you'd fetch these in a real app
  const categories = [
    { name: 'Uloom e Islami', slug: 'uloom-e-islami' },
    { name: 'Uloom e Jadida', slug: 'uloom-e-jadida' },
    { name: 'Tafheem e Maghrib', slug: 'tafheem-e-maghrib' },
    { name: 'Jadeed Falsafa', slug: 'jadeed-falsafa' },
    { name: 'Tazkiyah e Nafs', slug: 'tazkiyah-e-nafs' },
    { name: 'Ilhaad', slug: 'ilhaad' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href="/dashboard/courses" className="text-blue-600 hover:underline">&larr; Back to Dashboard</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Create a New Course</h1>
        <p className="mt-3 text-lg text-gray-600">Step 1: Basic Information & Landing Page Details</p>
      </header>

      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <form className="space-y-6">
          {/* Course Title */}
          <div>
            <label htmlFor="course-title" className="block text-sm font-medium text-gray-700">Course Title</label>
            <input type="text" id="course-title" placeholder="e.g., Materialism (مٹیریل ازم)" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Course Subtitle (Optional) */}
          <div>
            <label htmlFor="course-subtitle" className="block text-sm font-medium text-gray-700">Course Subtitle (Optional)</label>
            <input type="text" id="course-subtitle" placeholder="A brief, catchy phrase summarizing the course" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Course Description */}
          <div>
            <label htmlFor="course-description" className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea id="course-description" rows="5" placeholder="Provide a detailed description of the course content, objectives, and target audience." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          {/* Category Selection */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Course Category</label>
            <select id="category" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a category...</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Thumbnail Upload */}
          <div>
             <label htmlFor="thumbnail-upload" className="block text-sm font-medium text-gray-700">Course Thumbnail Image</label>
             <input id="thumbnail-upload" type="file" accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"/>
             <p className="text-xs text-gray-500 mt-1">Recommended size: 750x422 pixels (JPG, PNG)</p>
          </div>

          {/* Contributor Checkbox */}
          <div className="relative flex items-start pt-4 border-t">
            <div className="flex items-center h-5">
              <input id="show-contributors" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="show-contributors" className="font-medium text-gray-700">Show contributor names</label>
              <p className="text-gray-500">Check this box to display the names of contributors and reviewers on the course materials.</p>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
            Save and Continue to Curriculum
          </button>
        </form>
      </section>
    </main>
  );
}