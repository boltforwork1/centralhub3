import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Landmark, Globe as Globe2, Ship, Circle as XCircle, Wallet, Plane, FileText, Award, ArrowRight, Calculator } from 'lucide-react';

type Jurisdiction = {
  name: string;
  path: string;
  icon: typeof Building2;
  description: string;
};

type Service = {
  name: string;
  path: string;
  icon: typeof Building2;
  description: string;
};

const jurisdictions: Jurisdiction[] = [
  {
    name: 'Mainland',
    path: '/mainland',
    icon: Building2,
    description: 'Trade anywhere in the UAE and globally with a mainland-licensed company.',
  },
  {
    name: 'Financial Centre',
    path: '/financial-centre',
    icon: Landmark,
    description: 'World-class financial jurisdiction for banks, fintech, and investment firms.',
  },
  {
    name: 'Free Zone',
    path: '/free-zone',
    icon: Globe2,
    description: '100% foreign ownership, tax exemptions, and fast-track licensing.',
  },
  {
    name: 'Offshore',
    path: '/offshore',
    icon: Ship,
    description: 'International business company structure for asset protection and holding.',
  },
];

const services: Service[] = [
  {
    name: 'Company Liquidation',
    path: '/services/liquidation',
    icon: XCircle,
    description: 'Professional closure and deregistration of your company in full compliance.',
  },
  {
    name: 'Corporate Bank Account',
    path: '/services/bank-account',
    icon: Wallet,
    description: 'Fast-track corporate bank account opening with leading UAE banks.',
  },
  {
    name: 'Immigration & Registration',
    path: '/services/immigration',
    icon: Plane,
    description: 'Visa processing, Emirates ID, and medical fitness for you and your staff.',
  },
  {
    name: 'Trade License',
    path: '/services/trade-license',
    icon: FileText,
    description: 'New license issuance, renewal, and activity amendment handled end-to-end.',
  },
  {
    name: 'UAE Golden Visa',
    path: '/services/golden-visa',
    icon: Award,
    description: 'Long-term 10-year residency for investors, entrepreneurs, and talent.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-500/5" />
        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-bold text-white"
          >
            Our Corporate Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-teal-400"
          >
            Comprehensive business setup and corporate services tailored for your success in the UAE.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Jurisdictions */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center font-display text-3xl font-bold text-navy-900"
          >
            Choose Your Business Jurisdiction
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {jurisdictions.map((item) => (
              <motion.div
                key={item.path}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <item.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                  {item.description}
                </p>
                <Link
                  to={item.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Corporate Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="text-center font-display text-3xl font-bold text-navy-900"
          >
            Our Corporate Services
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((item) => (
              <motion.div
                key={item.path}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <item.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                    {item.description}
                  </p>
                  <Link
                    to={item.path}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-500 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl font-bold text-white md:text-4xl"
          >
            Ready to start your business in Dubai?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8"
          >
            <Link
              to="/cost-calculator"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-navy-800 hover:shadow-xl"
            >
              <Calculator className="h-5 w-5" />
              Calculate Your Cost Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
