'use client';

import { useState } from 'react';

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError('⚠️ All fields are required.');
      return;
    }

    if (!validateEmail(form.email)) {
      setError('⚠️ Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.message || '❌ Something went wrong.');
      }
    } catch (err) {
      setError('❌ Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black min-h-[600px] flex items-center px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">

        {/* Left side: Company Address */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            <strong>GSTBillBook Pvt. Ltd.</strong><br />
            Word No. 3, Mahendra Prajapati House,<br />
            Sikar, Rajasthan - 332405, India<br /><br />
            📞 +91 9694254591<br />
            📧 kumawatdeendayal11@gmail.com
          </p>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 bg-[#111111] p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>

          {submitted ? (
            <p className="text-green-400 text-lg font-semibold">
              ✅ Thanks for contacting us! We&apos;ll get back shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-600 focus:border-white text-white outline-none transition"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-600 focus:border-white text-white outline-none transition"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-600 focus:border-white text-white outline-none resize-none transition"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white hover:bg-gray-200 transition-colors duration-300 text-black font-bold py-4 rounded-lg"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
