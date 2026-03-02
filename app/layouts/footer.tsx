import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="flex items-center py-10">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
        <span className="shrink-0 px-6 text-sm text-slate-400 tracking-wide">
          © {new Date().getFullYear()} Edward S. Le
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </span>
    </motion.footer>
  );
}
