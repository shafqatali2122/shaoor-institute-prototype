// app/complete-profile/page.js
"use client";

import Link from 'next/link';

const availableCourses = [
    { slug: 'materialism', title: 'Materialism (مٹیریل ازم)' },
    { slug: 'modernism', title: 'Modernism' },
    { slug: 'feminism', title: 'Feminism' },
    { slug: 'post-modernism', title: 'Post-Modernism' },
    { slug: 'liberalism', title: 'Liberalism' },
    { slug: 'humanism', title: 'Humanism' },
    { slug: 'ilhaad', title: 'Ilhaad' },
];

export default function CompleteProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl border border-gray-200">

        <header className="text-center mb-8 border-b pb-4">
          <img src="/shaoor_logo.png" alt="Shaoor Institute Logo" className="w-20 h-20 mx-auto mb-2" />
          <h1 className="text-4xl font-bold text-gray-800">Student Admission Form</h1>
          <p className="text-gray-600 mt-2">Please provide your details accurately to complete the enrollment process.</p>
        </header>

        <form className="space-y-8">

          {/* Personal Information Section */}
          <fieldset className="space-y-4 border rounded-lg p-6">
             <legend className="text-xl font-semibold text-gray-800 px-2 -mt-7 bg-white">Personal Information</legend>
             <div>
                <label htmlFor="full-name" className="input-label">Full Name (As per CNIC/Passport)</label>
                <input type="text" id="full-name" className="input-field" required />
             </div>
             <div>
                <label htmlFor="profile-picture" className="input-label">Profile Picture (Passport Size)</label>
                <input id="profile-picture" type="file" accept="image/*" className="input-file"/>
                <p className="text-xs text-gray-500 mt-1">Clear, front-facing photo preferred.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cnic" className="input-label">CNIC Number</label>
                  <input type="text" id="cnic" placeholder="e.g., 42201-XXXXXXX-X" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="cnic-upload" className="input-label">Upload CNIC (Front & Back)</label>
                  <input id="cnic-upload" type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-file"/>
                  <p className="text-xs text-gray-500 mt-1">Combine both sides into one file if possible (PDF preferred).</p>
                </div>
             </div>
             <div>
                <label htmlFor="phone" className="input-label">Phone Number (WhatsApp preferred)</label>
                <input type="tel" id="phone" placeholder="+92 XXX XXXXXXX" className="input-field" required />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="input-label">City</label>
                  <input type="text" id="city" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="country" className="input-label">Country</label>
                  <input type="text" id="country" defaultValue="Pakistan" className="input-field" required />
                </div>
             </div>
          </fieldset>

          {/* Academic Information Section */}
           <fieldset className="space-y-4 border rounded-lg p-6">
             <legend className="text-xl font-semibold text-gray-800 px-2 -mt-7 bg-white">Academic Background</legend>
             <div>
                <label htmlFor="qualification" className="input-label">Highest Qualification</label>
                <input type="text" id="qualification" placeholder="e.g., M.Phil Islamic Studies, BSc Computer Science, Aalimiyyah" className="input-field" required />
             </div>
             <div>
                <label htmlFor="institution" className="input-label">Institution Name</label>
                <input type="text" id="institution" placeholder="Name of University / Madrasah / College" className="input-field" required />
             </div>
             <div>
                <label htmlFor="year-completion" className="input-label">Year of Completion</label>
                <input type="number" id="year-completion" placeholder="YYYY" min="1950" max={new Date().getFullYear()} className="input-field" required />
             </div>
          </fieldset>

          {/* Course Selection Section */}
           <fieldset className="space-y-4 border rounded-lg p-6">
             <legend className="text-xl font-semibold text-gray-800 px-2 -mt-7 bg-white">Course Selection</legend>
              <div>
                <label htmlFor="course-select" className="input-label">Select Course for Enrollment</label>
                <select id="course-select" className="input-field" required>
                  <option value="">Select the course...</option>
                  {availableCourses.map((course) => (
                    <option key={course.slug} value={course.slug}>{course.title}</option>
                  ))}
                </select>
              </div>
          </fieldset>

          {/* Submit Button */}
          <button type="submit" className="button-primary w-full !mt-10 text-lg">Submit Admission Form</button>
        </form>

        <div className="mt-8 text-center text-sm">
          <Link href="/" className="text-gray-500 hover:underline">
            Cancel and Return Home
          </Link>
        </div>
      </div>

       {/* Helper CSS */}
       <style jsx>{`
        .input-label { display: block; margin-bottom: 0.25rem; font-size: 0.875rem; font-weight: 500; color: #374151; }
        .input-field { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); width: 100%; }
        .input-field:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 1px #3b82f6; }
        .input-file { margin-top: 0.25rem; display: block; width: 100%; font-size: 0.875rem; color: #6b7280; file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200; }
        .button-primary { background-color: #3b82f6; color: white; font-weight: 600; padding: 0.75rem; border-radius: 0.375rem; }
        .button-primary:hover { background-color: #2563eb; }
        fieldset { border-color: #e5e7eb; /* gray-200 */ }
        legend { background-color: #fff; /* white */ }
      `}</style>
    </main>
  );
}