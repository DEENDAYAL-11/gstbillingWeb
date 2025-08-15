'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Title */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-white">GSTBillBook</span>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#demo"
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="block py-2 hover:text-gray-300">
            Contact
          </Link>
          <Link
            href="/book-demo"
            className="block py-2 text-black bg-white text-center mt-2 rounded hover:bg-gray-300"
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
