// components/CategoryGrid.js
import Link from 'next/link';
import Image from 'next/image';

// Data for the categories, using your existing scholar images as thumbnails
const categories = [
  { 
    name: 'Uloom e Islami', 
    slug: 'uloom-e-islami', 
    thumbnail: '/scholar_4.avif', // Using your existing images
    courseCount: 8,
    instructors: 'Dr. Atif Aslam, Shoaib Madni'
  },
  { 
    name: 'Uloom e Jadida', 
    slug: 'uloom-e-jadida', 
    thumbnail: '/scholar_3.avif', // Using your existing images
    courseCount: 5,
    instructors: 'Dr Haseeb Ahmed Khan'
  },
  { 
    name: 'Tafheem e Maghrib', 
    slug: 'tafheem-e-maghrib', 
    thumbnail: '/scholar_2.avif', // Using your existing images
    courseCount: 12,
    instructors: 'Qaisar Ahmed Raja'
  },
  { 
    name: 'Jadeed Falsafa', 
    slug: 'jadeed-falsafa', 
    thumbnail: '/scholar_1.avif', // Using your existing images
    courseCount: 7,
    instructors: 'Dr. Atif Aslam'
  },
  { 
    name: 'Tazkiyah e Nafs', 
    slug: 'tazkiyah-e-nafs', 
    thumbnail: '/scholar_2.avif', // Reusing an image
    courseCount: 10,
    instructors: 'Shoaib Madni'
  },
  { 
    name: 'Ilhaad', 
    slug: 'ilhaad', 
    thumbnail: '/scholar_4.avif', // Reusing an image
    courseCount: 4,
    instructors: 'Qaisar Ahmed Raja'
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full max-w-7xl mb-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore by Category</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden 
                            transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group">

              {/* Thumbnail Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={category.thumbnail}
                  alt={`Thumbnail for ${category.name}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }} // Ensures images are centered
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-900 truncate">{category.name}</h4>

                {/* Course Count */}
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494M12 6.253A6.253 6.253 0 0118.253 12M12 6.253A6.253 6.253 0 005.747 12m12.506 0A6.253 6.253 0 0112 17.747M5.747 12A6.253 6.253 0 0012 17.747"></path></svg>
                  <span>{category.courseCount} Courses</span>
                </div>

                {/* Key Instructors */}
                <div className="mt-4 border-t pt-3">
                  <p className="text-xs font-semibold text-gray-700">Key Instructors:</p>
                  <p className="text-sm text-gray-600 truncate">{category.instructors}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}