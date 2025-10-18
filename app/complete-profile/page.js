// app/complete-profile/page.js
"use client"; // Needs client interactivity for form

import Link from 'next/link';

export default function CompleteProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Complete Your Profile</h1>
          <p className="text-gray-600 mt-2">Please provide some additional details to complete your student profile before enrolling.</p>
        </header>

        <form className="space-y-6">
          {/* Profile Picture Upload */}
          <div>
            <label htmlFor="profile-picture" className="input-label">Profile Picture (Optional)</label>
            <input id="profile-picture" type="file" accept="image/*" className="input-file"/>
          </div>

          {/* CNIC Number */}
          <div>
            <label htmlFor="cnic" className="input-label">CNIC Number</label>
            <input type="text" id="cnic" placeholder="e.g., 42201-XXXXXXX-X" className="input-field" required />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="input-label">Phone Number</label>
            <input type="tel" id="phone" placeholder="+92 XXX XXXXXXX" className="input-field" required />
          </div>

          {/* City & Country */}
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

          {/* Qualifications */}
          <div>
            <label htmlFor="qualifications" className="input-label">Highest Qualification</label>
            <textarea id="qualifications" rows="3" placeholder="e.g., M.Phil Islamic Studies, BSc Computer Science, Aalimiyyah, etc." className="input-field" required></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="button-primary w-full">Save Profile & Continue Enrollment</button>
        </form>

        {/* Link back if needed */}
        <div className="mt-6 text-center text-sm">
          <Link href="/" className="text-gray-500 hover:underline">
            Skip for now (Return Home)
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
      `}</style>
    </main>
  );
}