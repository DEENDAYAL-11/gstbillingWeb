export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 px-6 md:px-20">
      {/* Top border line */}
      <hr className="border-t border-gray-700 mb-6" />

      {/* Centered Footer Text */}
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>
          &copy;2025{" "}
          <span className="text-white font-medium">GSTBillBook</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
