interface ServiceTagProps {
  text: string;
  tagColor: string;
}

export default function ServiceTag({ text, tagColor }: ServiceTagProps) {
  const colorStyles: { [key: string]: { text: string; bg: string } } = {
    blue:   { text: 'text-blue-700',    bg: 'bg-blue-50' },
    teal:   { text: 'text-teal-700',    bg: 'bg-teal-50' },
    red:    { text: 'text-red-700',     bg: 'bg-red-50' },
    lime:   { text: 'text-lime-700',    bg: 'bg-lime-50' },
    violet: { text: 'text-violet-700',  bg: 'bg-violet-50' },
    yellow: { text: 'text-yellow-700',  bg: 'bg-yellow-50' },
    orange: { text: 'text-orange-700',  bg: 'bg-orange-50' },
    cyan:   { text: 'text-cyan-700',    bg: 'bg-cyan-50' },
    fuchsia:{ text: 'text-fuchsia-700', bg: 'bg-fuchsia-50' },
    pink:   { text: 'text-pink-700',    bg: 'bg-pink-50' },
    slate:  { text: 'text-slate-700',   bg: 'bg-slate-50' },
    stone:  { text: 'text-stone-700',   bg: 'bg-stone-50' },
    amber:  { text: 'text-amber-700',   bg: 'bg-amber-50' },
    rose:   { text: 'text-rose-700',    bg: 'bg-rose-50' },
    indigo: { text: 'text-indigo-700',  bg: 'bg-indigo-50' },
  };

  const { text: textColor, bg: bgColor } = colorStyles[tagColor] || colorStyles.blue;

  return (
    <span className={`rounded-full ${textColor} px-2.5 py-0.5 whitespace-nowrap ${bgColor}`}>
      {text}
    </span>
  );
}
