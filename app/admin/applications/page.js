// app/admin/applications/page.js
import Link from 'next/link';

// Mock data for submitted applications
const applications = [
  {
    id: 1,
    name: 'Dr. Fatima Ahmed',
    email: 'fatima.a@example.com',
    expertise: 'Islamic Jurisprudence',
    proposal: 'A detailed course on the principles of Fiqh for beginners.',
  },
  {
    id: 2,
    name: 'Yusuf Khan',
    email: 'yusuf.k@example.com',
    expertise: 'Modern Philosophy',
    proposal: 'A critical review of postmodernism and its impact on Muslim thought.',
  },
];

export default function ApplicationsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-7xl p-4 mb-8">
        <Link href="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </nav>

      <header className="w-full max-w-7xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">Instructor Applications</h1>
        <p className="mt-3 text-lg text-gray-600">Review and manage new instructor submissions.</p>
      </header>

      <section className="w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email & Expertise</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proposal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{app.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{app.email}</div>
                    <div className="text-sm text-gray-500">{app.expertise}</div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-700 max-w-md">{app.proposal}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-green-600 hover:text-green-900">Approve</a>
                    <a href="#" className="ml-4 text-red-600 hover:text-red-900">Deny</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}