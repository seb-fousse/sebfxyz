import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

const ThemeToggle = ({ className = "" }: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch. The resolved theme is only known on the client,
  // so the first client render has to match the server's before we can show
  // the real icon. This is the documented next-themes pattern; the setState is
  // deliberately in an effect so it runs after hydration, not during it.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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