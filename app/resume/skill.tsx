import type { ReactNode } from "react";

interface LanguageProps {
  text: string;
  icon: ReactNode;
}

export default function Skill({ text, icon }: LanguageProps) {
  return (
    <div className="relative group h-16 flex flex-col rounded-xl bg-white bg-clip-border shadow-sm">
      <div className="block">
        <div className="h-3">
          <div className="grid absolute z-40 -top-10 lg:top-[-10%] left-[5%] w-[90%] min-h-16 bg-brand-700 text-white rounded-xl place-items-center group-hover:top-[-46%] group-hover:opacity-[0.9] duration-300">
            {icon}
          </div>
        </div>
        <div className="p-6 z-10 w-full">
          <p className="inline-block text-center w-full font-sans tracking-wide antialiased text-xs sm:text-base">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
