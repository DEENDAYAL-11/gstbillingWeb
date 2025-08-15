'use client';

import { useState } from 'react';

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

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
      setError(data.message || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="bg-black min-h-[600px] flex items-center px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 w-full">

        {/* Left side: Company Address */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Information</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            <strong>GSTBillBook Pvt. Ltd.</strong><br />
            Word No. 3 Mahendra Prajapti House,<br />
            Sikar, Raj - 332405<br />
            India<br /><br />
            Phone: +91 9694254591<br />
            Email: kumawatdeendayal11@gmail.com
          </p>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 bg-[#111111] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>

          {submitted ? (
            <p className="text-white text-lg font-semibold">
              ✅ Thanks for contacting us! We&apos;ll get back shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded bg-black border border-white focus:border-white text-white outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded bg-black border border-white focus:border-white text-white outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full p-4 rounded bg-black border border-white focus:border-white text-white outline-none resize-none"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-200 transition-colors duration-300 text-black font-bold py-4 rounded"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
