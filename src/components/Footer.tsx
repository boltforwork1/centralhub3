import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Users,
  Camera,
  ArrowRight,
  Send,
  Check,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Business Setup', path: '/business-setup' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { name: 'LinkedIn', icon: Users, href: '#' },
  { name: 'Twitter', icon: MessageCircle, href: '#' },
  { name: 'Facebook', icon: Globe, href: '#' },
  { name: 'Instagram', icon: Camera, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-200">
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:pr-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.webp" alt="CentralHub" className="h-10 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-navy-400">
              CentralHub is here to ensure Investors, Entrepreneurs, and Business Owners no longer
              lose sleep worrying about the complexities of business setup.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-navy-400 transition-colors hover:text-teal-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-teal-500/60 transition-transform duration-200 group-hover:translate-x-0.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:pl-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-navy-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                <span>
                  Offices 2803–2804, Concord Tower
                  <br />
                  Media City, Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-teal-500" />
                <a href="tel:+97142388381" className="transition-colors hover:text-teal-400">
                  +971 4 238 8381
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-teal-500" />
                <a href="mailto:info@centralhub.ae" className="transition-colors hover:text-teal-400">
                  info@centralhub.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social + Newsletter */}
          <div className="lg:pl-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Stay Connected
            </h4>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-700 bg-navy-800/50 text-navy-300 transition-all duration-200 hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-400"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label className="text-xs font-medium text-navy-400">Newsletter</label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-navy-700 bg-navy-800/50 p-1.5 transition-colors focus-within:border-teal-500/50">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-navy-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white transition-transform duration-200 hover:scale-105"
                >
                  {subscribed ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-teal-400"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 sm:flex-row">
          <p className="text-sm text-navy-500">
            © {new Date().getFullYear()} CentralHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-navy-500">
            <a href="#" className="transition-colors hover:text-teal-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-teal-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
