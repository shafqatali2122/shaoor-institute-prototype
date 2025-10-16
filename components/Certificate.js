// components/Certificate.js
import Image from 'next/image';

export default function Certificate({ studentName, courseName, date }) {
  return (
    <div id="certificate" className="bg-white p-10 border-4 border-blue-900 rounded-lg max-w-4xl mx-auto shadow-2xl">
      <div className="text-center border-b-2 border-gray-200 pb-6">
        <Image 
          src="/shaoor_logo.png" // Make sure your logo is in the /public folder
          alt="Shaoor Institute Logo" 
          width={150} 
          height={150}
          className="mx-auto" 
        />
        <h1 className="text-4xl font-bold text-blue-900 mt-4">Certificate of Completion</h1>
        <p className="text-gray-500 mt-2">This certificate is proudly presented to</p>
      </div>
      <div className="text-center my-10">
        <h2 className="text-5xl font-handwriting text-gray-800">{studentName}</h2>
      </div>
      <div className="text-center">
        <p className="text-gray-600">for successfully completing the course</p>
        <h3 className="text-3xl font-semibold text-gray-900 mt-2">{courseName}</h3>
        <p className="text-gray-500 mt-8">Issued on: {date}</p>
      </div>
      <div className="mt-10 flex justify-between items-center text-center">
        <div>
          <p className="font-bold border-t-2">Shoaib Madni</p>
          <p className="text-sm">Project Director</p>
        </div>
        <div>
          <p className="font-bold border-t-2">Dr. Atif Aslam Rao</p>
          <p className="text-sm">Academic Head</p>
        </div>
      </div>
    </div>
  );
}