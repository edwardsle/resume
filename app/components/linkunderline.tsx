interface LinkUnderlineProps {
  text: string;
}

export default function LinkUnderline({ text }: LinkUnderlineProps) {
  return (
    <span className="relative inline before:bg-brand-500 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out group-hover:before:origin-bottom-left group-hover:before:scale-x-100">
      {text}
    </span>
  );
}
