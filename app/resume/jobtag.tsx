interface JobTagProps {
  text: string;
}
export default function JobTag({ text }: JobTagProps) {
  return (
    <span className="inline-block bg-blue-100 px-3 py-1 rounded-full">
      { text }
    </span>
  );
}
