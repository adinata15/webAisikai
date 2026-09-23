import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "theme";

function applyTheme(dark) {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0F172A" : "#F8FAFC");
}

export function useTheme() {
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "dark" || stored === "light") {
            const dark = stored === "dark";
            applyTheme(dark);
            setIsDark(dark);
            return undefined;
        }

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const sync = () => {
            applyTheme(media.matches);
            setIsDark(media.matches);
        };
        sync();
        media.addEventListener("change", sync);
        return () => media.removeEventListener("change", sync);
    }, []);

    const toggleTheme = () => {
        const next = !document.documentElement.classList.contains("dark");
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
        applyTheme(next);
        setIsDark(next);
    };

    return { isDark, toggleTheme };
}

const ThemeToggle = ({ isDark, onToggle }) => (
    <button
        type="button"
        className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border ${
            isDark ? "bg-accent text-white" : "bg-card text-foreground"
        }`}
        aria-pressed={isDark}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={onToggle}
    >
        {isDark ? <FiSun className="size-5" aria-hidden="true" /> : <FiMoon className="size-5" aria-hidden="true" />}
    </button>
);

export default ThemeToggle;
