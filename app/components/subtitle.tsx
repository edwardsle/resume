import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface SubTitleProps {
  icon?: IconDefinition;
  text: string;
}

export default function SubTitle({ icon, text }: SubTitleProps) {
  return (
    <motion.div
      className="w-full text-white bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 rounded-xl sm:rounded-2xl mb-6 sm:mb-10 px-4 sm:px-8 py-3 sm:py-4 shadow-lg shadow-brand-500/15"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {icon && <FontAwesomeIcon icon={icon} className="opacity-80 text-base sm:text-2xl" />}
      <span className="inline-block uppercase font-light ml-3 sm:ml-4 tracking-widest text-sm sm:text-lg">
        {text}
      </span>
    </motion.div>
  );
}
