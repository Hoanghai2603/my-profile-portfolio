"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-sm transition-colors duration-200 hover:bg-[var(--surface-hover)]"
            aria-label="Toggle theme"
        >
            <Sun className="w-5 h-5 text-[var(--text)] dark:hidden" />
            <Moon className="w-5 h-5 text-[var(--text)] hidden dark:block" />
        </button>
    );
}
