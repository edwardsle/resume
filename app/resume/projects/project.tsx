import { useState, useRef, useEffect, type ReactNode } from "react";
import Modal from "./modal";

export interface ProjectProps {
  title: string;
  category: string;
  img_path: string;
  first_img: string;
  description: ReactNode;
  year: number;
  external_link?: string | boolean;
  modalContent?: ReactNode;
}

export default function Project({
  title,
  category,
  img_path,
  first_img,
  description,
  year,
  external_link = false,
  modalContent,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHovered && isExpanded) {
      const timeout = setTimeout(() => setIsExpanded(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isHovered, isExpanded]);

  const handleCardClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof external_link === "string") {
      window.open(external_link, "_blank", "noopener,noreferrer");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes borderDraw {
          0% { clip-path: inset(0 100% 100% 0); }
          25% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes floatUp1 {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
        }
        @keyframes floatUp2 {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          25% { opacity: 0.8; }
          100% { transform: translateY(-100px) scale(0.3); opacity: 0; }
        }
        @keyframes floatUp3 {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.6; }
          100% { transform: translateY(-60px) scale(0.4); opacity: 0; }
        }
        .project-card {
          opacity: 0;
          transform: translateY(30px);
        }
        .project-card.visible {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .project-card .shimmer-sweep {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-card:hover .shimmer-sweep {
          opacity: 1;
          animation: shimmer 1.2s ease-in-out;
        }
        .project-card .hover-border-anim {
          opacity: 0;
          transition: opacity 0.4s;
        }
        .project-card:hover .hover-border-anim {
          opacity: 1;
          animation: borderDraw 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .project-card .particle-1 { opacity: 0; }
        .project-card:hover .particle-1 {
          animation: floatUp1 2.5s ease-out infinite;
          animation-delay: 0.3s;
        }
        .project-card .particle-2 { opacity: 0; }
        .project-card:hover .particle-2 {
          animation: floatUp2 3s ease-out infinite;
          animation-delay: 0.8s;
        }
        .project-card .particle-3 { opacity: 0; }
        .project-card:hover .particle-3 {
          animation: floatUp3 2s ease-out infinite;
          animation-delay: 1.2s;
        }
      `}</style>

      <div
        ref={cardRef}
        className={`project-card group relative overflow-hidden rounded-lg w-full h-96 cursor-pointer select-none ${
          isVisible ? "visible" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {/* ── Clean full image ── */}
        <img
          src={`/img/projects/${img_path}/${first_img}`}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isHovered ? "scale-[1.03]" : "scale-100"
          }`}
        />

        {/* ── Shimmer light sweep on hover ── */}
        <div
          className="shimmer-sweep absolute inset-0 pointer-events-none z-[5]"
          style={{
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
          }}
        />

        {/* ── Animated border frame on hover ── */}
        <div className="hover-border-anim absolute inset-3 pointer-events-none z-[6] border border-white/30 rounded" />

        {/* ── Corner brackets ── */}
        <div
          className={`absolute top-3 right-3 z-[7] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-r border-white/0 ${
            isHovered ? "w-10 h-10 border-white/40" : "w-0 h-0"
          }`}
        />
        <div
          className={`absolute bottom-3 left-3 z-[7] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-l border-white/0 ${
            isHovered ? "w-10 h-10 border-white/40" : "w-0 h-0"
          }`}
          style={{ transitionDelay: isHovered ? "100ms" : "0ms" }}
        />
        <div
          className={`absolute bottom-3 right-3 z-[7] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-r border-white/0 ${
            isHovered ? "w-10 h-10 border-white/40" : "w-0 h-0"
          }`}
          style={{ transitionDelay: isHovered ? "200ms" : "0ms" }}
        />

        {/* ── Floating particles ── */}
        <div className="particle-1 absolute bottom-16 left-[20%] z-[7] w-1.5 h-1.5 bg-white/70 rounded-full pointer-events-none" />
        <div className="particle-2 absolute bottom-12 left-[55%] z-[7] w-1 h-1 bg-white/50 rounded-full pointer-events-none" />
        <div className="particle-3 absolute bottom-20 left-[75%] z-[7] w-2 h-2 bg-white/40 rounded-full pointer-events-none" />

        {/* ── Vignette on hover ── */}
        <div
          className={`absolute inset-0 pointer-events-none z-[4] transition-opacity duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* ── Year & Category badge ── */}
        <div
          className={`absolute top-4 left-4 z-20 rounded px-3 py-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            isHovered
              ? "backdrop-blur-md bg-black/60 border border-white/20 shadow-lg shadow-black/20"
              : "bg-transparent border border-transparent"
          }`}
        >
          <div
            className={`text-sm tracking-widest whitespace-nowrap transition-all duration-500 ${
              isHovered
                ? "text-white/90 [text-shadow:none]"
                : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.6)]"
            }`}
          >
            {year}
          </div>
          <div
            className={`text-[10px] text-white/60 uppercase tracking-[0.2em] font-light transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden whitespace-nowrap ${
              isHovered ? "max-h-6 opacity-100 mt-1" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {category}
          </div>
        </div>

        {/* ── Hover: title + hint at bottom ── */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 px-5 py-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isHovered && !isExpanded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <h3 className="text-white font-light text-lg tracking-wide">
            {title}
          </h3>
          <div
            className={`h-px bg-gradient-to-r from-white/60 via-white/30 to-transparent mt-1.5 mb-2 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isHovered ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: isHovered ? "150ms" : "0ms" }}
          />
          <p className="text-white/50 text-xs tracking-wider uppercase">
            Click to read more
          </p>
        </div>

        {/* ── Expanded full overlay panel ── */}
        <div
          className={`absolute inset-0 z-30 transition-opacity duration-500 ${
            isExpanded
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Full dark glass backdrop */}
          <div
            className={`absolute inset-0 backdrop-blur-md bg-black/70 transition-all duration-600 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCardClick}
          />

          {/* Content centered in full card */}
          <div
            className={`relative z-10 h-full flex flex-col justify-center px-8 py-6 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isExpanded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Category & year tag */}
            <p
              className={`text-white/40 text-[11px] uppercase tracking-[0.25em] font-light mb-3 transition-all duration-500 ${
                isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: isExpanded ? "100ms" : "0ms" }}
            >
              {category} — {year}
            </p>

            {/* Title */}
            <h3
              className={`text-white font-light text-2xl tracking-wide mb-3 transition-all duration-500 ${
                isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: isExpanded ? "150ms" : "0ms" }}
            >
              {title}
            </h3>

            {/* Divider */}
            <div
              className={`h-px w-16 bg-white/30 mb-4 origin-left transition-all duration-700 ${
                isExpanded ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: isExpanded ? "200ms" : "0ms" }}
            />

            {/* Description — full room to breathe */}
            <div
              className={`text-white/80 text-sm leading-relaxed tracking-wide max-h-44 overflow-y-auto pr-2 transition-all duration-500 ${
                isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: isExpanded ? "250ms" : "0ms" }}
            >
              {description}
            </div>

            {/* Action button */}
            <button
              onClick={handleAction}
              className={`mt-5 self-start flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white/80 hover:text-white text-xs uppercase tracking-[0.2em] font-light px-5 py-2.5 rounded transition-all duration-300 cursor-pointer ${
                isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: isExpanded ? "350ms" : "0ms" }}
            >
              {typeof external_link === "string" ? (
                <>
                  Visit Site
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </>
              ) : (
                <>
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Close hint */}
            <p
              className={`mt-4 text-white/25 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isExpanded ? "400ms" : "0ms" }}
            >
              Click to close
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {!external_link && modalContent && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {modalContent}
        </Modal>
      )}
    </>
  );
}
