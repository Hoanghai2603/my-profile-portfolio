"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
    { key: "about", href: "#about" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "education", href: "#education" },
    { key: "contact", href: "#contact" },
];

export function Navbar() {
    const t = useTranslations("nav");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
                    : "bg-transparent"
                }`}
        >
            <nav className="section-container flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a
                    href="#"
                    className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-[var(--text)] cursor-pointer hover:text-[var(--accent)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {profile.name.split(" ").pop()}
                    <span className="text-[var(--accent)]">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className="px-3 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1">
                    <LanguageSwitcher />
                    <ThemeToggle />

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? (
                            <X className="w-5 h-5 text-[var(--text)]" />
                        ) : (
                            <Menu className="w-5 h-5 text-[var(--text)]" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 top-16 bg-[var(--bg)]/98 backdrop-blur-lg transition-all duration-300 ${isMobileOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center gap-8 pt-20">
                    {navItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="text-2xl font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
