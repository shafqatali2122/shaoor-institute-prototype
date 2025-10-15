// components/CategoryGrid.js
import Link from 'next/link';

// Data for the categories including icons and descriptions
const categories = [
  { 
    name: 'Uloom e Islami', 
    slug: 'uloom-e-islami', 
    icon: '🕋', 
    description: 'Core Islamic disciplines and knowledge.' 
  },
  { 
    name: 'Uloom e Jadida', 
    slug: 'uloom-e-jadida', 
    icon: '🔬', 
    description: 'Engaging with contemporary fields of study.' 
  },
  { 
    name: 'Tafheem e Maghrib', 
    slug: 'tafheem-e-maghrib', 
    icon: '🏛️', 
    description: 'A critical study of Western thought and civilization.' 
  },
  { 
    name: 'Jadeed Falsafa', 
    slug: 'jadeed-falsafa', 
    icon: '🤔', 
    description: 'Exploring key philosophical movements and ideas.' 
  },
  { 
    name: 'Tazkiyah e Nafs', 
    slug: 'tazkiyah-e-nafs', 
    icon: '❤️', 
    description: 'Principles of spiritual and moral development.' 
  },
  { 
    name: 'Ilhaad', 
    slug: 'ilhaad', 
    icon: '⚛️', 
    description: 'Addressing and analyzing the arguments of atheism.' 
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full max-w-7xl mb-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            {/* This is the new, professionally styled card */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center cursor-pointer 
                            transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              {/* Icon with a colored background */}
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-3xl">{category.icon}</span>
              </div>
              {/* Category Name */}
              <h4 className="text-xl font-bold text-gray-900">{category.name}</h4>
              {/* Category Description */}
              <p className="text-sm text-gray-500 mt-1">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}