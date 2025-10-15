// components/Endorsements.js
import Image from 'next/image';

export default function Endorsements() {
  return (
    <section className="w-full max-w-7xl py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800">Endorsement by Scholars</h3>
        <p className="text-gray-500 mt-2">Trusted by leading thinkers and academics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <Image src="/scholar_4.avif" alt="Qaisar Ahmed Raja" width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" />
          <p className="text-gray-600 italic">&quot;Shaoor Institute is providing an invaluable service in intellectual development for our youth.&quot;</p>
          <h4 className="font-bold text-gray-800 mt-4">Qaisar Ahmed Raja</h4>
          <p className="text-sm text-gray-500">Polemicist & Debater</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <Image src="/scholar_3.avif" alt="Dr Haseeb Ahmed Khan" width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" />
          <p className="text-gray-600 italic">&quot;The depth and clarity of the courses offered here are commendable and much needed in our times.&quot;</p>
          <h4 className="font-bold text-gray-800 mt-4">Dr Haseeb Ahmed Khan</h4>
          <p className="text-sm text-gray-500">Assist. Prof Hamdard University</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <Image src="/scholar_2.avif" alt="Shoaib Madni" width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" />
          <p className="text-gray-600 italic">&quot;A crucial platform for engaging with contemporary issues through a principled, scholarly lens.&quot;</p>
          <h4 className="font-bold text-gray-800 mt-4">Shoaib Madni</h4>
          <p className="text-sm text-gray-500">Project Director, Shaoor Institute</p>
        </div>
      </div>
    </section>
  );
}