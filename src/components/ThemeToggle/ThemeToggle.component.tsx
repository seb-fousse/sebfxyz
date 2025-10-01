import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const ThemeToggle = ({ className = "" }: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  // Handle touch events for better Safari iOS compatibility
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handleThemeToggle();
  };

  if (!mounted) {
    // Return a placeholder to prevent layout shift
    return (
      <button className={className} disabled>
        <Moon className="hover:text-primary" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      className={className}
      onClick={handleThemeToggle}
      onTouchEnd={handleTouchEnd}
      type="button"
    >
      {resolvedTheme === 'dark' ? <Sun className="hover:text-primary" /> : <Moon className="hover:text-primary" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;