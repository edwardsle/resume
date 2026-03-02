import { motion } from "framer-motion";
import SocialButton from "./socialbutton";
import Image from "./image";
import ShineBtn from "~/components/shinebtn";
import ThemeSwitcher from "~/components/themeswitcher";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Card() {
  return (
    <motion.div
      className="rounded-2xl lg:rounded-4xl mx-3 mt-3 lg:my-16 lg:ml-8 shadow-xl bg-white/90 backdrop-blur-md border border-white/50 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Decorative top gradient bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />

      <div className="p-4 sm:p-6 lg:p-8">
        {/* ── Mobile layout: horizontal compact ── */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.div variants={item}>
            <Image mobile />
          </motion.div>
          <div className="flex-1 min-w-0">
            <motion.div variants={item}>
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">Ed Le</h1>
                  <p className="text-xs text-brand-600 font-medium mt-0.5">Software Engineer</p>
                </div>
                <ThemeSwitcher />
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-4 mt-3 flex-wrap" variants={item}>
              <SocialButton platform="github" username="edwardsle" />
              <SocialButton platform="linkedin" username="edwardsle" />
              <SocialButton platform="email" username="le_edward" />
              <div className="ml-auto">
                <ShineBtn text="résumé" icon={faCircleArrowDown} small />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Desktop layout: vertical (original) ── */}
        <div className="hidden lg:block">
          <motion.div className="flex justify-between items-start" variants={item}>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">Ed Le</h1>
              <p className="text-sm text-brand-600 font-medium mt-1">Software Engineer</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 tracking-wide">Irvine, CA</p>
              <ThemeSwitcher />
            </div>
          </motion.div>

          <motion.div variants={item}><Image /></motion.div>

          <motion.div className="flex justify-center gap-6 mt-8" variants={item}>
            <SocialButton platform="github" username="edwardsle" />
            <SocialButton platform="linkedin" username="edwardsle" />
            <SocialButton platform="email" username="le_edward" />
          </motion.div>

          <motion.div className="flex justify-center mt-8" variants={item}>
            <ShineBtn text="résumé" icon={faCircleArrowDown} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
