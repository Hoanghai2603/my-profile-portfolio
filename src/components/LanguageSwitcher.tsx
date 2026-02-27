"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = () => {
        const newLocale = locale === "vi" ? "en" : "vi";
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    return (
        <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 px-2 h-10 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer rounded-sm hover:bg-[var(--surface-hover)]"
            aria-label={`Switch to ${locale === "vi" ? "English" : "Tiếng Việt"}`}
        >
            <Languages className="w-4 h-4" />
            <span className="uppercase text-xs font-bold tracking-wider">
                {locale === "vi" ? "VI" : "EN"}
            </span>
        </button>
    );
}
