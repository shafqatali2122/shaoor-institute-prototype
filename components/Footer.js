"use client"; // This must be the very first line

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-600">We&apos;d love to hear from you. Send us a message below.</p>
      </header>

      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="input-label">Your Name</label>
            <input type="text" id="name" className="input-field" required />
          </div>
          <div>
            <label htmlFor="email" className="input-label">Your Email</label>
            <input type="email" id="email" className="input-field" required />
          </div>
          <div>
            <label htmlFor="subject" className="input-label">Subject</label>
            <input type="text" id="subject" className="input-field" />
          </div>
          <div>
            <label htmlFor="message" className="input-label">Message</label>
            <textarea id="message" rows="5" className="input-field" required></textarea>
          </div>
          <button type="submit" className="button-primary w-full">Send Message</button>
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