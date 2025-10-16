// components/EnrolledCourseCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function EnrolledCourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1">
      <div className="relative h-40 w-full">
        <Image
          src={course.thumbnail}
          alt={`Thumbnail for ${course.title}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 truncate">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-4">by {course.creator}</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-right text-gray-600">{course.progress}% Complete</p>

        <Link href={`/course/${course.slug}`}>
          <div className="mt-4 block w-full text-center bg-gray-800 text-white font-semibold py-2 rounded-lg hover:bg-black">
            Continue Learning
          </div>
        </Link>
      </div>
    </div>
  );
}