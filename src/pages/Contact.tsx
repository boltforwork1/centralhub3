import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Offices 2803–2804, Concord Tower, Media City, Dubai, UAE',
  },
  { icon: Phone, label: 'Phone', value: '+971 4 238 8381' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+971 58 557 0778' },
  { icon: Mail, label: 'Email', value: 'info@centralhub.ae' },
  { icon: Clock, label: 'Business Hours', value: 'Monday – Friday / 9AM – 6PM' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-gold-500/10" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-bold tracking-tight text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg font-medium text-gold-300"
          >
            Let us help your business move forward. Get in touch with our experts today.
          </motion.p>
        </div>
      </section>

      {/* ===== Main Contact Section ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-gold-500">
                Contact Information
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether you're setting up a new business or expanding an existing one, our team is
                ready to guide you through every step. Reach out and we'll respond within one
                business day.
              </p>

              <ul className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-50">
                      <item.icon className="h-6 w-6 text-gold-500" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Map Placeholder */}
              <div className="mt-8 flex h-64 items-center justify-center rounded-xl bg-slate-200 text-sm font-medium text-slate-500">
                Google Maps Embed Placeholder
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl"
            >
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle className="h-9 w-9 text-green-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                    Message Sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                    Thank you for reaching out. Our team will get back to you within one business
                    day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-gold-500 hover:text-gold-600"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="+971 4 000 0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
