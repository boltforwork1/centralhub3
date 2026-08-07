import ServiceLayout from '@/components/ServiceLayout';

export default function Liquidation() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Company Liquidation"
      subtitle="Professional closure and deregistration of your company in full compliance."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Expert Liquidation Services in Dubai
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Expert company liquidation advice and opinion on the best liquidation approach, provided
          by experienced Dubai liquidators. Professional closure and deregistration of your company
          in full compliance with UAE regulations.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Whether you are restructuring, exiting the market, or winding down operations, our team
          ensures every step is handled correctly — from settling liabilities and cancelling
          licenses to finalizing visas and government deregistration.
        </p>
      </article>
    </ServiceLayout>
  );
}
