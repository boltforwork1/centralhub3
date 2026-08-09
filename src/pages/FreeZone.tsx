import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

const benefits = [
  {
    title: '100% Repatriation of Capital & Profits',
    description: 'Full ownership and the ability to repatriate all capital and profits without restriction.',
  },
  {
    title: '0% Corporate & Personal Tax',
    description: 'Enjoy complete tax exemptions on corporate income and personal earnings.',
  },
  {
    title: 'No Currency Restrictions',
    description: 'Operate freely in AED, USD, EUR, and other currencies with no capital controls.',
  },
  {
    title: 'Fast-Track Licensing',
    description: 'Streamlined setup process with licenses often issued within days.',
  },
  {
    title: 'World-Class Infrastructure',
    description: 'Purpose-built business parks with state-of-the-art facilities and connectivity.',
  },
  {
    title: 'Visa Quotas Based on Office Space',
    description: 'Flexible visa allocations proportional to your leased office area.',
  },
];

const limitations = [
  {
    title: 'Cannot Trade Directly on Mainland',
    description: 'Free zone companies cannot directly trade with the UAE mainland market without a local distributor or agent.',
  },
  {
    title: 'Restricted to Free Zone Premises',
    description: 'Operations must be physically located within the designated free zone boundary.',
  },
];

export default function FreeZone() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Free Zone Company Setup"
      subtitle="100% foreign ownership, tax exemptions, and fast-track licensing across 50+ specialized free zones."
    >
      <article>
        <img
          src="/images/pages/page1.jpg"
          alt="Business team collaborating in a Dubai office"
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          With more than fifty Free Zones in the UAE, each catering to specific industries and
          business activities, free zone company formation offers 100% foreign ownership, full
          repatriation of capital and profits, and complete tax exemptions. Free zones are ideal for
          trading, services, technology, media, logistics, and holding companies that do not
          require direct access to the UAE mainland market.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Each free zone has its own regulatory authority, licensing framework, and fee structure.
          Choosing the right free zone depends on your business activity, office space requirements,
          and visa needs — our team helps you compare and select the optimal jurisdiction.
        </p>

        {/* Benefits vs Limitations */}
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

        {/* Jurisdictions */}
        <h2 className="mt-12 font-display text-2xl font-bold text-navy-900">
          Popular Free Zone Jurisdictions
        </h2>
        <Tabs
          tabs={[
            {
              id: 'dmcc',
              label: 'DMCC',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    DMCC is the dedicated global centre for more than 18,000 businesses, located in
                    the heart of Dubai's JLT district. Recognised as the world's leading free zone
                    for multiple consecutive years, DMCC offers a world-class ecosystem for
                    commodities trading, crypto, finance, and professional services.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> 18,000+ registered businesses</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Flexible office and co-working options</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Multi-activity license available</li>
                  </ul>
                </div>
              ),
            },
            {
              id: 'dso',
              label: 'DSO',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    DSO is a globally recognized free zone and an integrated technology park located
                    in Dubai Silicon Oasis. It provides a comprehensive ecosystem for technology,
                    engineering, and innovation-driven companies, combining residential, commercial,
                    and industrial zones in one community.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Technology-focused infrastructure</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Affordable licensing and visa packages</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Smart city amenities and R&D facilities</li>
                  </ul>
                </div>
              ),
            },
          ]}
          className="mt-5"
        />

        <StatsBar />
      </article>
    </ServiceLayout>
  );
}
