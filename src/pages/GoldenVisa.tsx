import ServiceLayout from '@/components/ServiceLayout';

export default function GoldenVisa() {
  return (
    <ServiceLayout
      eyebrow="Corporate Service"
      title="UAE Golden Visa"
      subtitle="Long-term 10-year residency for investors, entrepreneurs, and talent."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Secure Your Future with the UAE Golden Visa
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Long-term 10-year residency for investors, entrepreneurs, and talent. Secure your future
          and enjoy unparalleled benefits in the UAE, including the ability to live, work, and study
          without the need for a national sponsor.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          The Golden Visa offers extended stability for you and your family, with full ownership of
          your business and the freedom to sponsor spouses and children. Our team handles the
          eligibility assessment, documentation, and application from start to finish.
        </p>
      </article>
    </ServiceLayout>
  );
}
