import { motion } from "framer-motion";

export default function Image({ mobile }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <img
        className="w-16 h-16 rounded-2xl object-cover shadow-md shrink-0"
        src="/img/edward.jpg"
        alt="Edward Le"
      />
    );
  }

  return (
    <motion.div
      className="mt-6 rounded-3xl overflow-hidden shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img
        className="h-80 w-full rounded-3xl object-cover"
        src="/img/edward.jpg"
        alt="Edward Le"
      />
    </motion.div>
  );
}
