import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Users,
  ShieldCheck,
  Check,
  CheckCircle,
  Phone,
  Building2,
  Archive,
  Award,
  Stamp,
  UserCheck,
  Landmark,
  Plane,
  ChevronDown,
} from 'lucide-react';

const pillars = [
  {
    icon: Briefcase,
    title: 'Experience',
    text: 'Team of Business Consultants with years of experience',
  },
  {
    icon: Users,
    title: 'Clients Oriented',
    text: 'At Central Hub, our clients always come first',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency',
    text: 'We are very transparent with our pricing structure',
  },
];

const formationBenefits = [
  '100% Foreign Ownership',
  'Investors Rights & Protection',
  'No Corporate or Personal Tax',
  'Advantageous Geographical Location',
  'Secure & Quality Lifestyle',
  'Exceptional Government Support',
  'Easy Visa Obtaining Process',
];

const services = [
  {
    icon: Building2,
    title: 'Company Formation in Dubai',
    description:
      'Starting a Dubai company involves tons of paperwork. Let us do our job and you can focus on your business.',
  },
  {
    icon: Archive,
    title: 'Company Liquidation',
    description:
      'Expert company liquidation advice and opinion best liquidation approach, Dubai liquidators.',
  },
  {
    icon: Award,
    title: 'Business License',
    description: "We are UAE's Leading business setup & company formation company.",
  },
  {
    icon: Stamp,
    title: 'PRO & Visa Services',
    description:
      'Commercial License, Employee Visas, Attestations, Translation & Immigration Services.',
  },
  {
    icon: UserCheck,
    title: 'Corporate Sponsor & Nominee',
    description:
      "Establish your company with Dubai's leading corporate nominee services.",
  },
  {
    icon: Landmark,
    title: 'Bank Liaison & Assistance',
    description:
      'We can help you set up such a structure which can later be transformed into a subsidiary or branch office.',
  },
  {
    icon: ShieldCheck,
    title: 'Government Services',
    description:
      'With direct access to Government Departments and Ministries, we can get your job done in very timely manner.',
  },
  {
    icon: Plane,
    title: 'Immigration & Labour',
    description:
      'We undertake all kinds of Labor & Immigration Registration in Dubai, UAE for individuals and company.',
  },
];

const stats = [
  { value: '2,500+', label: 'Clients Helped' },
  { value: '12+', label: 'Years Experience' },
  { value: '25+', label: 'Expert Consultants' },
  { value: '97%', label: 'Client Satisfaction' },
];

const faqs = [
  {
    q: 'Why should someone set up a mainland business in the UAE?',
    a: 'The UAE is a prime destination offering myriad business opportunities. Location of target market and business activities should guide the choice between Dubai and Abu Dhabi.',
  },
  {
    q: 'How can a foreigner start a business in Dubai?',
    a: 'The CCL permits 100% foreign ownership. Steps: determine entity type, select company name, apply for a business license, get pre-approvals, register your business, and get your license.',
  },
  {
    q: 'What is the best free zone to open a company in Dubai?',
    a: 'Key factors include location, chosen business activities, and office space requirements. Contact our experts to find the perfect fit.',
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setSubmitted(true);
    setForm({ name: '', contact: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {/* Abstract geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-gold-500/10" />
          <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-gold-500/10" />
          <div className="absolute right-20 top-40 h-48 w-48 rounded-full border border-gold-500/10" />
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-44 sm:px-8 lg:px-12 lg:pt-28 lg:pb-52">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300"
            >
              <span className="flex h-2 w-2 rounded-full bg-gold-400" />
              Your Trusted Dubai Business Setup Partner
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Business Setup in Dubai &{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                UAE Company Formation
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Are you a startup or a small to medium business (SME) who wants to start a business in
              Dubai free zone or a mainland company in Dubai or any other Emirate of the UAE? Or an
              individual simply requiring your own UAE trade license?{' '}
              <span className="font-semibold text-white">WE CAN HELP!</span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-xl shadow-gold-500/25 transition-all duration-200 hover:shadow-2xl hover:shadow-gold-500/40 hover:brightness-105"
              >
                Contact Us Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/97142388381"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-3.5 text-base font-medium text-slate-200 transition-colors duration-200 hover:border-gold-500/50 hover:text-gold-300"
              >
                <Phone className="h-5 w-5" />
                +971 4 238 8381
              </a>
            </motion.div>
          </div>
        </div>

        {/* ===== Request Quote Card ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -bottom-px left-1/2 w-full max-w-5xl -translate-x-1/2 px-6 sm:px-8"
        >
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1.5fr_auto] lg:items-end">
              <div>
                <label className="text-sm font-medium text-navy-200">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-navy-400 transition-colors focus:border-gold-500/50 focus:bg-white/10 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy-200">Email / Phone</label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="Email or phone number"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-navy-400 transition-colors focus:border-gold-500/50 focus:bg-white/10 focus:outline-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="group inline-flex h-[50px] items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-7 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/40 hover:brightness-105"
              >
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    Request A Free Quote
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-gold-300"
              >
                Thank you! One of our consultants will reach out to you shortly.
              </motion.p>
            )}
          </div>
        </motion.div>
      </section>

      {/* ===== Trust Pillars Strip ===== */}
      <section className="bg-white pt-40 pb-20 sm:pt-44 sm:pb-24 lg:pt-48">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-200 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 transition-colors duration-300 group-hover:bg-gold-100">
                  <pillar.icon className="h-6 w-6 text-gold-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Company Formation Intro ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-bold uppercase tracking-wider text-gold-500">
                Business Setup in Dubai
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900">
                Company Formation in Dubai UAE
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Central Hub is here to ensure Investors, Entrepreneurs, and Business Owners no longer
                lose sleep worrying about the complexities and red tape involved with the business
                setup process. We do all the heavy lifting by taking care of all the technical,
                administrative, and financial aspects of setting up a business in the UAE.
              </p>
            </motion.div>

            {/* Right: Benefits List */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="flex flex-col gap-4"
            >
              {formationBenefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: (delay: number) => ({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, delay: delay * 0.08 },
                    }),
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-gold-500" strokeWidth={2} />
                  <span className="text-base font-medium text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-gold-500">
              Dubai Business Setup Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Services We Provide to Set Up Your Company in Dubai UAE
            </h2>
          </div>

          {/* Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 transition-colors duration-300 group-hover:bg-gold-100">
                  <service.icon className="h-8 w-8 text-gold-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats / Social Proof Banner ===== */}
      <section className="relative overflow-hidden bg-slate-900 py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gold-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl font-bold text-amber-500">
                  {stat.value}
                </div>
                <div className="mt-3 text-lg text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ / SEO Content ===== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {/* Header */}
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-gold-500">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Everything you need to know about setting up your business in Dubai.
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${
                    isOpen ? 'border-gold-300' : 'border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-base font-semibold sm:text-lg ${
                        isOpen ? 'text-gold-600' : 'text-slate-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-gold-500' : 'text-slate-400'
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-base text-slate-700">Still have questions?</p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-base font-semibold text-navy-900 shadow-lg shadow-gold-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/40 hover:brightness-105"
            >
              Contact us today for a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
