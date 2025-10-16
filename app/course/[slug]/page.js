// app/course/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';
import Reviews from '../../../components/Reviews';
import SimilarCourses from '../../../components/SimilarCourses';
import DownloadOptions from '../../../components/DownloadOptions'; // 1. Import the new component

// --- MOCK DATA ---
const courseData = {
  materialism: {
    title: 'Materialism (مٹیریل ازم)',
    courseNumber: '1001',
    creditHours: '1.5',
    thumbnail: '/materialism_thumbnail.jpg',
    description:
      "This course provides a critical review of Materialism from an Islamic perspective, exploring its philosophical roots, psychological effects, and societal impact.",
    objectives: [ 'What is Materialism?', 'Key Aspects of Materialism', 'The Conflict Between Materialism and Spirituality', 'Consequences of a Materialistic Lifestyle', 'Psychological Effects of Materialism', 'How Materialism Spreads in Islamic Societies', 'A Comparison Between Religion and Materialism' ],
    courseKit: [ { title: 'Lesson', file: '1001-1.1 Lesson.pdf' }, { title: 'Lesson Plan (For Teachers)', file: '1001-1.2 Lesson Plan for Teachers.pdf' }, { title: 'Reflective Questions Cards', file: '1001-1.3 Refelective Questions Cards.pdf' }, { title: 'Scenario Cards', file: '1001-1.4 Scenerio Cards.pdf' }, { title: 'Questionnaire', file: '1001-1.5 Questionnaire.pdf' }, { title: 'Color Sheet', file: '1001-1.6 Color Sheet.pdf' }, { title: 'Surah Takasur Card & Worksheet', file: '1001-1.7 Surah Takasur card & worksheet.pdf' }, { title: 'PPT & PDF Presentations', file: '1001-1.8 PPT Presentation.pptm' } ],
    instructors: [ { name: 'Shoaib Madni', role: 'Project Director', image: '/scholar_2.avif' }, { name: 'Hafiz Muhammad Shariq', role: 'Project Manager', image: '/scholar_1.avif' }, { name: 'Qaisar Ahmed Raja', role: 'Contributor & Reviewer', image: '/scholar_4.avif' }, { name: 'Dr Haseeb Ahmed Khan', role: 'Contributor & Reviewer', image: '/scholar_3.avif' } ],
    reviews: [ { rating: 5, author: 'Ahmad Ali', comment: 'Excellent course! The content is deep and well-structured. Highly recommended for anyone looking to understand this topic from a principled perspective.' }, { rating: 4, author: 'Fatima Khan', comment: 'Very insightful and thought-provoking. The downloadable materials are extremely helpful for further study.' } ],
    similarCourses: [ { slug: 'modernism', title: 'Modernism', creator: 'Shaoor Institute', thumbnail: '/modernism_thumbnail.jpg' }, { slug: 'feminism', title: 'Feminism', creator: 'Shaoor Institute', thumbnail: '/feminism_thumbnail.jpg' } ]
  },
  modernism: { title: 'Modernism', thumbnail: '/modernism_thumbnail.jpg', description: 'Coming soon...' },
  feminism: { title: 'Feminism', thumbnail: '/feminism_thumbnail.jpg', description: 'Coming soon...' }
};
// --- END OF MOCK DATA ---

export default function CoursePage({ params }) {
  const { slug } = params;
  const course = courseData[slug];

  if (!course) { return <div className="p-12 text-center">Course not found.</div>; }

  if (!course.courseKit) { /* ... (placeholder page code is the same) ... */ }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8"><Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link></nav>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-gray-900">{course.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{course.description}</p>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {course.objectives.map((o) => (<li key={o} className="flex items-start"><span className="text-blue-500 mr-2 mt-1">✔</span><span>{o}</span></li>))}
            </ul>
          </div>

          {/* 2. Replace the old CourseKit list with the new DownloadOptions component */}
          <DownloadOptions courseKit={course.courseKit} />

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Instructors & Contributors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {course.instructors.map((i) => (<div key={i.name} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center"><Image src={i.image} alt={i.name} width={60} height={60} className="rounded-full mr-4 object-cover" /><div><h4 className="font-bold text-gray-900">{i.name}</h4><p className="text-sm text-gray-500">{i.role}</p></div></div>))}
            </div>
          </div>
          <Reviews reviews={course.reviews} />
          <SimilarCourses courses={course.similarCourses} />
        </div>
        {/* --- RIGHT COLUMN --- */}
        <div className="relative">
          {/* ... (The right column code is the same) ... */}
        </div>
      </div>
    </main>
  );
}