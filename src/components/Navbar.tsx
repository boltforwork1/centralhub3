import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';

type SimpleLink = { name: string; path: string };
type DropdownLink = { name: string; path: string };
type DropdownItem = { name: string; path: string; children: DropdownLink[] };

const simpleLinks: SimpleLink[] = [
  { name: 'Home', path: '/' },
];

const dropdowns: DropdownItem[] = [
  {
    name: 'Business Setup',
    path: '/business-setup',
    children: [
      { name: 'Mainland', path: '/mainland' },
      { name: 'Financial Centre', path: '/financial-centre' },
      { name: 'Free Zone', path: '/free-zone' },
      { name: 'Offshore', path: '/offshore' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Company Liquidation', path: '/services/liquidation' },
      { name: 'Corporate Bank Account', path: '/services/bank-account' },
      { name: 'Immigration & Registration', path: '/services/immigration' },
      { name: 'Trade License', path: '/services/trade-license' },
      { name: 'UAE Golden Visa', path: '/services/golden-visa' },
    ],
  },
];

const trailingLinks: SimpleLink[] = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const allDropdownPaths = dropdowns.flatMap((d) => [d.path, ...d.children.map((c) => c.path)]);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (d: DropdownItem) =>
    d.path === location.pathname || d.children.some((c) => c.path === location.pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
          borderColor: scrolled ? 'rgba(226, 232, 240, 0.8)' : 'rgba(255, 255, 255, 0)',
          boxShadow: scrolled ? '0 8px 32px rgba(15, 23, 42, 0.08)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="border-b backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <img src="/logo.webp" alt="CentralHub" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {simpleLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-teal-600' : 'text-navy-700 hover:text-teal-500'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal-500"
                    />
                  )}
                </Link>
              );
            })}

            {dropdowns.map((dd) => {
              const active = isDropdownActive(dd);
              return (
                <div
                  key={dd.path}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(dd.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={dd.path}
                    className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-teal-600' : 'text-navy-700 group-hover:text-teal-500'
                    }`}
                  >
                    {dd.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 group-hover:rotate-180 ${
                        active ? 'text-teal-600' : 'text-navy-400 group-hover:text-teal-500'
                      }`}
                    />
                  </Link>
                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 origin-top transition-all duration-200 ${
                      openDropdown === dd.path
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl shadow-slate-900/50">
                      {dd.children.map((child) => {
                        const childActive = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block border-b border-slate-700/40 px-5 py-3 text-sm font-medium transition-colors duration-200 last:border-b-0 ${
                              childActive
                                ? 'bg-teal-500/10 text-teal-400'
                                : 'text-white hover:bg-slate-800 hover:text-teal-500'
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {trailingLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-teal-600' : 'text-navy-700 hover:text-teal-500'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/97142388381"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-600"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
            >
              Request Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 transition-colors hover:bg-navy-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-navy-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-3">
                {simpleLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {dropdowns.map((dd) => (
                  <div key={dd.path} className="flex flex-col">
                    <Link
                      to={dd.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isDropdownActive(dd)
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {dd.name}
                    </Link>
                    <div className="ml-3 border-l border-navy-100 pl-3">
                      {dd.children.map((child) => {
                        const active = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                              active
                                ? 'bg-teal-50 text-teal-600'
                                : 'text-navy-600 hover:bg-navy-50 hover:text-teal-500'
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {trailingLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="mt-2 flex items-center gap-3 border-t border-navy-100 pt-3">
                  <a
                    href="https://wa.me/97142388381"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-teal-400 hover:text-teal-600"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href="#quote"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 hover:bg-teal-600"
                  >
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
