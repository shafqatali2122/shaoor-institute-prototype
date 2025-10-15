// components/CategoryGrid.js
import Link from 'next/link';

// Your list of categories
const categories = [
  { name: 'Uloom e Islami', slug: 'uloom-e-islami' },
  { name: 'Uloom e Jadida', slug: 'uloom-e-jadida' },
  { name: 'Tafheem e Maghrib', slug: 'tafheem-e-maghrib' },
  { name: 'Jadeed Falsafa', slug: 'jadeed-falsafa' },
  { name: 'Tazkiyah e Nafs', slug: 'tazkiyah-e-nafs' },
  { name: 'Ilhaad', slug: 'ilhaad' },
];

export default function CategoryGrid() {
  return (
    <section className="w-full max-w-7xl mb-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900">{category.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}