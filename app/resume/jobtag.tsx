interface JobTagProps {
  text: string;
}

export default function JobTag({ text }: JobTagProps) {
  return (
    <span className="inline-block text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 transition-all duration-200 hover:bg-neutral-900 hover:text-white cursor-default">
      {text}
    </span>
  );
}
