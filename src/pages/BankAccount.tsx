import ServiceLayout from '@/components/ServiceLayout';

export default function BankAccount() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="Corporate Bank Account"
      subtitle="Fast-track corporate bank account opening with leading UAE banks."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Open Your Corporate Bank Account with Confidence
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Fast-track corporate bank account opening with leading UAE banks. We guide you through the
          compliance and documentation required to get your business banking up and running without
          delays.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Our relationships with major local and international banks in the UAE allow us to match
          your business profile with the right banking partner, streamlining the approval process
          and minimizing back-and-forth.
        </p>
      </article>
    </ServiceLayout>
  );
}
