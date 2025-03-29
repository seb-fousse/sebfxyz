import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === "light" ? <Moon className="text-neutral-800" /> : <Sun className="text-orange-100" />}
    </button>
  );
};

export default ThemeToggle;