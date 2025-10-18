"use client"; // Keep this line at the very top

import Link from 'next/link';
import { useState } from 'react'; // Import useState for interactivity

export default function NewCoursePage() {
  // Mock data
  const categories = [ { name: 'Uloom e Islami', slug: 'uloom-e-islami' }, { name: 'Uloom e Jadida', slug: 'uloom-e-jadida' }, { name: 'Tafheem e Maghrib', slug: 'tafheem-e-maghrib' }, { name: 'Jadeed Falsafa', slug: 'jadeed-falsafa' }, { name: 'Tazkiyah e Nafs', slug: 'tazkiyah-e-nafs' }, { name: 'Ilhaad', slug: 'ilhaad' } ];
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const languages = ['Urdu', 'English'];

  // Mock curriculum & quiz data for the prototype
  const mockCurriculum = [ { title: "Section 1: Introduction", lectures: [ { title: "What is Materialism?", type: "video", content: "video_placeholder.mp4", resources: ["1001-1.1 Lesson.pdf"] }, { title: "Key Aspects", type: "video", content: "video_placeholder.mp4", resources: [] } ] }, { title: "Section 2: Consequences & Effects", lectures: [ { title: "Psychological Effects", type: "video", content: "video_placeholder.mp4", resources: ["1001-1.5 Questionnaire.pdf", "1001-1.8 PPT Presentation.pptm"] } ] } ];
  const [quizQuestions, setQuizQuestions] = useState([
    { question: "According to Materialism, what is the 'Ultimate Reality'?", options: ['Consciousness', 'Matter', 'Energy'], correctAnswer: 'Matter' }
  ]); // State to manage quiz questions

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-5xl p-4 mb-8">
        <Link href="/dashboard/courses" className="text-blue-600 hover:underline">&larr; Back to Dashboard</Link>
      </nav>

      <header className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Create a New Course</h1>
      </header>

      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg border border-gray-100 space-y-10">

        {/* --- Part 1: Landing Page Details --- */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Step 1: Course Landing Page</h2>
          <form className="space-y-6">
            {/* ... (All landing page form fields remain the same) ... */}
             {/* Course Title */}
            <div><label htmlFor="course-title" className="input-label">Course Title</label><input type="text" id="course-title" placeholder="e.g., Materialism (مٹیریل ازم)" className="input-field" /></div>
             {/* Course Subtitle */}
            <div><label htmlFor="course-subtitle" className="input-label">Course Subtitle</label><input type="text" id="course-subtitle" placeholder="A brief, catchy phrase..." className="input-field" /></div>
             {/* Course Description */}
            <div><label htmlFor="course-description" className="input-label">Course Description</label><textarea id="course-description" rows="5" placeholder="Provide a detailed description..." className="input-field"></textarea></div>
             {/* Basic Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><label htmlFor="language" className="input-label">Language</label><select id="language" className="input-field">{languages.map((l) => (<option key={l} value={l}>{l}</option>))}</select></div>
              <div><label htmlFor="level" className="input-label">Level</label><select id="level" className="input-field">{levels.map((l) => (<option key={l} value={l}>{l}</option>))}</select></div>
              <div><label htmlFor="category" className="input-label">Category</label><select id="category" className="input-field"><option value="">Select...</option>{categories.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}</select></div>
            </div>
             {/* Target Audience */}
            <div><label htmlFor="target-audience" className="input-label">Who is this course for?</label><textarea id="target-audience" rows="3" placeholder="Describe target students..." className="input-field"></textarea></div>
             {/* Requirements */}
            <div><label htmlFor="requirements" className="input-label">Requirements / Prerequisites (Optional)</label><textarea id="requirements" rows="3" placeholder="List any required skills..." className="input-field"></textarea></div>
             {/* Thumbnail Upload */}
            <div><label htmlFor="thumbnail-upload" className="input-label">Course Thumbnail Image</label><input id="thumbnail-upload" type="file" accept="image/*" className="input-file"/><p className="text-xs text-gray-500 mt-1">Recommended size: 750x422 pixels</p></div>
             {/* Contributor Checkbox */}
            <div className="relative flex items-start pt-4 border-t">
              <div className="flex items-center h-5"><input id="show-contributors" type="checkbox" className="input-checkbox" /></div>
              <div className="ml-3 text-sm"><label htmlFor="show-contributors" className="font-medium text-gray-700">Show contributor names</label><p className="text-gray-500">Display names on course materials.</p></div>
            </div>
          </form>
        </div>

        {/* --- Part 2: Curriculum Section --- */}
        <div className="pt-10 border-t">
          <h2 className="text-2xl font-bold mb-6">Step 2: Course Curriculum</h2>
          {/* ... (Curriculum display and buttons remain the same) ... */}
           <div className="space-y-6 mb-8">
            {mockCurriculum.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-3"><h3 className="font-semibold text-lg">Section {sectionIndex + 1}: {section.title}</h3><button className="text-xs text-blue-600 hover:underline">Edit Section</button></div>
                <ul className="space-y-2 pl-4">
                  {section.lectures.map((lecture, lectureIndex) => ( <li key={lectureIndex} className="bg-white p-3 rounded border flex justify-between items-center"><div><span className="font-medium">{lecture.title} ({lecture.type})</span>{lecture.resources.length > 0 && <span className="text-xs text-gray-500 ml-2">[{lecture.resources.join(', ')}]</span>}</div><button className="text-xs text-blue-600 hover:underline">Edit Lecture</button></li> ))}
                </ul>
                <button className="text-sm text-blue-600 hover:underline mt-3">+ Add Lecture</button>
              </div> ))}
          </div>
          <div className="flex space-x-4"><button className="button-secondary">+ Add New Section</button></div>
        </div>

        {/* --- Part 3: Quizzes Section --- */}
        <div className="pt-10 border-t">
            <h2 className="text-2xl font-bold mb-6">Step 3: Quizzes</h2>

            {/* Display Existing Questions */}
            <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold">Existing Questions:</h3>
                {quizQuestions.length > 0 ? (
                    quizQuestions.map((q, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border flex justify-between items-start">
                            <div>
                                <p className="font-medium">{index + 1}. {q.question}</p>
                                <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                    {q.options.map(opt => <li key={opt}>{opt} {opt === q.correctAnswer ? <span className="text-green-600 font-bold">(Correct)</span> : ''}</li>)}
                                </ul>
                            </div>
                            <button className="text-xs text-red-600 hover:underline">Remove</button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 italic">No quiz questions added yet.</p>
                )}
            </div>

            {/* Form to Add New Question */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4">Add New Question</h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="new-question" className="input-label">Question Text</label>
                        <input type="text" id="new-question" className="input-field" />
                    </div>
                    {/* Simplified options for prototype */}
                    <div>
                        <label className="input-label">Options (separate by comma)</label>
                        <input type="text" id="new-options" placeholder="Option A, Option B, Option C" className="input-field" />
                    </div>
                    <div>
                        <label htmlFor="correct-answer" className="input-label">Correct Answer</label>
                        <input type="text" id="correct-answer" placeholder="Enter the exact text of the correct option" className="input-field" />
                    </div>
                    <button type="button" className="button-primary">Add Question</button>
                </div>
            </div>
        </div>


        {/* --- Part 4: Final Submit --- */}
        <div className="pt-10 border-t">
           <button type="submit" className="button-publish">
            Save & Publish Course
          </button>
        </div>

      </section>

      {/* Helper CSS */}
      <style jsx>{`
        .input-label { display: block; margin-bottom: 0.25rem; font-size: 0.875rem; font-weight: 500; color: #374151; }
        .input-field { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); width: 100%; }
        .input-field:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 1px #3b82f6; }
        .input-file { margin-top: 0.25rem; display: block; width: 100%; font-size: 0.875rem; color: #6b7280; file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200; }
        .input-checkbox { height: 1rem; width: 1rem; color: #2563eb; border-color: #9ca3af; border-radius: 0.25rem; }
        .button-primary { background-color: #3b82f6; color: white; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.375rem; }
        .button-primary:hover { background-color: #2563eb; }
        .button-secondary { background-color: #e5e7eb; color: #374151; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.375rem; }
        .button-secondary:hover { background-color: #d1d5db; }
        .button-publish { width: 100%; background-color: #10b981; color: white; font-weight: 700; padding: 0.75rem; border-radius: 0.5rem; font-size: 1.125rem; }
        .button-publish:hover { background-color: #059669; }
      `}</style>
    </main>
  );
}