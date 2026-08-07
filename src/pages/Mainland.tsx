import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

const benefits = [
  {
    title: '100% Foreign Ownership',
    description: 'Retain full ownership of your business without requiring a local sponsor for most activities.',
  },
  {
    title: 'No Corporate / Personal Tax',
    description: 'Benefit from the UAE\'s tax-free environment on personal and corporate income.',
  },
  {
    title: 'Trade Freely Anywhere in the UAE',
    description: 'Operate across all emirates and access the entire local consumer market without restriction.',
  },
  {
    title: 'No Restrictions on Number of Employees',
    description: 'Hire as many employees as your business requires with no visa quota limitations.',
  },
  {
    title: 'Government Contract Eligibility',
    description: 'Bid on lucrative federal and municipal government contracts and projects.',
  },
  {
    title: 'Unlimited Office Space Options',
    description: 'Secure office space of any size across Dubai to scale your operations.',
  },
];

const limitations = [
  {
    title: 'Local Sponsor May Be Required',
    description: 'For certain restricted activities, a local Emirati sponsor holding 51% shares may still be needed.',
  },
  {
    title: 'Higher Setup Costs',
    description: 'Mainland setup typically involves higher initial costs compared to free zone alternatives.',
  },
  {
    title: 'More Regulatory Compliance',
    description: 'Subject to DED regulations, municipal approvals, and additional compliance requirements.',
  },
];

export default function Mainland() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Mainland Company Setup"
      subtitle="Mainland company setup in Dubai and the UAE is quick & hassle-free, with 100% ownership for most activities."
    >
      <article>
        {/* Placeholder featured image */}
        <div className="w-full rounded-xl bg-slate-200 h-64" />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          The UAE is recognised as a prime destination for foreign investors seeking to establish a
          presence in the Middle East. Mainland company formation allows you to trade directly with
          the local UAE market, bid on government tenders, and operate without geographic
          restrictions — all while enjoying 100% foreign ownership for the majority of business
          activities following recent regulatory reforms.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Whether you are launching a commercial, industrial, or professional venture, a mainland
          license gives you the flexibility to operate across all seven emirates and internationally,
          making it the most versatile jurisdiction for ambitious businesses.
        </p>

        <Tabs
          tabs={[
            {
              id: 'benefits',
              label: 'Key Benefits',
              content: (
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b.title} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                      <div>
                        <p className="font-semibold text-navy-900">{b.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{b.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              id: 'limitations',
              label: 'Potential Limitations',
              content: (
                <ul className="space-y-4">
                  {limitations.map((l) => (
                    <li key={l.title} className="flex gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <div>
                        <p className="font-semibold text-navy-900">{l.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{l.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
          className="mt-10"
        />

        <StatsBar />
      </article>
    </ServiceLayout>
  );
}
