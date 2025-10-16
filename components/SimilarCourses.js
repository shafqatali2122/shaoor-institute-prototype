// components/SimilarCourses.js
import Link from 'next/link';
import Image from 'next/image';

export default function SimilarCourses({ courses }) {
  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Similar Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link key={course.slug} href={`/course/${course.slug}`}>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden 
                              transition-transform transform hover:scale-105 group">
              <div className="relative h-32 w-full">
                <Image
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 truncate">{course.title}</h4>
                <p className="text-sm text-gray-500">{course.creator}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}