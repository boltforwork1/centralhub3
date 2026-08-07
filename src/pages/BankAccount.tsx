import ServiceLayout from '@/components/ServiceLayout';
import { Landmark, Building2, Check, CircleAlert as AlertCircle } from 'lucide-react';

const mainlandRequirements = [
  'Valid trade license copy',
  'Memorandum of Association (MOA)',
  'Shareholder/Director passport copies',
  'Shareholder visa page & Emirates ID',
  'Proof of business address (Ejari)',
  'Management CV / business profile',
];

const freeZoneRequirements = [
  'Valid free zone license copy',
  'Certificate of incorporation',
  'Shareholder/Director passport copies',
  'Free zone lease agreement',
  'Memorandum of Association (MOA)',
  'Business activity description',
];

const footnotes = [
  { mark: '*', text: 'Some banks require a minimum average balance.' },
  { mark: '**', text: 'Personal visit may be required for final account activation.' },
  {
    mark: '***',
    text: 'Compliance approval depends on the applicant\'s nationality and business activity.',
  },
  {
    mark: '****',
    text: 'Additional documents may be requested on a case-by-case basis.',
  },
];

export default function BankAccount() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Corporate Bank Account"
      subtitle="Fast-track corporate bank account opening with leading UAE banks."
    >
      <article>
        <p className="text-lg font-medium leading-relaxed text-teal-700">
          Usually, the process takes no more than 10–30 days, depending on the citizenship of the
          owner and the bank's compliance requirements.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-navy-600">
          Fast-track corporate bank account opening with leading UAE banks. We guide you through
          the compliance and documentation required to get your business banking up and running
          without delays.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Mainland */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <Landmark className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900">Mainland Company</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {mainlandRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-navy-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Free Zone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <Building2 className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900">Free Zone Company</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {freeZoneRequirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-sm text-navy-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footnotes */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <h4 className="text-sm font-bold text-amber-800">Important Notes</h4>
          </div>
          <ul className="mt-3 space-y-1.5">
            {footnotes.map((note) => (
              <li key={note.mark} className="text-sm text-amber-800">
                <span className="font-semibold">{note.mark}</span> {note.text}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ServiceLayout>
  );
}
