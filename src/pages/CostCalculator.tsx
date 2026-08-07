import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Ship, Anchor, Users, User, UserPlus, UsersRound, Monitor, LayoutGrid, Briefcase, ArrowRight, ArrowLeft, CircleCheck as CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

type Jurisdiction = 'Free Zone' | 'Mainland' | 'Offshore';
type Visas = '0 Visas' | '1 Visa' | '2-3 Visas' | '4+ Visas';
type Office = 'Virtual Office (No physical space)' | 'Flexi-Desk (Shared)' | 'Physical Office';

const jurisdictions: { id: Jurisdiction; icon: typeof Building2; desc: string }[] = [
  { id: 'Free Zone', icon: Building2, desc: '100% foreign ownership, ideal for international trade' },
  { id: 'Mainland', icon: Briefcase, desc: 'Trade anywhere in the UAE local market' },
  { id: 'Offshore', icon: Ship, desc: 'For international business and asset holding' },
];

const visaOptions: { id: Visas; icon: typeof Users }[] = [
  { id: '0 Visas', icon: User },
  { id: '1 Visa', icon: UserPlus },
  { id: '2-3 Visas', icon: Users },
  { id: '4+ Visas', icon: UsersRound },
];

const officeOptions: { id: Office; icon: typeof Monitor; desc: string }[] = [
  {
    id: 'Virtual Office (No physical space)',
    icon: Monitor,
    desc: 'Registered address only, no physical workspace',
  },
  { id: 'Flexi-Desk (Shared)', icon: LayoutGrid, desc: 'Shared workspace on a flexible basis' },
  { id: 'Physical Office', icon: Briefcase, desc: 'Dedicated private office space' },
];

const steps = ['Jurisdiction', 'Visas', 'Office', 'Quote'];

const estimateRanges: Record<Jurisdiction, { min: number; max: number }> = {
  'Free Zone': { min: 12500, max: 35000 },
  Mainland: { min: 21000, max: 55000 },
  Offshore: { min: 8500, max: 18000 },
};

const visaAdd: Record<Visas, number> = {
  '0 Visas': 0,
  '1 Visa': 1500,
  '2-3 Visas': 3500,
  '4+ Visas': 7500,
};

const officeAdd: Record<Office, number> = {
  'Virtual Office (No physical space)': 0,
  'Flexi-Desk (Shared)': 6000,
  'Physical Office': 18000,
};

export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction | null>(null);
  const [visas, setVisas] = useState<Visas | null>(null);
  const [office, setOffice] = useState<Office | null>(null);
  const [revealed, setRevealed] = useState(false);

  const calculateEstimate = () => {
    if (!jurisdiction) return { min: 0, max: 0 };
    const base = estimateRanges[jurisdiction];
    const v = jurisdiction ? visaAdd[visas ?? '0 Visas'] : 0;
    const o = office ? officeAdd[office] : 0;
    return { min: base.min + v + o, max: base.max + v + o };
  };

  const handleJurisdiction = (j: Jurisdiction) => {
    setJurisdiction(j);
    setTimeout(() => setStep(2), 280);
  };

  const handleVisas = (v: Visas) => {
    setVisas(v);
    setTimeout(() => setStep(3), 280);
  };

  const handleOffice = (o: Office) => {
    setOffice(o);
    setTimeout(() => setStep(4), 280);
  };

  const handleReveal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRevealed(true);
  };

  const progress = (step / 4) * 100;
  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== Header ===== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-500"
          >
            <Sparkles className="h-4 w-4" />
            Instant Estimate
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl"
          >
            Business Setup Cost Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-slate-500"
          >
            Get an instant estimate for your UAE company formation in less than 30 seconds.
          </motion.p>
        </div>
      </section>

      {/* ===== Calculator Card ===== */}
      <section className="bg-slate-50 pb-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-2xl sm:p-10"
          >
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between">
                {steps.map((s, i) => {
                  const idx = i + 1;
                  const isActive = step === idx;
                  const isDone = step > idx;
                  return (
                    <div
                      key={s}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                          isDone
                            ? 'bg-gold-500 text-white'
                            : isActive
                              ? 'bg-navy-900 text-white ring-4 ring-navy-900/10'
                              : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {isDone ? <CheckCircle className="h-5 w-5" /> : idx}
                      </div>
                      <span
                        className={`hidden text-xs font-semibold sm:block ${
                          isActive || isDone ? 'text-navy-900' : 'text-slate-400'
                        }`}
                      >
                        {s}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Jurisdiction */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Choose Your Jurisdiction
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Select the type of UAE company formation that fits your business needs.
                  </p>
                  <div className="mt-6 space-y-4">
                    {jurisdictions.map((opt) => {
                      const selected = jurisdiction === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleJurisdiction(opt.id)}
                          className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                            selected
                              ? 'border-amber-500 bg-amber-50 shadow-md shadow-amber-500/10'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              selected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <opt.icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <div className="flex-1">
                            <p className="font-display text-base font-bold text-navy-900">
                              {opt.id}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                              {opt.desc}
                            </p>
                          </div>
                          {selected && (
                            <CheckCircle className="h-6 w-6 shrink-0 text-amber-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Visas */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Number of Visas Required
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    How many residency visas do you need for your team?
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {visaOptions.map((opt) => {
                      const selected = visas === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleVisas(opt.id)}
                          className={`flex flex-col items-center gap-3 rounded-xl border-2 p-6 text-center transition-all duration-200 ${
                            selected
                              ? 'border-amber-500 bg-amber-50 shadow-md shadow-amber-500/10'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                              selected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <opt.icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <span className="font-display text-sm font-bold text-navy-900">
                            {opt.id}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-900"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Office Space */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Office Space Requirement
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    What type of workspace do you need for your company?
                  </p>
                  <div className="mt-6 space-y-4">
                    {officeOptions.map((opt) => {
                      const selected = office === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleOffice(opt.id)}
                          className={`flex w-full items-center gap-4 rounded-xl border-2 p-5 text-left transition-all duration-200 ${
                            selected
                              ? 'border-amber-500 bg-amber-50 shadow-md shadow-amber-500/10'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              selected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            <opt.icon className="h-6 w-6" strokeWidth={1.75} />
                          </div>
                          <div className="flex-1">
                            <p className="font-display text-sm font-bold text-navy-900">
                              {opt.id}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                              {opt.desc}
                            </p>
                          </div>
                          {selected && (
                            <CheckCircle className="h-6 w-6 shrink-0 text-amber-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-900"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Lead Capture / Reveal Quote */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {revealed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-50">
                        <TrendingUp className="h-8 w-8 text-gold-500" strokeWidth={1.75} />
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-bold text-navy-900">
                        Your Estimated Cost
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        Based on your selections, here's your estimated setup cost range:
                      </p>
                      <div className="mt-6 rounded-2xl bg-gradient-to-br from-navy-900 to-slate-800 p-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-gold-300">
                          Estimated Range
                        </p>
                        <p className="mt-2 font-display text-4xl font-bold text-white">
                          AED {estimate.min.toLocaleString()} – {estimate.max.toLocaleString()}
                        </p>
                        <p className="mt-3 text-xs text-slate-400">
                          Final pricing depends on activity type and additional government fees.
                        </p>
                      </div>
                      <div className="mt-6 space-y-2 text-left">
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
                          <span className="text-slate-500">Jurisdiction</span>
                          <span className="font-semibold text-navy-900">{jurisdiction}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
                          <span className="text-slate-500">Visas</span>
                          <span className="font-semibold text-navy-900">{visas}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm">
                          <span className="text-slate-500">Office Space</span>
                          <span className="font-semibold text-navy-900">{office}</span>
                        </div>
                      </div>
                      <a
                        href="/contact"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:bg-amber-600 hover:shadow-xl"
                      >
                        Talk to an Expert
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </motion.div>
                  ) : (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900">
                        Your estimate is ready!
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        Enter your details to reveal your custom setup cost.
                      </p>
                      <form onSubmit={handleReveal} className="mt-6 space-y-4">
                        <div>
                          <label
                            htmlFor="calcName"
                            className="block text-sm font-semibold text-slate-700"
                          >
                            Full Name
                          </label>
                          <input
                            id="calcName"
                            type="text"
                            required
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="calcEmail"
                            className="block text-sm font-semibold text-slate-700"
                          >
                            Email Address
                          </label>
                          <input
                            id="calcEmail"
                            type="email"
                            required
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="calcPhone"
                            className="block text-sm font-semibold text-slate-700"
                          >
                            Phone Number (WhatsApp)
                          </label>
                          <input
                            id="calcPhone"
                            type="tel"
                            required
                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            placeholder="+971 5X XXX XXXX"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:bg-amber-600 hover:shadow-xl"
                        >
                          Reveal My Quote
                          <Sparkles className="h-5 w-5" />
                        </button>
                      </form>
                      <div className="mt-6 flex items-center justify-between">
                        <button
                          onClick={() => setStep(3)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-900"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
