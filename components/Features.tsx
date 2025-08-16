// components/FeaturesSection.tsx
import {
  FaFileInvoice,
  FaDownload,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaBell,
  FaShieldAlt,
  FaThumbsUp,
} from "react-icons/fa";

const features = [
  {
    title: "Create GST Billing",
    description: "Easily generate GST-compliant invoices with automated tax calculations.",
    icon: <FaFileInvoice className="text-3xl text-yellow-400" />,
  },
  {
    title: "Download & Share Invoices",
    description: "Download invoices as PDFs and share via WhatsApp, email, or direct link.",
    icon: <FaDownload className="text-3xl text-green-400" />,
  },
  {
    title: "Track Sales, GST & Payments",
    description: "Monitor total sales, GST collected, and payment statuses with ease.",
    icon: <FaChartLine className="text-3xl text-blue-400" />,
  },
  {
    title: "Search Past Invoices",
    description: "Quickly find bills by invoice number, customer name, or billing date.",
    icon: <FaSearch className="text-3xl text-pink-400" />,
  },
  {
    title: "Pending Payments Overview",
    description: "Identify which customers have dues and send timely reminders.",
    icon: <FaUsers className="text-3xl text-purple-400" />,
  },
  {
    title: "Due Date Alerts",
    description: "Stay notified of overdue invoices and follow up with ease.",
    icon: <FaBell className="text-3xl text-red-400" />,
  },
  {
    title: "100% Data Security",
    description: "Your data is encrypted and protected with enterprise-grade security.",
    icon: <FaShieldAlt className="text-3xl text-yellow-300" />,
  },
  {
    title: "Trusted by 1 Crore+ Businesses",
    description: "Used and loved by over 10 million Indian small businesses.",
    icon: <FaThumbsUp className="text-3xl text-teal-400" />,
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="bg-black py-16 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Why Choose <span className="text-yellow-400">GSTbillBook</span>?
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-[#262626] transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
