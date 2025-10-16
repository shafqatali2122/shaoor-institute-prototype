// app/teach/page.js
import Link from 'next/link';

export default function TeachPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-5xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Become an Instructor</h1>
        <p className="mt-3 text-lg text-gray-600">Share your knowledge and contribute to the intellectual growth of our community.</p>
      </header>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Benefits */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Why Teach with Shaoor?</h2>
          <div>
            <h3 className="font-semibold text-xl">Reach a Dedicated Audience</h3>
            <p className="text-gray-600">Connect with students who are passionate about deep learning and intellectual inquiry from a principled perspective.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Professional Support</h3>
            <p className="text-gray-600">We provide the tools, resources, and support you need to create high-quality, impactful courses.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Make a Real Impact</h3>
            <p className="text-gray-600">Contribute to a meaningful cause by helping us build a generation grounded in knowledge and clarity ('Shaoor').</p>
          </div>
        </div>

        {/* Right Side: Application Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Area of Expertise</label>
              <input type="text" id="expertise" placeholder="e.g., Islamic Philosophy, Modernism, etc." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="proposal" className="block text-sm font-medium text-gray-700">Brief Course Proposal</label>
              <textarea id="proposal" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}