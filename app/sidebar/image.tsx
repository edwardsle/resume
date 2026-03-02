import { motion } from "framer-motion";

export default function Image() {
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
