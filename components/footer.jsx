// components/Footer.tsx or Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-white text-xl font-bold">PathCraftAI</h2>
          <p className="mt-2 text-sm">
            Empowering careers with smart AI coaching & resumes — crafted using Next.js, Gemini AI, Prisma & more.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features" className="hover:underline">Features</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/happyraj011" target="_blank" className="hover:underline">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/happy-raj-543792257/" target="_blank" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} PathCraftAI. All rights reserved.
      </div>
    </footer>
  );
}
