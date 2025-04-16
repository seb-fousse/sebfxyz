import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const ThemeToggle = ({ className = "" }: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className={className}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="hover:text-primary" /> : <Moon className="hover:text-primary" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;