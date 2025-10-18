// app/auth/page.js
"use client"; // Required for useState

import Link from 'next/link';
import { useState } from 'react';

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true); // State to toggle forms

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        
        {/* Logo and Title */}
        <div className="text-center mb-8">
            <Link href="/">
                {/* Reusing the logo element, adjust path if needed */}
                <img src="/shaoor_logo.png" alt="Shaoor Institute Logo" className="w-24 h-24 mx-auto mb-2" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">
              {isLoginView ? 'Welcome Back' : 'Create Your Account'}
            </h1>
            <p className="text-gray-500">
              {isLoginView ? 'Login to access your courses.' : 'Sign up to start learning.'}
            </p>
        </div>

        {/* Login Form */}
        {isLoginView && (
          <form className="space-y-4">
            <div>
              <label htmlFor="login-email" className="input-label">Email Address</label>
              <input type="email" id="login-email" className="input-field" required />
            </div>
            <div>
              <label htmlFor="login-password" className="input-label">Password</label>
              <input type="password" id="login-password" className="input-field" required />
              <div className="text-right mt-1">
                 <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button type="submit" className="button-primary w-full">Login</button>
          </form>
        )}

        {/* Sign Up Form */}
        {!isLoginView && (
          <form className="space-y-4">
             <div>
              <label htmlFor="signup-name" className="input-label">Full Name</label>
              <input type="text" id="signup-name" className="input-field" required />
            </div>
            <div>
              <label htmlFor="signup-email" className="input-label">Email Address</label>
              <input type="email" id="signup-email" className="input-field" required />
            </div>
            <div>
              <label htmlFor="signup-password" className="input-label">Password</label>
              <input type="password" id="signup-password" className="input-field" required />
            </div>
             <div>
              <label htmlFor="signup-confirm-password" className="input-label">Confirm Password</label>
              <input type="password" id="signup-confirm-password" className="input-field" required />
            </div>
            <button type="submit" className="button-primary w-full">Sign Up</button>
          </form>
        )}

        {/* Toggle between Login/Sign Up */}
        <div className="mt-6 text-center text-sm">
          {isLoginView ? (
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <button onClick={() => setIsLoginView(false)} className="font-semibold text-blue-600 hover:underline">
                Sign Up
              </button>
            </p>
          ) : (
             <p className="text-gray-600">
              Already have an account?{' '}
              <button onClick={() => setIsLoginView(true)} className="font-semibold text-blue-600 hover:underline">
                Login
              </button>
            </p>
          )}
        </div>
      </div>

       {/* Helper CSS (copied from previous files) */}
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