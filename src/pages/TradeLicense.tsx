import ServiceLayout from '@/components/ServiceLayout';
import { FilePlus, RefreshCw, CreditCard as Edit3, Clock } from 'lucide-react';

const services = [
  {
    icon: FilePlus,
    title: 'New License Issuance',
    description:
      'Obtain a brand-new trade license for your business activity, whether mainland or free zone.',
  },
  {
    icon: RefreshCw,
    title: 'License Renewal',
    description: 'Timely renewal of your existing trade license to avoid penalties and downtime.',
  },
  {
    icon: Edit3,
    title: 'Activity Amendment',
    description: 'Add, remove, or modify business activities on your existing license.',
  },
];

export default function TradeLicense() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Trade License"
      subtitle="New license issuance, renewal, and activity amendment handled end-to-end."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          As one of the best business setup consultants in Dubai, we specialize in making the
          process of obtaining your trade license smooth and hassle-free.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          New license issuance, renewal, and activity amendment handled end-to-end. We are UAE's
          leading business setup & company formation company, ensuring your trade license is
          obtained, maintained, and updated without friction.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          What We Handle
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <service.icon className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-navy-900">
              Typical Processing Time
            </h3>
            <p className="mt-0.5 text-sm text-navy-600">
              Most trade license applications are completed within{' '}
              <span className="font-semibold text-teal-700">5-7 working days</span> from submission
              of all required documents.
            </p>
          </div>
        </div>
      </article>
    </ServiceLayout>
  );
}
