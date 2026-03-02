import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const techStack = [
  "Python",
  "PySimpleGUI",
  "OpenAI API",
  "python-dotenv",
  "Desktop GUI",
  "Video Processing",
  "Subtitle Automation",
  "Translation Workflow",
];

const previewItems = [
  {
    id: "upload",
    label: "Upload Flow",
    imageSrc: "/img/projects/2023-ai-subtitle-generator/upload-flow.jpg",
  },
  {
    id: "progress",
    label: "Progress View",
    imageSrc: "/img/projects/2023-ai-subtitle-generator/progress.jpg",
  },
  {
    id: "output",
    label: "Output Result",
    imageSrc: "/img/projects/2023-ai-subtitle-generator/output.jpg",
  },
];


const performance = [
  {
    title: "5-video batch workflow",
    body: "Supports grouped processing for faster handling of repeated subtitle jobs.",
  },
  {
    title: "Bilingual subtitle pipeline",
    body: "Built to generate subtitles with an extensible translation-ready flow.",
  },
  {
    title: "Optional voice-over mode",
    body: "Leaves room for future expansion beyond subtitle-only outputs.",
  },
  {
    title: "Real-time progress feedback",
    body: "Improves user confidence during long-running media tasks.",
  },
];

const problems = [
  "Subtitle creation is time-consuming and repetitive.",
  "Translation adds extra manual effort.",
  "Batch processing is inefficient in fragmented workflows.",
  "Multi-step tools can feel cumbersome for daily use.",
  "Non-technical users need a simpler experience.",
];

const learned = [
  "Architecting modular Python desktop applications",
  "Building event-driven GUI workflows",
  "Designing extensible media-processing pipelines",
  "Implementing progress-aware UX patterns",
  "Managing runtime configuration via environment variables",
  "Developing MVPs with scalable system foundations",
];

const architectureNotes = [
  "The app uses modular separation between UI, processing, and utility layers to keep the system maintainable and easier to expand.",
  "Its staged pipeline creates clean extension points for transcription, translation, subtitle rendering, and future output features.",
  "The desktop workflow emphasizes validation, guided actions, and progress tracking to keep the experience accessible for non-technical users.",
  "Environment-variable based configuration supports cleaner portability, simpler setup, and future scaling.",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
      {children}
    </p>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      variants={fadeUp}
      className={[
        "rounded-3xl border border-slate-200/80 bg-white/95 p-4 sm:p-5",
        "shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
        className,
      ].join(" ")}
    >
      {children}
    </motion.section>
  );
}

export default function SubtitleGenerator() {
  const [activePreview, setActivePreview] = useState(previewItems[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 text-slate-800 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur"
    >
      

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 px-4 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-9 lg:px-7"
      >
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                className="inline-block h-1.5 w-1.5 rounded-full"
              />
              AI-powered
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl"
            >
              AI Video Processor
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-2 text-sm font-semibold text-slate-700 sm:text-base">
              AI-Powered Video Editing Automation
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 sm:text-[15px]"
            >
              A desktop Python tool that transforms uploaded videos into multilingual subtitled content through a streamlined one-click workflow, making subtitle production faster, cleaner, and easier for non-technical users.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
            >
              <SectionTitle>Tech Stack</SectionTitle>
              <motion.div variants={stagger} className="flex flex-wrap gap-2">
                {techStack.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeUp}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-700 sm:text-xs"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-5 px-4 py-5 sm:px-6 sm:py-6 lg:px-7"
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <SectionTitle>Project Preview</SectionTitle>

            <motion.div
              key={activePreview.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
            >
              <img
                src={activePreview.imageSrc}
                alt={activePreview.label}
                className="h-[240px] w-full object-contain sm:h-[380px]"
              />
            </motion.div>

            <motion.div variants={stagger} className="mt-3 grid grid-cols-3 gap-2.5">
              {previewItems.map((item, index) => {
                const isActive = item.id === activePreview.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    variants={fadeUp}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActivePreview(item)}
                    className={[
                      "min-h-[76px] rounded-2xl border px-3 text-center text-[11px] font-semibold transition sm:text-xs",
                      isActive
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </Card>

          <Card>
            <SectionTitle>Performance Results</SectionTitle>
            <motion.div variants={stagger} className="grid gap-2.5">
              {performance.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ x: 2 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3.5"
                >
                  <strong className="block text-sm font-semibold text-slate-900">{item.title}</strong>
                  <span className="mt-1 block text-xs leading-6 text-slate-500 sm:text-[13px]">
                    {item.body}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card>
            <SectionTitle>The Problem</SectionTitle>
            <motion.div variants={stagger} className="grid gap-2.5">
              {problems.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ x: 2 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3.5 py-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mr-2 font-black text-blue-500">•</span>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </Card>

          <Card>
            <SectionTitle>What I Learned</SectionTitle>
            <motion.div variants={stagger} className="grid gap-2.5">
              {learned.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ x: 2 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3.5 py-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mr-2 font-black text-blue-500">✓</span>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </div>

        <Card>
          <SectionTitle>Architecture</SectionTitle>
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
              className="flex min-h-[280px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-gradient-to-b from-slate-50 to-blue-50/60 p-6 text-center text-sm leading-7 text-slate-500"
            >
              <div>
                Replace this area with <span className="font-semibold text-slate-700">architecture.png</span>
                <br />
                <br />
                Example:
                <br />
                {"<img src=\"/images/architecture.png\" alt=\"Architecture diagram\" />"}
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-2.5">
              {architectureNotes.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ x: 2 }}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3.5 text-sm leading-6 text-slate-600"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
