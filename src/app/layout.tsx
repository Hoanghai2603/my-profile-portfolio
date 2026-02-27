import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Hoàng Hải — Frontend Developer",
  description: "Portfolio website của Nguyễn Hoàng Hải — Frontend Developer với 4+ năm kinh nghiệm.",
  keywords: ["frontend developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Nguyễn Hoàng Hải" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
