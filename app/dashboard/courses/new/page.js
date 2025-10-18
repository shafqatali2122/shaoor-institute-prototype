"use client"; // Keep this line at the very top

import Link from 'next/link';

export default function NewCoursePage() {
  // Mock data for dropdowns
  const categories = [ { name: 'Uloom e Islami', slug: 'uloom-e-islami' }, { name: 'Uloom e Jadida', slug: 'uloom-e-jadida' }, { name: 'Tafheem e Maghrib', slug: 'tafheem-e-maghrib' }, { name: 'Jadeed Falsafa', slug: 'jadeed-falsafa' }, { name: 'Tazkiyah e Nafs', slug: 'tazkiyah-e-nafs' }, { name: 'Ilhaad', slug: 'ilhaad' } ];
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const languages = ['Urdu', 'English'];

  // Mock curriculum data for the prototype
  const mockCurriculum = [
    { 
      title: "Section 1: Introduction", 
      lectures: [
        { title: "What is Materialism?", type: "video", content: "video_placeholder.mp4", resources: ["1001-1.1 Lesson.pdf"] },
        { title: "Key Aspects", type: "video", content: "video_placeholder.mp4", resources: [] }
      ] 
    },
    {
      title: "Section 2: Consequences & Effects",
      lectures: [
        { title: "Psychological Effects", type: "video", content: "video_placeholder.mp4", resources: ["1001-1.5 Questionnaire.pdf", "1001-1.8 PPT Presentation.pptm"] }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-5xl p-4 mb-8"> {/* Increased max-width */}
        <Link href="/dashboard/courses" className="text-blue-600 hover:underline">&larr; Back to Dashboard</Link>
      </nav>

      <header className="w-full max-w-5xl text-center mb-12"> {/* Increased max-width */}
        <h1 className="text-5xl font-extrabold text-gray-900">Create a New Course</h1>
        {/* We can make this a multi-step header later */}
      </header>

      {/* Combined Landing Page & Curriculum Section */}
      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg border border-gray-100 space-y-10"> {/* Increased max-width */}

        {/* --- Part 1: Landing Page Details --- */}
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Step 1: Course Landing Page</h2>
          <form className="space-y-6">
            {/* ... (All the previous form fields: Title, Subtitle, Description, Language, Level, Category, Target Audience, Requirements, Thumbnail, Contributors Checkbox) ... */}
            {/* Course Title */}
            <div>
              <label htmlFor="course-title" className="block text-sm font-medium text-gray-700">Course Title</label>
              <input type="text" id="course-title" placeholder="e.g., Materialism (مٹیریل ازم)" className="mt-1 block w-full input-field" />
            </div>
             {/* Course Subtitle */}
            <div>
              <label htmlFor="course-subtitle" className="block text-sm font-medium text-gray-700">Course Subtitle</label>
              <input type="text" id="course-subtitle" placeholder="A brief, catchy phrase summarizing the course" className="mt-1 block w-full input-field" />
            </div>
            {/* Course Description */}
            <div>
              <label htmlFor="course-description" className="block text-sm font-medium text-gray-700">Course Description</label>
              <textarea id="course-description" rows="5" placeholder="Provide a detailed description..." className="mt-1 block w-full input-field"></textarea>
            </div>
            {/* Basic Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                <select id="language" className="mt-1 block w-full input-field">{languages.map((l) => (<option key={l} value={l}>{l}</option>))}</select>
              </div>
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                <select id="level" className="mt-1 block w-full input-field">{levels.map((l) => (<option key={l} value={l}>{l}</option>))}</select>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select id="category" className="mt-1 block w-full input-field"><option value="">Select...</option>{categories.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}</select>
              </div>
            </div>
             {/* Target Audience */}
            <div>
              <label htmlFor="target-audience" className="block text-sm font-medium text-gray-700">Who is this course for?</label>
              <textarea id="target-audience" rows="3" placeholder="Describe target students..." className="mt-1 block w-full input-field"></textarea>
            </div>
             {/* Requirements */}
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Requirements / Prerequisites (Optional)</label>
              <textarea id="requirements" rows="3" placeholder="List any required skills..." className="mt-1 block w-full input-field"></textarea>
            </div>
             {/* Thumbnail Upload */}
            <div>
               <label htmlFor="thumbnail-upload" className="block text-sm font-medium text-gray-700">Course Thumbnail Image</label>
               <input id="thumbnail-upload" type="file" accept="image/*" className="input-file"/>
               <p className="text-xs text-gray-500 mt-1">Recommended size: 750x422 pixels</p>
            </div>
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

          {/* Display existing sections and lectures */}
          <div className="space-y-6 mb-8">
            {mockCurriculum.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">Section {sectionIndex + 1}: {section.title}</h3>
                  <button className="text-xs text-blue-600 hover:underline">Edit Section</button>
                </div>
                <ul className="space-y-2 pl-4">
                  {section.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex} className="bg-white p-3 rounded border flex justify-between items-center">
                      <div>
                        <span className="font-medium">{lecture.title} ({lecture.type})</span>
                        {lecture.resources.length > 0 && 
                          <span className="text-xs text-gray-500 ml-2">[{lecture.resources.join(', ')}]</span>}
                      </div>
                      <button className="text-xs text-blue-600 hover:underline">Edit Lecture</button>
                    </li>
                  ))}
                </ul>
                <button className="text-sm text-blue-600 hover:underline mt-3">+ Add Lecture</button>
              </div>
            ))}
          </div>

          {/* Buttons to add new sections/lectures */}
          <div className="flex space-x-4">
             <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300">
               + Add New Section
             </button>
          </div>
        </div>

        {/* --- Part 3: Final Submit --- */}
        <div className="pt-10 border-t">
           <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 text-lg">
            Save & Publish Course
          </button>
        </div>

      </section>

      {/* Helper CSS */}
      <style jsx>{`
        .input-field { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); width: 100%; }
        .input-field:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 1px #3b82f6; }
        .input-file { margin-top: 0.25rem; display: block; width: 100%; font-size: 0.875rem; color: #6b7280; file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200; }
        .input-checkbox { height: 1rem; width: 1rem; color: #2563eb; border-color: #9ca3af; border-radius: 0.25rem; }
      `}</style>
    </main>
  );
}