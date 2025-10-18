// app/checkout/[slug]/page.js
import Link from 'next/link';

const courseData = {
    materialism: { title: 'Materialism (مٹیریل ازم)' },
    modernism: { title: 'Modernism' },
    feminism: { title: 'Feminism' },
};

export default function CheckoutPage({ params }) {
    const { slug } = params;
    const course = courseData[slug] || { title: "the course" };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
            {/* Simulation Message */}
            <div className="w-full max-w-lg mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                <p className="font-bold">Prototype Note:</p>
                {/* Corrected apostrophes */}
                <p>In a real application, if this was your first enrollment and your profile was incomplete, you would be automatically redirected to fill out your details first.</p>
                <Link href="/complete-profile" className="font-semibold underline hover:text-yellow-800">
                    Click here to view the &apos;Complete Profile&apos; form.
                </Link>
            </div>
            {/* Confirmation Box */}
            <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-xl border border-gray-200 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                    <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Enrollment Successful!</h1>
                <p className="mt-3 text-lg text-gray-600">You have successfully enrolled in: <br /><span className="font-semibold">{course.title}</span></p>
                <Link href="/my-courses"><div className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">Go to My Courses</div></Link>
                <div className="mt-4 text-sm"><Link href={`/course/${slug}`} className="text-gray-500 hover:underline">View Course Details</Link></div>
            </div>
        </main>
    );
}