export default function Footer() {
  const handleClick = () => {
    window.location.href = "mailto:hello@edwardsle.com";
  };
  return (
    <footer className="w-full">
      <span className="flex items-center py-10">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

        <span className="shrink-0 ps-4 text-gray-400">
          © {new Date().getFullYear()} Edward S. Le
        </span>
      </span>
    </footer>
  );
}
