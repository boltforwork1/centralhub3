import ServiceLayout from '@/components/ServiceLayout';

export default function TradeLicense() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Trade License"
      subtitle="New license issuance, renewal, and activity amendment handled end-to-end."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Your UAE Trade License, Managed End-to-End
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          New license issuance, renewal, and activity amendment handled end-to-end. We are UAE's
          leading business setup & company formation company, ensuring your trade license is
          obtained, maintained, and updated without friction.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Whether you are starting fresh, expanding your activities, or renewing an existing
          license, we coordinate with the relevant authorities to keep your business fully licensed
          and legally operational at all times.
        </p>
      </article>
    </ServiceLayout>
  );
}
