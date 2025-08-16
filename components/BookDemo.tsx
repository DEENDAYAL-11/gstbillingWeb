'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

export default function BookDemo() {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateMobile = (number: string) => /^[0-9]{10}$/.test(number);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateMobile(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');

    const res = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile }),
    });

    if (res.ok) {
      setSuccess(true);
      setMobile('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d{0,10}$/.test(input)) {
      setMobile(input);
    }
  };

  return (
    <section id="demo" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Illustration */}
        <div className="flex justify-center">
          <Image
            src="/assets/Receipt-pana.png"
            alt="GSTbillBook Demo Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </div>

        {/* Right: Form Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Book a <span className="text-yellow-400">Free Demo</span> & Discover Why India Trusts{" "}
            <span className="text-white">GSTbillBook</span>
          </h2>

          <p className="text-gray-300 mb-6">
            Experience hassle-free GST billing, invoice sharing, and real-time sales tracking. <br />
            <span className="text-white font-semibold">100% Secure · Easy to Use · Made for Indian Businesses</span>
          </p>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-yellow-400" />
              <span>Trusted by 1 Crore+ Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              <span>100% Secure & Private</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={mobile}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && (
              <p className="text-green-400 text-sm">
                ✅ Thank you! We&apos;ll contact you soon.
              </p>
            )}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold mt-2 transition"
            >
              Book Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
