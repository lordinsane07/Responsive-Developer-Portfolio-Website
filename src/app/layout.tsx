import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mrittick Deb — Full Stack Developer & ML Engineer",
  description:
    "Portfolio of Mrittick Deb — Computer Science student at LPU. Full Stack Developer, ML Engineer, Flutter Developer, and Open Source Contributor building end-to-end products.",
  keywords: [
    "Mrittick Deb",
    "Full Stack Developer",
    "ML Engineer",
    "Flutter Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Mrittick Deb" }],
  openGraph: {
    title: "Mrittick Deb — Full Stack Developer & ML Engineer",
    description:
      "Building end-to-end products — from pixel-perfect apps to intelligent ML systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
