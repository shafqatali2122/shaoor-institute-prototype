export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">

      {/* Navigation Bar Placeholder */}
      <nav className="w-full max-w-5xl p-4 border-b mb-8 text-center bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">SHAOOR INSTITUTE</h1>
        <div className="flex justify-center space-x-6 mt-2 text-blue-600">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Courses</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Sign Up</a>
        </div>
      </nav>

      {/* Banner Placeholder */}
      <header className="w-full max-w-5xl text-center bg-blue-600 text-white py-16 rounded-lg shadow-xl mb-12">
        <h2 className="text-4xl font-extrabold">HEADING / TAGLINE</h2>
        <p className="mt-2 text-lg">TOPICS & CATEGORIES</p>
      </header>

      {/* Course Section */}
      <section className="w-full max-w-5xl mb-12">
        <h3 className="text-3xl font-bold text-center mb-6 text-gray-700">WHAT'S NEW | POPULAR COURSES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* This is where course cards like in your image would go */}
          <div className="border p-4 rounded-lg bg-white shadow-lg">Course Card 1</div>
          <div className="border p-4 rounded-lg bg-white shadow-lg">Course Card 2</div>
          <div className="border p-4 rounded-lg bg-white shadow-lg">Course Card 3</div>
        </div>
      </section>

      {/* Endorsement Section */}
      <section className="w-full max-w-5xl text-center bg-white p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-bold text-gray-700">Endorsement by Scholars</h3>
      </section>

      {/* About Section */}
      <section className="w-full max-w-5xl text-center p-8">
        <h3 className="text-3xl font-bold text-gray-700">INTRO OF SHAOOR INSTITUTE</h3>
      </section>

    </main>
  );
}