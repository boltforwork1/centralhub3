import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from 'lucide-react';

const processRows = [
  {
    process: 'Application with DLD',
    documents: 'SPA, Title deed, Passport copy, HD photo, Health insurance',
    conditions: 'Property value ≥ 2M AED',
    timeframe: '2-3 working days',
  },
  {
    process: 'Medical test',
    documents: 'Original passport',
    conditions: 'Blood type, X-Ray',
    timeframe: '1 hour',
  },
  {
    process: 'Biometrics & Emirates ID',
    documents: 'Original passport, existing EID',
    conditions: 'Applicant must be present',
    timeframe: '30 minutes',
  },
  {
    process: 'Visa stamping',
    documents: 'Passport, medical result, EID',
    conditions: 'All prior steps cleared',
    timeframe: '5-7 working days',
  },
];

const stages = [
  {
    title: 'DLD Approval',
    description:
      'The Dubai Land Department verifies the real estate investment meets the 2M AED threshold and issues the eligibility letter.',
  },
  {
    title: 'Medical Tests',
    description:
      'A standard blood test and X-ray are conducted at an approved medical fitness center.',
  },
  {
    title: 'Biometrics',
    description:
      'Fingerprinting and biometric capture are completed for the new Emirates ID issuance.',
  },
];

export default function GoldenVisa() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="UAE Golden Visa"
      subtitle="Long-term 10-year residency for investors, entrepreneurs, and talent."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          The UAE Golden Visa offers long-term residency to investors, entrepreneurs, and
          specialized talents.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          Secure your future and enjoy unparalleled benefits in the UAE, including the ability to
          live, work, and study without the need for a national sponsor, with full ownership of
          your business.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Eligibility Conditions
        </h2>
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            <span className="font-semibold text-navy-900">Real estate investment:</span> The
            applicant must own a property in the UAE valued at a minimum of{' '}
            <span className="font-bold text-teal-700">2,000,000 AED</span> (either outright or via an
            approved mortgage plan).
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">Main Stages</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-navy-900">{stage.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{stage.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Golden Visa Process Timeline
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-4 py-3.5 font-semibold">Process</th>
                <th className="px-4 py-3.5 font-semibold">Documents Required</th>
                <th className="px-4 py-3.5 font-semibold">Additional Conditions</th>
                <th className="px-4 py-3.5 font-semibold">Timeframe</th>
              </tr>
            </thead>
            <tbody>
              {processRows.map((row, i) => (
                <tr key={row.process} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="border-t border-slate-200 px-4 py-3 font-medium text-navy-900">
                    {row.process}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 text-navy-600">
                    {row.documents}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3 text-navy-600">
                    {row.conditions}
                  </td>
                  <td className="border-t border-slate-200 px-4 py-3">
                    <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      {row.timeframe}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <h4 className="text-sm font-bold text-amber-800">Important Notice</h4>
            <p className="mt-1 text-sm leading-relaxed text-amber-800">
              The applicant cannot leave the country during the procedure. Plan your travel
              accordingly to avoid delays or cancellation of the application.
            </p>
          </div>
        </div>
      </article>
    </ServiceLayout>
  );
}
