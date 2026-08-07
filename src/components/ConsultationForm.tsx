import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Phone, Mail, Send, Check, Calculator } from 'lucide-react';

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) return;
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
      <h3 className="font-display text-xl font-bold text-navy-900">Get a Free Consultation</h3>
      <p className="mt-1.5 text-sm text-navy-500">
        Our experts will reach out within one business day.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="relative">
          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <div className="relative">
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="tel"
            required
            value={form.phone}
            onChange={update('phone')}
            placeholder="Phone Number"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
        >
          {submitted ? (
            <>
              <Check className="h-4 w-4" />
              Request Sent!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Request Callback
            </>
          )}
        </button>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-center text-xs font-medium text-teal-600"
        >
          Thank you! We'll be in touch shortly.
        </motion.p>
      )}

      {/* Cost calculator CTA */}
      <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
        <p className="text-sm font-medium text-navy-700">Or calculate your cost instantly</p>
        <Link
          to="/cost-calculator"
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
        >
          <Calculator className="h-4 w-4" />
          Open Cost Calculator
        </Link>
      </div>
    </div>
  );
}
