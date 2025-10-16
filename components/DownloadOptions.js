// components/DownloadOptions.js
"use client"; // This component is interactive

import { useState } from 'react';

export default function DownloadOptions({ courseKit }) {
  const [branding, setBranding] = useState('shaoor');
  const [showContributors, setShowContributors] = useState(true);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Download CourseKit</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        {/* Branding Options */}
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-900 mb-3">Branding Options</legend>
          <div className="space-y-3">
            <div className="flex items-center">
              <input id="shaoor-branding" name="branding" type="radio" checked={branding === 'shaoor'} onChange={() => setBranding('shaoor')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="shaoor-branding" className="ml-3 block text-sm font-medium text-gray-700">Download with Shaoor Institute branding</label>
            </div>
            <div className="flex items-center">
              <input id="no-branding" name="branding" type="radio" checked={branding === 'none'} onChange={() => setBranding('none')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="no-branding" className="ml-3 block text-sm font-medium text-gray-700">Download clean version (no branding)</label>
            </div>
            <div className="flex items-center">
              <input id="custom-branding" name="branding" type="radio" checked={branding === 'custom'} onChange={() => setBranding('custom')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="custom-branding" className="ml-3 block text-sm font-medium text-gray-700">Use my own branding</label>
            </div>
          </div>
        </fieldset>

        {/* Custom Logo Upload (appears only when 'custom' is selected) */}
        {branding === 'custom' && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400">
            <label htmlFor="logo-upload" className="block text-sm font-medium text-gray-700">Upload Your Logo</label>
            <input id="logo-upload" type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
          </div>
        )}

        {/* Contributor Options */}
        <div className="relative flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="show-contributors" type="checkbox" checked={showContributors} onChange={() => setShowContributors(!showContributors)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="show-contributors" className="font-medium text-gray-700">Show contributor names</label>
            <p className="text-gray-500">Display the names of contributors and reviewers on the downloaded materials.</p>
          </div>
        </div>

        {/* File List */}
        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Downloadable Files</h3>
          <ul className="space-y-3">
            {courseKit.map((item) => (
              <li key={item.title} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <span className="font-medium text-gray-800">{item.title}</span>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">Download</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}