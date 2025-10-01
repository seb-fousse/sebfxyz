import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle.component";

interface FooterProps {
  showHomeLink?: boolean;
}

export default function Footer({ showHomeLink = false }: FooterProps) {
  return (
    <footer className="w-full py-8 flex justify-center relative">
      <div className="flex space-x-6 text-primary">
        {showHomeLink && <Link href="/">Home</Link>}
        <a href="mailto:me@sebf.xyz">Email</a>
        <a
          href="https://github.com/seb-fousse"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sebastien-fousse"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/sebf.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <ThemeToggle />
      </div>
    </footer>
  );
}
