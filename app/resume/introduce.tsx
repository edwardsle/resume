import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import SubTitle from "~/components/subtitle";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function AnimatedLine({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span className={`inline-block ${className}`} variants={sentence} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Introduce() {
  return (
    <section className="w-full p-2 sm:p-4">
      <SubTitle icon={faHouseUser} text="Introduce" />
      <div className="grid gap-y-6 sm:gap-y-8">
        <div className="text-3xl sm:text-5xl lg:text-7xl font-light tracking-wide leading-tight">
          <h1>
            <AnimatedLine text="Hi" />
            <span className="text-brand-300">—</span>
            <AnimatedLine text="I'm " />
            <motion.span
              className="text-brand-500 font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            >
              Ed
            </motion.span>
            <AnimatedLine text="," />
          </h1>
          <h1>
            <AnimatedLine text="a Real-Time Linux engineer." />
          </h1>
        </div>

        <motion.p
          className="text-base sm:text-xl text-slate-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          With deep kernel know-how and a knack for low-latency magic, I make hard real-time look easy.
        </motion.p>
      </div>
    </section>
  );
}
