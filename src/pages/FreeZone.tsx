import { motion } from 'framer-motion';

export default function FreeZone() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold text-navy-900 md:text-5xl"
      >
        Free Zone
      </motion.h1>
    </div>
  );
}
