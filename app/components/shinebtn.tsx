import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ShineBtnProps {
  text: string;
  icon?: IconDefinition;
}

export default function ShineBtn({ text, icon }: ShineBtnProps) {
  return (
    <a
      href="https://docs.google.com/document/d/1ioEnWHFtFaYdD-9TF30zQyUGfZ59OeanpoLJevx2ZRc/edit?usp=sharing"
      target="_blank"
      className="group relative overflow-hidden bg-stone-800 focus:ring-4 focus:ring-stone-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
    >
      <span className="z-40">{text}</span>
      {icon && <FontAwesomeIcon
        icon={icon}
        className="z-40 ml-2 -mr-1 transition-all duration-300 group-hover:translate-x-1"
      />}
      <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-75%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
    </a>
  );
}
