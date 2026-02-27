import { useTranslations } from "next-intl";
import { Github, Linkedin, Heart } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";

const iconMap: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
};

export function Footer() {
    const t = useTranslations("footer");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="section-container py-8 ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-[36px]">
                    <p className="text-sm text-[var(--text-muted)]">
                        © {currentYear} {t("rights")} {profile.name}
                    </p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon];
                            return (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
                                    aria-label={link.platform}
                                >
                                    {Icon && <Icon className="w-5 h-5" />}
                                </a>
                            );
                        })}
                    </div>

                    <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                        {t("builtWith")} <Heart className="w-3.5 h-3.5 text-[var(--accent)]" /> & Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
