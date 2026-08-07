import ServiceLayout from '@/components/ServiceLayout';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

const processRows = [
  {
    process: 'Letter of liquidation from audit',
    documents: 'License copy, MOA',
    conditions: 'Auditor must be approved',
    timeframe: '15-20 working days',
  },
  {
    process: 'Employee visa cancellation',
    documents: 'Passport, visa, EID copies',
    conditions: 'EID of sponsor',
    timeframe: '1-2 working days',
  },
  {
    process: 'Establishment card closure',
    documents: 'Establishment card, license copy',
    conditions: 'All visas must be cancelled first',
    timeframe: '3-5 working days',
  },
  {
    process: 'Signboard resolution & liquidation announcement',
    documents: 'Liquidation certificate, board resolution',
    conditions: 'Published in local gazette',
    timeframe: '10-15 working days',
  },
  {
    process: 'Final license cancellation',
    documents: 'Liquidation letter, clearance letters',
    conditions: 'All dues cleared',
    timeframe: '5-7 working days',
  },
];

const stages = [
  {
    title: 'Audit Procedure',
    description:
      'A registered auditor reviews the company accounts and issues a formal liquidation letter confirming the company is debt-free and ready for deregistration.',
  },
  {
    title: 'Immigration Procedure',
    description:
      'All employee visas are cancelled, Emirates IDs are surrendered, and the establishment card is closed before the company can be deregistered.',
  },
  {
    title: 'Corporate Proceedings',
    description:
      'Includes establishment card closure, signboard resolution, and the official liquidation announcement published in the gazette.',
  },
];

export default function Liquidation() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Company Liquidation"
      subtitle="Professional closure and deregistration of your company in full compliance with UAE regulations."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          An average time needed for liquidation of a private company (either registered in mainland
          or in one of free zones) is 50-60 days approx.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          Expert company liquidation advice and opinion on the best liquidation approach, provided
          by experienced Dubai liquidators. Professional closure and deregistration of your company
          in full compliance with UAE regulations.
        </p>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Mandatory Stages of Liquidation
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="h-6 w-6 text-teal-500" />
              <h3 className="mt-3 font-display text-base font-bold text-navy-900">{stage.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{stage.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Liquidation Process Timeline
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
                <tr
                  key={row.process}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
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

        <p className="mt-6 text-base leading-relaxed text-navy-500">
          Timeframes are indicative and may vary depending on the license type, number of visas, and
          the relevant authority's processing time.
        </p>
      </article>
    </ServiceLayout>
  );
}
