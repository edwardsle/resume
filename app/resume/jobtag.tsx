import { motion } from "framer-motion";

interface JobTagProps {
  text: string;
}

export default function JobTag({ text }: JobTagProps) {
  return (
    <motion.span
      className="inline-block text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 transition-all duration-200 hover:bg-brand-600 hover:text-white cursor-default"
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.span>
  );
}
