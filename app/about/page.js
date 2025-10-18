// app/about/page.js
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function AboutPage() {
  // You can add more team members here
  const teamMembers = [
    { name: 'Shoaib Madni', role: 'Project Director', image: '/scholar_2.avif' },
    { name: 'Hafiz Muhammad Shariq', role: 'Project Manager', image: '/scholar_1.avif' },
    { name: 'Qaisar Ahmed Raja', role: 'Contributor & Reviewer', image: '/scholar_4.avif' },
    { name: 'Dr Haseeb Ahmed Khan', role: 'Contributor & Reviewer', image: '/scholar_3.avif' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-5xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">About Shaoor Institute</h1>
        <p className="mt-3 text-lg text-gray-600">Fostering intellectual and spiritual growth for a conscious generation.</p>
      </header>

      {/* Mission and Vision Section */}
      <section className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
        <p className="text-gray-700 mb-4">
          Shaoor Institute & Media Network is dedicated to fostering intellectual and spiritual growth by addressing contemporary challenges through the lens of timeless principles. Our mission is to equip individuals with the clarity (&apos;Shaoor&apos;) to navigate modern complexities with confidence and conviction.
        </p>
        <p className="text-gray-700">
          We envision a community grounded in authentic knowledge, capable of critical thinking, and committed to positive societal contribution based on revealed guidance. We provide high-quality courses, publications, and media content developed by experienced scholars and educators.
        </p>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-5xl mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full mx-auto mb-4 border-4 border-gray-200 object-cover" />
              <h4 className="font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
