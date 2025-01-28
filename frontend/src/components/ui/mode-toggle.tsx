import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer w-6 h-6">
      {theme === "light" ? (
        <Sun className="lucide-secondary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute lucide-icon rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
