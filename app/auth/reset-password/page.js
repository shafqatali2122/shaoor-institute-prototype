"use client"; // Add this line at the very top

import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        {/* Logo and Title */}
        <div className="text-center mb-8">
            <Link href="/">
                <img src="/shaoor_logo.png" alt="Shaoor Institute Logo" className="w-20 h-20 mx-auto mb-2" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Reset Your Password</h1>
            <p className="text-gray-500">Enter your email to receive reset instructions.</p>
        </div>

        {/* Reset Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="reset-email" className="input-label">Email Address</label>
            <input type="email" id="reset-email" className="input-field" required />
          </div>
          <button type="submit" className="button-primary w-full">Send Reset Link</button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Remember your password?{' '}
            <Link href="/auth" className="font-semibold text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

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