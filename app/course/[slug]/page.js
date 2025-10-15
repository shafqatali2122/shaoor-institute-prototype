// app/course/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';

// --- MOCK DATA FOR THE PROTOTYPE ---
const courseData = {
  materialism: {
    title: 'Materialism (مٹیریل ازم)',
    courseNumber: '1001',
    creditHours: '1.5',
    thumbnail: '/materialism_thumbnail.jpg',
    description:
      "This course provides a critical review of Materialism from an Islamic perspective, exploring its philosophical roots, psychological effects, and societal impact.",
    objectives: [
      'What is Materialism?',
      'Key Aspects of Materialism',
      'The Conflict Between Materialism and Spirituality',
      'Consequences of a Materialistic Lifestyle',
      'Psychological Effects of Materialism',
      'How Materialism Spreads in Islamic Societies',
      'A Comparison Between Religion and Materialism',
    ],
    courseKit: [
      { title: 'Lesson', file: '1001-1.1 Lesson.pdf' },
      { title: 'Lesson Plan (For Teachers)', file: '1001-1.2 Lesson Plan for Teachers.pdf' },
      { title: 'Reflective Questions Cards', file: '1001-1.3 Refelective Questions Cards.pdf' },
      { title: 'Scenario Cards', file: '1001-1.4 Scenerio Cards.pdf' },
      { title: 'Questionnaire', file: '1001-1.5 Questionnaire.pdf' },
      { title: 'Color Sheet', file: '1001-1.6 Color Sheet.pdf' },
      { title: 'Surah Takasur Card & Worksheet', file: '1001-1.7 Surah Takasur card & worksheet.pdf' },
      { title: 'PPT & PDF Presentations', file: '1001-1.8 PPT Presentation.pptm' },
    ],
    instructors: [
      { name: 'Shoaib Madni', role: 'Project Director', image: '/scholar_2.avif' },
      { name: 'Hafiz Muhammad Shariq', role: 'Project Manager', image: '/scholar_1.avif' },
      { name: 'Qaisar Ahmed Raja', role: 'Contributor & Reviewer', image: '/scholar_4.avif' },
      { name: 'Dr Haseeb Ahmed Khan', role: 'Contributor & Reviewer', image: '/scholar_3.avif' },
    ],
  },
};
// --- END OF MOCK DATA ---

export default function CoursePage({ params }) {
  const { slug } = params;
  const course = courseData[slug];

  if (!course) {
    return <div className="p-12 text-center">Course not found.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT COLUMN (MAIN CONTENT) --- */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-gray-900">{course.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{course.description}</p>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {course.objectives.map((objective) => (
                <li key={objective} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✔</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Complete CourseKit</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-3">
                {course.courseKit.map((item) => (
                  <li key={item.title} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <span className="font-medium text-gray-800">{item.title}</span>
                    <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">Download</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Instructors & Contributors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {course.instructors.map((instructor) => (
                <div key={instructor.name} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center">
                  <Image src={instructor.image} alt={instructor.name} width={60} height={60} className="rounded-full mr-4 object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{instructor.name}</h4>
                    <p className="text-sm text-gray-500">{instructor.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (ENROLLMENT CARD) --- */}
        <div className="relative">
          <div className="sticky top-8 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <Image src={course.thumbnail} alt={`Thumbnail for ${course.title}`} width={500} height={300} className="w-full object-cover" />
            <div className="p-6">
              <span className="text-4xl font-bold text-gray-900">Free</span>
              <a href="#" className="mt-4 block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
                Enroll Now
              </a>
              <div className="mt-4 border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-2">This course includes:</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">📄</span><span>{course.creditHours} Credit Hours</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📁</span><span>{course.courseKit.length} Downloadable Resources</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🏆</span><span>Certificate of Completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}