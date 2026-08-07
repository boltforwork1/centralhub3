import ServiceLayout from '@/components/ServiceLayout';
import { Briefcase, Users, Circle as XCircle, FileCheck, Stamp, FileText } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Employee Visas',
    description: 'New employment visas for your staff, from entry permit to stamping.',
    timeframe: '15-20 days',
  },
  {
    icon: Users,
    title: 'Dependent Visas',
    description: 'Residency visas for spouses, children, and other dependents.',
    timeframe: '5-7 days',
  },
  {
    icon: XCircle,
    title: 'Visa Cancellation',
    description: 'Smooth cancellation of existing visas with full compliance.',
    timeframe: '2-3 days',
  },
  {
    icon: FileCheck,
    title: 'Fines Payment',
    description: 'Settlement of immigration and labour fines on your behalf.',
    timeframe: '1-2 days',
  },
  {
    icon: FileText,
    title: 'Documents Clearance',
    description: 'Clearance of official documents through the relevant authorities.',
    timeframe: '3-5 days',
  },
  {
    icon: Stamp,
    title: 'Attestation & Legalization',
    description: 'MOFA attestation, embassy legalization, and document translation.',
    timeframe: '5-10 days',
  },
];

export default function Immigration() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Immigration & Registration"
      subtitle="Visa processing, Emirates ID, and medical fitness for you and your staff."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          Let us help you with your UAE immigration and registration. We can handle all types of
          visa processing, residency permits, and citizen registration.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          Commercial License, Employee Visas, Attestations, Translation & Immigration Services. We
          undertake all kinds of Labor & Immigration Registration in Dubai, UAE for individuals and
          companies.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Our Immigration Services
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                <service.icon className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {service.title}
                  </h3>
                  <span className="flex-shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                    {service.timeframe}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-navy-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </ServiceLayout>
  );
}
