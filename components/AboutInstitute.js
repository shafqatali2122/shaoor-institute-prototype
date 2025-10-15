// components/AboutInstitute.js
export default function AboutInstitute() {
  return (
    <section className="w-full max-w-7xl py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" alt="Shaoor Institute" className="rounded-lg shadow-xl w-full h-full object-cover" />
        </div>
        {/* Text Side */}
        <div className="text-left">
          <h3 className="text-3xl font-bold text-gray-800">About Shaoor Institute</h3>
          <p className="text-gray-600 mt-4 text-lg">
            Shaoor Institute & Media Network is dedicated to fostering intellectual and spiritual growth by addressing contemporary challenges through the lens of timeless principles.
          </p>
          <p className="text-gray-600 mt-4">
            Our mission is to equip individuals with the clarity ('Shaoor') to navigate modern complexities with confidence and conviction. We provide high-quality courses, publications, and media content developed by experienced scholars and educators.
          </p>
          <a href="#" className="mt-6 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors hover:bg-blue-700">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}