import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

const benefits = [
  {
    title: '100% Foreign Ownership',
    description: 'Retain full ownership of your business without requiring a local sponsor.',
  },
  {
    title: 'No Currency Restrictions',
    description: 'Operate freely in AED, USD, EUR, and other currencies with no capital controls.',
  },
  {
    title: 'Direct Trade with Local Market',
    description: 'Access the entire UAE consumer market and government tender opportunities.',
  },
  {
    title: 'Government Contract Eligibility',
    description: 'Bid on lucrative federal and municipal government contracts and projects.',
  },
  {
    title: 'Unlimited Office Space',
    description: 'Secure office space of any size across Dubai to scale your operations.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Mainland() {
  return (
    <ServiceLayout
      eyebrow="Business Setup Jurisdiction"
      title="Mainland Company Formation"
      subtitle="Set up your business anywhere in the UAE with 100% foreign ownership and no restrictions."
    >
      <article className="prose-content">
        <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Why Choose a Dubai Mainland Company?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          A mainland company in Dubai offers you the ultimate freedom to trade anywhere in the UAE
          and internationally. It allows you to undertake any industrial, commercial, or professional
          activities without the geographic limitations of a free zone, making it the most flexible
          jurisdiction for ambitious businesses.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Following recent reforms, mainland companies now enjoy full foreign ownership across most
          activities, removing the need for a local Emirati sponsor and giving you complete control
          over your enterprise.
        </p>

        <h3 className="mt-10 font-display text-xl font-semibold text-navy-900">
          Key Benefits
        </h3>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-5 space-y-4"
        >
          {benefits.map((b) => (
            <motion.li key={b.title} variants={itemVariants} className="flex gap-4">
              <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-teal-500" strokeWidth={1.75} />
              <div>
                <p className="font-semibold text-navy-900">{b.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-navy-500">{b.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <h3 className="mt-10 font-display text-xl font-semibold text-navy-900">
          How It Works
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-navy-600">
          Our team handles the entire process end-to-end: from initial activity selection and trade
          name reservation, to DED approval, license issuance, and your establishment card. Most
          mainland licenses are issued within 5 to 7 working days.
        </p>
      </article>
    </ServiceLayout>
  );
}
