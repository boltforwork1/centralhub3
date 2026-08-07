import { CircleCheck as CheckCircle2, Shield } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';
import Tabs from '@/components/Tabs';
import StatsBar from '@/components/StatsBar';

export default function Offshore() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Offshore Company Setup"
      subtitle="Offshore Company Formation with UAE Bank Account. We maintain highest privacy standards."
    >
      <article>
        {/* Placeholder featured image */}
        <div className="w-full rounded-xl bg-slate-200 h-64" />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">
          Offshore companies offer a legitimate approach to wealth management, asset protection, and
          international holding structures. An offshore company registered in the UAE or another
          jurisdiction can own assets, hold intellectual property, and serve as a parent company for
          international operations — all while benefiting from tax efficiency, confidentiality, and
          a UAE bank account.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          We assist with the full lifecycle of offshore company formation, from jurisdiction
          selection and registration to ongoing compliance and bank account opening. Our highest
          priority is maintaining privacy and confidentiality standards throughout the process.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 p-5">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
          <p className="text-sm leading-relaxed text-navy-700">
            <span className="font-semibold text-navy-900">Privacy & Compliance:</span> We operate
            in full compliance with international regulations while maintaining the highest
            standards of client confidentiality.
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl font-bold text-navy-900">
          Available Offshore Jurisdictions
        </h2>
        <Tabs
          tabs={[
            {
              id: 'ajman',
              label: 'Ajman Offshore',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    Established in 1988 as one of the first free zones in the UAE, Ajman Offshore
                    provides a cost-effective and efficient offshore company registration option
                    within the UAE. It is widely used for holding structures, asset protection, and
                    international trading.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> UAE-based offshore jurisdiction</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Eligible for UAE corporate bank account</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Cost-effective setup and renewal</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> No physical office required</li>
                  </ul>
                </div>
              ),
            },
            {
              id: 'bvi',
              label: 'BVI',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    The British Virgin Islands (BVI) is the world's leading and most popular
                    offshore centre, with over 400,000 incorporated companies. BVI Business Companies
                    are widely used for international holding, trading, and investment structures,
                    offering flexibility, tax neutrality, and a well-established legal framework.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> World's most popular offshore jurisdiction</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> 400,000+ registered companies</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Flexible share structure and no minimum capital</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Strong asset protection framework</li>
                  </ul>
                </div>
              ),
            },
            {
              id: 'seychelles',
              label: 'Seychelles',
              content: (
                <div>
                  <p className="text-base leading-relaxed text-navy-600">
                    With its favourable tax policies, Seychelles has increasingly become a preferred
                    business destination for international entrepreneurs. Seychelles International
                    Business Companies (IBCs) offer tax exemption on foreign income, minimal reporting
                    requirements, and a fast incorporation process.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-navy-600">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Zero tax on foreign-sourced income</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Fast incorporation (1-2 days)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> Minimal annual reporting requirements</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> High level of confidentiality</li>
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
