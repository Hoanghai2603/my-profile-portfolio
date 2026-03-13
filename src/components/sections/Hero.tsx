"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import avatarImg from "@/assets/avatar.jpg";
import { profile, socialLinks } from "@/data/profile";

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5 mx-1" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5 mx-1" />;
      default:
        return null;
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const shortName = "Harry";

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            className="flex-1 flex flex-col items-start w-full max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
              <span className="text-sm font-medium text-green-500">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 flex flex-nowrap items-center gap-3 md:gap-4 whitespace-nowrap"
            >
              Hi, I&#39;m {shortName}
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Subtitle / Title */}
            <motion.h2
              variants={itemVariants}
              className="font-body text-2xl md:text-3xl text-[var(--text-muted)] font-medium mb-6"
            >
              {t("title")}
            </motion.h2>

            {/* Tagline / Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-10 text-justify md:text-left"
            >
              {t("tagline")}
            </motion.p>

            {/* Action buttons and Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text)] text-[var(--bg)] rounded-sm text-sm font-bold hover:scale-105 transition-transform duration-200 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                {t("cta.download")}
              </a>

              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-200 p-1"
                    aria-label={link.platform}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--text)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-200 p-1"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 mx-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            {/* Avatar Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border border-[var(--border)] bg-[var(--surface)] shadow-lg group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--border)]">
                <Image
                  src={avatarImg}
                  alt={profile.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
