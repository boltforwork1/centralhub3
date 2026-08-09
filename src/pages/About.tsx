import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flag, Globe, ShieldCheck, UserCheck, Eye, Zap, Globe as Globe2, Layers, MessageSquare, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const MotionLink = motion(Link);

const features = [
  {
    icon: Flag,
    title: 'Local & Independent',
    points: [
      '100% Emirati-owned',
      'Sponsors onshore companies directly',
      'Unrestricted local market access',
      'Day-to-day operations remain with foreign owners',
    ],
  },
  {
    icon: Globe,
    title: 'Reach & Network',
    points: [
      'Member of leading Dubai family',
      'Access to investors & high-level government officials',
      'Strong working relationships with key sectors',
      'Operates within a related group of companies',
    ],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Your Success is Paramount',
    text: 'Dedicated account manager from start to finish.',
  },
  {
    icon: Eye,
    title: 'Transparent',
    text: 'All fees clearly laid out; no hidden costs.',
  },
  {
    icon: Zap,
    title: 'Efficient & Invisible',
    text: 'Proactive background work; centralized document repository.',
  },
  {
    icon: Globe2,
    title: 'Globally Inclusive',
    text: 'Multicultural, multilingual team serving all nationalities.',
  },
  {
    icon: Layers,
    title: 'Full Service',
    text: 'All-inclusive end-to-end service from first interaction.',
  },
  {
    icon: MessageSquare,
    title: 'Accessible',
    text: 'Reachable throughout engagement; open to updates.',
  },
];

export default function About() {
  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-teal-500/10" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl font-bold tracking-tight text-white"
          >
            About Central Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg font-medium text-teal-300"
          >
            Your trusted partner for business setup in the UAE.
          </motion.p>
        </div>
      </section>

      {/* ===== Who is Central Hub ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
                Who is Central Hub?
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
                Bespoke Solutions for Your Long-term Success
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                We differentiate ourselves by building long-term and lasting relationships, working
                with and guiding you along every step of your journey to ensure your company is set
                up and positioned to achieve long-term success.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Recognizing the growing demand from Entrepreneurs and Business Owners to have a
                company that provides more than a once-off business set up service, Central Hub was
                established to provide bespoke solutions tailored to meet each company's unique
                requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-[420px] overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 sm:h-[520px]"
            >
              <img
                src="/images/pages/about.jpg"
                alt="Central Hub business leader in a modern Dubai office"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Features: Local & Independent / Reach & Network ===== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
                  <feature.icon className="h-8 w-8 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Approach (6 Pillars) ===== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-500">
              Our Approach
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Our Approach for your Business Success
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                  <pillar.icon className="h-6 w-6 text-teal-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cost Calculator CTA ===== */}
      <section className="bg-teal-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl"
          >
            Looking for UAE Trade License pricing? Calculate the cost now. It takes less than 30
            seconds.
          </motion.h2>
          <MotionLink
            to="/cost-calculator"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-navy-900/25 transition-all duration-200 hover:bg-navy-800 hover:shadow-2xl hover:shadow-navy-900/40"
          >
            Cost Calculator
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </MotionLink>
        </div>
      </section>
    </div>
  );
}
