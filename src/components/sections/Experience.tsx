import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { experiences } from "@/data/profile";
import { ChevronRight } from "lucide-react";

export function Experience() {
  const t = useTranslations();

  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        <AnimateOnScroll>
          <h2
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
          >
            {t("experience.heading")}
            <span className="text-[var(--accent)]">.</span>
          </h2>
          <div className="w-16 h-[3px] bg-[var(--accent)] mb-12" />
        </AnimateOnScroll>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={i} delay={i * 0.15} variant="fadeUp">
              <div className="p-6 md:p-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold text-[var(--text)] mb-1"
                    >
                      {exp.role}
                    </h3>
                    <p className="text-[var(--text-muted)] font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-[var(--text-muted)] font-medium mb-1">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                {exp.summaryKey && (
                  <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                    {t(exp.summaryKey)}
                  </p>
                )}

                {/* Projects Section */}
                <div className="bg-[var(--bg)] rounded-xl border border-[var(--border)] p-5 md:p-8">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[7px] top-2 bottom-4 w-[2px] bg-[var(--border)]" />

                    <div className="space-y-10">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="relative pl-8 md:pl-10">
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-[3px] border-[var(--text-muted)] bg-[var(--bg)] z-10" />

                          <h4
                            className="text-lg font-bold text-[var(--text)] mb-2"
                          >
                            {proj.name}
                          </h4>

                          {proj.descriptionKey && (
                            <p className="text-[var(--text-muted)] italic text-sm mb-4">
                              {t(proj.descriptionKey)}
                            </p>
                          )}

                          <div className="flex flex-wrap gap-2 mb-4">
                            {proj.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)] rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <ul className="space-y-3">
                            {proj.bulletKeys.map((bk) => {
                              const text = t(
                                `experience.${exp.companyKey}.${bk}`,
                              );
                              // Optional regex to strip [Client-side] just in case it's lingering
                              const cleanText = text.replace(/^\[.*?\]\s*/, "");

                              return (
                                <li
                                  key={bk}
                                  className="text-[var(--text-muted)] text-sm md:text-base flex items-start gap-3"
                                >
                                  <ChevronRight className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-1" />
                                  <span className="leading-relaxed">
                                    {cleanText}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
