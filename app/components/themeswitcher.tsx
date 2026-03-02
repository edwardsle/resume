import { motion } from "framer-motion";
import { useTheme, type ThemeName } from "~/context/theme";

const themeColors: Record<ThemeName, string> = {
  rose: "bg-rose-400",
  violet: "bg-violet-400",
  cyan: "bg-cyan-400",
  amber: "bg-amber-400",
  emerald: "bg-emerald-400",
};

export default function ThemeSwitcher() {
  const { theme, cycleTheme, themes } = useTheme();

  return (
    <motion.button
      onClick={cycleTheme}
      className="mt-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Switch theme color"
    >
      {themes.map((t) => (
        <span
          key={t}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${themeColors[t]} ${
            t === theme ? "scale-125 ring-2 ring-offset-1 ring-slate-300" : "opacity-40"
          }`}
        />
      ))}
    </motion.button>
  );
}
