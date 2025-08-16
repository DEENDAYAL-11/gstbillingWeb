// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt, FaFlag, FaThumbsUp } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Side - Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            GSTbillBook – Best Billing & Invoicing Software in India
          </h1>
          <p className="text-gray-300 mb-6">
            <span className="text-white font-semibold">Join thousands of Indian Small Businesses</span>{" "}
            who trust <span className="text-yellow-400 font-bold">GSTbillBook</span> for GST Billing, Invoicing,
            e-Invoicing and e-Way Billing.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <Link href="#get-started">
              <button className="bg-white text-black px-5 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                Start Free Billing
              </button>
            </Link>
            <Link href="#demo">
              <button className="border border-white text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition">
                Book Free Demo
              </button>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaFlag className="text-green-400" />
              <span>Made in India 🇮🇳</span>
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-blue-400" />
              <span>Trusted by Indian Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-yellow-400" />
              <span>100% Data Secure</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/assets/book-demo-illustration.png" // Make sure this file exists in public/assets/
            alt="Billing Software Hero"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
