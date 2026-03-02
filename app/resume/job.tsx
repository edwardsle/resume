import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobTag from "./jobtag";

interface JobProps {
  title: string;
  company: string;
  location: string;
  logo: string;
  workingStatus: string;
  tags: string[];
  responsibility: string[];
}

export default function Job({
  title,
  company,
  location,
  logo,
  workingStatus,
  tags,
  responsibility,
}: JobProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="group/job relative pl-4 sm:pl-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[7px] top-1/2 -translate-y-1/2 z-10">
        <span className="relative flex size-3.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-0 group-hover/job:animate-ping group-hover/job:opacity-60" />
          <span className="relative inline-flex size-3.5 rounded-full bg-brand-600 border-2 border-white shadow-sm" />
        </span>
      </div>

      {/* Card */}
      <motion.div
        onClick={() => setActive(!active)}
        className="cursor-pointer rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 p-3 sm:p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-lg"
        whileHover={{ y: -2 }}
      >
        {/* Top row */}
        <div className="flex items-center gap-4">
          <div className="size-16 sm:size-24 shrink-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-slate-50 border border-slate-100 rounded-xl p-2 sm:p-3 group-hover/job:from-brand-100 transition-colors duration-300">
            <img alt={company} src={`/img/${logo}`} className="w-full object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              {company} · {location}
            </p>
          </div>
        </div>

        {/* Date divider */}
        <div className="flex items-center my-3 gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] text-brand-600 font-medium tracking-wide shrink-0">
            {workingStatus}
          </span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <JobTag key={tag} text={tag} />
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="list-none mt-4 space-y-2 pl-2 border-l-2 border-brand-200">
                {responsibility.map((res, i) => (
                  <motion.li
                    key={i}
                    className="text-sm text-slate-600 leading-relaxed pl-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {res}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <motion.div
          className="flex justify-center mt-3"
          animate={{ rotate: active ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
