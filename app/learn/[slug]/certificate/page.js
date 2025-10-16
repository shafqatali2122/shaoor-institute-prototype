// app/learn/[slug]/certificate/page.js
import Link from 'next/link';
import Certificate from '../../../../components/Certificate';

export default function CertificatePage({ params }) {
  const { slug } = params;
  // In a real app, you'd get the course name and student name from a database.
  const courseName = "Materialism (مٹیریل ازم)";
  const studentName = "Abdullah Ahmad";
  const completionDate = new Date().toLocaleDateString();

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-100">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href={`/learn/${slug}`} className="text-blue-600 hover:underline">&larr; Back to Course</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Congratulations!</h1>
        {/* This is the corrected line */}
        <p className="mt-2 text-lg text-gray-600">You&apos;ve successfully completed the course.</p>
      </header>

      <Certificate studentName={studentName} courseName={courseName} date={completionDate} />

      <button className="mt-8 bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700">
        Download as PDF
      </button>
    </main>
  );
}