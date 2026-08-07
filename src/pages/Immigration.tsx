import ServiceLayout from '@/components/ServiceLayout';

export default function Immigration() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Immigration & Registration"
      subtitle="Visa processing, Emirates ID, and medical fitness for you and your staff."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Complete Immigration & Labour Registration
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Visa processing, Emirates ID, and medical fitness for you and your staff. Commercial
          License, Employee Visas, Attestations, Translation & Immigration Services. We undertake
          all kinds of Labor & Immigration Registration in Dubai, UAE for individuals and company.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          From entry permits and status changes to medical tests, Emirates ID, and visa stamping,
          our team manages the full lifecycle so your workforce stays compliant and your operations
          never miss a beat.
        </p>
      </article>
    </ServiceLayout>
  );
}
