"use client"; // Add this line at the very top

import Link from 'next/link';

export default function ProfilePage() {
  // Mock data for the logged-in user
  const user = {
    name: 'Abdullah Ahmad',
    email: 'abdullah.a@example.com',
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">My Profile</h1>
        <p className="mt-3 text-lg text-gray-600">View and update your account details.</p>
      </header>

      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="input-label">Full Name</label>
            <input type="text" id="name" defaultValue={user.name} className="input-field" />
          </div>
          <div>
            <label htmlFor="email" className="input-label">Email Address</label>
            <input type="email" id="email" defaultValue={user.email} className="input-field" />
          </div>
          {/* Placeholder for password change */}
          <div className="pt-4 border-t">
             <a href="#" className="text-sm text-blue-600 hover:underline">Change Password</a>
          </div>
          <button type="submit" className="button-primary w-full">Save Changes</button>
        </form>
      </section>

      {/* Helper CSS */}
      <style jsx>{`
        .input-label { display: block; margin-bottom: 0.25rem; font-size: 0.875rem; font-weight: 500; color: #374151; }
        .input-field { padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); width: 100%; }
        .input-field:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 1px #3b82f6; }
        .button-primary { background-color: #3b82f6; color: white; font-weight: 600; padding: 0.75rem; border-radius: 0.375rem; }
        .button-primary:hover { background-color: #2563eb; }
      `}</style>
    </main>
  );
}