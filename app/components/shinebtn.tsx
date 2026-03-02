import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface ShineBtnProps {
  text: string;
  icon?: IconDefinition;
}

export default function ShineBtn({ text, icon }: ShineBtnProps) {
  return (
    <motion.a
      href="https://docs.google.com/document/d/1ioEnWHFtFaYdD-9TF30zQyUGfZ59OeanpoLJevx2ZRc/edit?usp=sharing"
      target="_blank"
      className="group relative overflow-hidden bg-brand-700 hover:bg-brand-800 focus:ring-4 focus:ring-brand-200 inline-flex items-center px-8 py-3 rounded-xl text-white justify-center transition-colors duration-300 shadow-lg shadow-brand-500/20"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="z-40 font-medium tracking-wide">{text}</span>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="z-40 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-y-0.5"
        />
      )}
      <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-75%] transition-all group-hover:scale-100 bg-white/20 group-hover:translate-x-[50%] z-20 duration-1000" />
    </motion.a>
  );
}
