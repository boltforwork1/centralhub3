import { CircleCheck as CheckCircle2 } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function FinancialCentre() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Financial Centre Setup"
      subtitle="World-class financial jurisdictions for banks, fintech, investment firms, and professional services."
    >
      <article>
        <img
          src="/images/pages/page3.jpg"
          alt="Financial advisor reviewing business documents with a client"
          className="h-64 w-full rounded-2xl object-cover object-center shadow-lg sm:h-80"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          The UAE has two specialist free zones focusing on the financial sector: the Dubai
          International Financial Centre (DIFC) and the Abu Dhabi Global Market (ADGM). Both operate
          as independent jurisdictions with their own legal systems based on common law, their own
          courts, and dedicated regulatory authorities — making them the premier destinations for
          financial institutions, fintech companies, investment firms, and professional services in
          the region.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          These financial centres provide an internationally recognised regulatory framework, a
          common-law legal system, and access to a deep pool of financial talent — ideal for banks,
          asset managers, insurance firms, and fintech innovators.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Financial Jurisdictions
        </h2>
        <Tabs
          tabs={[
            {
              id: 'difc',
              label: 'DIFC',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    A leading financial hub in the Middle East, Africa and South Asia (MEASA)
                    region. DIFC is home to 25,000+ professionals and 2,400+ active entities, offering
                    an independent common-law legal system, a world-class regulatory framework, and
                    a thriving ecosystem for finance, fintech, and professional services.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> 2,400+ active registered entities</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> 25,000+ professionals working in the centre</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Independent common-law courts and arbitration</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> DFSA regulatory framework aligned with global standards</li>
                  </ul>
                </div>
              ),
            },
            {
              id: 'adgm',
              label: 'ADGM',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    Well-organized and favorable business environment for finance companies. ADGM,
                    located in Abu Dhabi, operates on English common law and offers a robust
                    regulatory framework through the FSRA, making it an attractive jurisdiction for
                    banks, asset managers, fintech firms, and holding companies.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> English common-law legal system</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> FSRA — internationally recognised regulator</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Direct application of English law</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Fintech sandbox and innovation licenses</li>
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
