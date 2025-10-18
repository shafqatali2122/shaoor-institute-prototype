// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Institute Info */}
        <div>
          <h3 className="font-bold text-lg">SHAOOR INSTITUTE</h3>
          <p className="text-sm text-gray-400 mt-2">Fostering intellectual and spiritual growth.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/" className="text-gray-300 hover:underline">Home</Link></li>
            <li><Link href="/my-courses" className="text-gray-300 hover:underline">My Courses</Link></li>
            <li><Link href="/teach" className="text-gray-300 hover:underline">Teach with Us</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="text-sm text-gray-300 mt-2">info@shaoor.pk</p>
          {/* Add social media icons here if needed */}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shaoor Institute. All Rights Reserved.</p>
      </div>
    </footer>
  );
}