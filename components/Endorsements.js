// components/Endorsements.js
export default function Endorsements() {
  return (
    <section className="w-full max-w-7xl py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">Endorsement by Scholars</h3>
        <p className="text-gray-500 mt-2">Trusted by leading thinkers and academics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Scholar 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <img src="https://via.placeholder.com/100" alt="Scholar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
          <p className="text-gray-600 italic">"Shaoor Institute is providing an invaluable service in intellectual development for our youth."</p>
          <h4 className="font-bold text-gray-800 mt-4">Scholar Name</h4>
          <p className="text-sm text-gray-500">Title/Affiliation</p>
        </div>
        {/* Scholar 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <img src="https://via.placeholder.com/100" alt="Scholar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
          <p className="text-gray-600 italic">"The depth and clarity of the courses offered here are commendable and much needed in our times."</p>
          <h4 className="font-bold text-gray-800 mt-4">Scholar Name</h4>
          <p className="text-sm text-gray-500">Title/Affiliation</p>
        </div>
        {/* Scholar 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <img src="https://via.placeholder.com/100" alt="Scholar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
          <p className="text-gray-600 italic">"A crucial platform for engaging with contemporary issues through a principled, scholarly lens."</p>
          <h4 className="font-bold text-gray-800 mt-4">Scholar Name</h4>
          <p className="text-sm text-gray-500">Title/Affiliation</p>
        </div>
      </div>
    </section>
  );
}