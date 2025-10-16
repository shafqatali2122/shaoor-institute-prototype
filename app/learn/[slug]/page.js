// app/learn/[slug]/page.js
"use client"; // This line is essential for interactive pages

import { useState } from 'react';
import Link from 'next/link';
import FeedbackSection from '../../../components/FeedbackSection';

// --- MOCK DATA FOR THE PROTOTYPE ---
const courseData = {
  materialism: {
    title: 'Materialism (مٹیریل ازم)',
    lessons: [
      { title: 'What is Materialism?' },
      { title: 'Key Aspects of Materialism' },
      { title: 'The Conflict of Spirituality' },
      { title: 'Consequences of Materialism' },
      { title: 'Types of Materialism' },
      { title: 'Psychological Effects' },
      { title: 'Materialism in Islamic Societies' },
      { title: 'Surah Takasur Worksheet' },
    ],
  },
  modernism: {
    title: 'Modernism',
    lessons: [{ title: 'Introduction to Modernism' }, { title: 'Key Thinkers' }],
  },
};
// --- END OF MOCK DATA ---

export default function LearnPage({ params }) {
  const { slug } = params;
  const course = courseData[slug];
  
  const [activeLesson, setActiveLesson] = useState(course.lessons[0]);

  if (!course) {
    return <div className="p-12 text-center">Course not found.</div>;
  }

  return (
    <main className="bg-gray-100">
      <div className="flex">
        {/* --- LEFT SIDEBAR: LESSON LIST --- */}
        <aside className="w-1/4 min-h-screen bg-white shadow-lg p-6">
          <Link href="/my-courses" className="text-blue-600 hover:underline mb-6 block">&larr; Back to My Courses</Link>
          <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson) => (
              <li 
                key={lesson.title}
                onClick={() => setActiveLesson(lesson)}
                className={`p-3 rounded-lg cursor-pointer ${
                  activeLesson.title === lesson.title ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'
                }`}
              >
                {lesson.title}
              </li>
            ))}
          </ul>

          {/* This is the correct placement for the quiz button */}
          <Link href={`/learn/${slug}/quiz`}>
              <div className="mt-6 w-full text-center bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700">
                  Start Final Quiz
              </div>
          </Link>
        </aside>

        {/* --- RIGHT CONTENT AREA --- */}
        <div className="w-3/4 p-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{activeLesson.title}</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white mb-6">
              <p>Video Player Placeholder</p>
            </div>
            <h3 className="text-xl font-bold">Lesson Details</h3>
            <p className="mt-2 text-gray-700">
              Detailed text content for &quot;{activeLesson.title}&quot; will be displayed here. 
              This section can include readings, downloadable files, and interactive elements related to the lesson.
            </p>
          </div>

          <FeedbackSection />
        </div>
      </div>
    </main>
  );
}