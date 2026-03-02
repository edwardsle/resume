import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  title: string;
  src: string;
  alt: string;
};

const techStack = [
  "Python",
  "Jetpack 6.1",
  "GStreamer",
  "DeepStream",
  "Docker",
  "WebRTC",
  "RTSP",
  "ExpressJS",
];

const problemItems = [
  "Handle 4 simultaneous IP cameras",
  "Computer vision for object detection",
  "Support quad view + single view outputs",
  "Serve both RTSP and WebRTC clients",
  "Dockerize services for cleaner isolation",
];

const learnedItems = [
  "Understanding GPU memory pipelines (NVMM vs system memory)",
  "Tradeoffs between full-frame detection vs cropped detection",
  "Impact of shared memory on CPU load",
  "How nvstreammux and nvstreamdemux shape the pipeline",
  "compositor vs nvcompositor vs nvmultistreamtiler",
  "Dockerizing apps to isolate services and simplify deployment",
];

const slides: Slide[] = [
  {
    title: "System Overview",
    src: "/img/projects/2025-orinstream/overview.jpg",
    alt: "System Overview",
  },
   {
    title: "Video Streams",
    src: "/img/projects/2025-orinstream/web.png",
    alt: "Video Streams",
  },
  {
    title: "Hardware Setup",
    src: "/img/projects/2025-orinstream/hardware.png",
    alt: "Hardware Setup",
  },
  {
    title: "Software Architecture",
    src: "/img/projects/2025-orinstream/software.png",
    alt: "Software Architecture",
  },
  {
    title: "Auto Update",
    src: "/img/projects/2025-orinstream/autoupdate2.png",
    alt: "Auto Update",
  },
];

const architectureSrc = "/img/projects/2025-orinstream/VideoFlow.png";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

function SectionCard({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={sectionVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.22 }}
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5 ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-slate-100 blur-2xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <motion.h2
          layout
          className="text-base font-semibold text-slate-900 md:text-lg"
        >
          {title}
        </motion.h2>

        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="mt-1 text-sm leading-6 text-slate-500"
          >
            {subtitle}
          </motion.p>
        ) : null}

        <div className="mt-4">{children}</div>
      </div>
    </motion.section>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-200 bg-white p-4"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </div>

      <motion.div
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl"
      >
        {value}
      </motion.div>
    </motion.div>
  );
}

export default function OrinStream() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-none"
    >
      <motion.div
        className="max-h-[85vh] w-full overflow-y-auto rounded-3xl bg-slate-50 p-3 text-slate-800 md:p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-12"
          variants={containerVariants}
        >
          {/* HERO */}
          <SectionCard className="lg:col-span-8" title=" ">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600"
                >
                  Embedded System
                </motion.div>

                <motion.h1
                  layout
                  className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
                >
                  Vision Hub
                </motion.h1>  
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="mt-2 text-sm font-medium text-slate-700 md:text-base"
                >
                  Edge AI Streaming Platform
                </motion.p>              
              </div>

              <div className="grid grid-cols-2 gap-3 xl:w-[320px] xl:min-w-[320px]">
                <StatCard label="GPU Usage" value="45%" />
                <StatCard label="Latency" value="180ms" />
              </div>
            </div>
            <div>
              <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 md:text-base"
                >
                  Edge AI video processing platform for real-time multi-camera
                  streaming and inference on NVIDIA Jetson Orin.
                </motion.p>
            </div>

            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {techStack.map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </SectionCard>

          {/* PROBLEM */}
          <SectionCard
            className="lg:col-span-4"
            title="The Problem"
            subtitle="Key constraints the platform had to solve in a compact edge deployment."
          >
            <motion.div
              className="space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {problemItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: 10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ x: 4 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </SectionCard>

          {/* PREVIEW */}
          <SectionCard
            className="lg:col-span-7"
            title="Project Preview"
            subtitle="Real screenshots or system diagrams."
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative h-64 w-full bg-slate-100 md:h-80 xl:h-[28rem]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide.src}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    initial={{ opacity: 0, scale: 1.03, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.02, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-contain bg-slate-100"
                  />
                </AnimatePresence>

                
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium text-slate-700"
                >
                  {activeSlide.title}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={goPrev}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Prev
                </motion.button>

                <motion.button
                  type="button"
                  onClick={goNext}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Next
                </motion.button>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      width: isActive ? 28 : 10,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.22 }}
                    className={`h-2.5 rounded-full ${
                      isActive ? "bg-slate-900" : "bg-slate-300"
                    }`}
                  />
                );
              })}
            </div>
          </SectionCard>

          {/* PERFORMANCE */}
          <SectionCard
            className="lg:col-span-5"
            title="Performance Results"
            subtitle="Focused on practical edge performance and low-latency streaming."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  GPU Usage
                </div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  45%
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-full rounded-full bg-slate-900"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Stable enough to keep inference and multi-output streaming
                  efficient on Jetson Orin.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.015 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Latency
                </div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                  180ms
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                    className="h-full rounded-full bg-slate-700"
                  />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fast enough for near real-time viewing and responsive client
                  playback.
                </p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500"
            >
              The platform balances inference, composition, and multi-client
              delivery while remaining practical for edge deployment.
            </motion.div>
          </SectionCard>

          {/* ARCHITECTURE */}
          <SectionCard
            className="lg:col-span-12"
            title="Architecture"
            subtitle="RTSP feeds are processed once, then branched into single-view and quad-view outputs through shared memory for RTSP / WebRTC serving."
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 md:p-3"
            >
              <motion.img
                src={architectureSrc}
                alt="Vision Hub architecture diagram"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full rounded-xl object-contain"
              />
            </motion.div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                {
                  title: "Ingest + infer:",
                  text: "The system takes in RTSP camera feeds, runs inference and tracking once, then branches the result downstream.",
                },
                {
                  title: "Two output modes:",
                  text: "Demux supports single-stream outputs while tiler builds a quad view for monitoring.",
                },
                {
                  title: "Flexible delivery:",
                  text: "Shared memory decouples compute from serving layers, making RTSP and WebRTC integration easier.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600"
                >
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>{" "}
                  {item.text}
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* WHAT I LEARNED */}
          <SectionCard
            className="lg:col-span-12"
            title="What I Learned"
            subtitle="Core implementation lessons from building and tuning the pipeline."
          >
            <motion.div
              className="grid gap-3 md:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {learnedItems.map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </SectionCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}