import Image from "next/image";

export default function CEOQuote() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: CEO Image */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/cto.jpeg" // Place your actual image in /public/assets/
            alt="CEO of GSTbillBook"
            width={220}
            height={220}
            className="rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Right: Quote and Info */}
        <div className="flex-1">
          <p className="text-lg md:text-xl font-light text-gray-300 mb-6 border-l-4 border-yellow-400 pl-4 italic leading-relaxed">
            “At <span className="text-white font-semibold">GSTbillBook</span>, we are committed to empowering 
            millions of small businesses with reliable, secure, and easy-to-use billing software. 
            Our mission is to simplify your GST compliance so you can focus on growth.”
          </p>

          <p className="text-white font-semibold text-xl">
            – Deendayal Kumawat, CEO
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow-md hover:bg-[#262626] transition">
              <h3 className="text-yellow-400 font-semibold mb-2">Trusted by 1 Crore+</h3>
              <p>
                Indian small businesses rely on{" "}
                <span className="text-white font-semibold">GSTbillBook</span> for accurate billing and invoicing.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-5 rounded-xl shadow-md hover:bg-[#262626] transition">
              <h3 className="text-yellow-400 font-semibold mb-2">100% Data Secure</h3>
              <p>
                We prioritize your privacy and security with{" "}
                <span className="text-white font-semibold">enterprise-grade data protection</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
