export default function Footer() {
  return (
   <footer className="bg-black text-white py-8 px-6 md:px-20">
      {/* Top border line */}
      <hr className="border-t  border-gray-700 mb-6" />

      {/* Centered Footer Text */}
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GSTBillBook. All rights reserved.</p>
      </div>

    </footer>
  );
}
