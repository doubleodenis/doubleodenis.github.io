import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denis Ortega",
  description:
    "Software Engineer who enjoys building interfaces people actually enjoy using.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend",
    "Full Stack",
  ],
  authors: [{ name: "Denis Ortega" }],
  openGraph: {
    title: "Denis Ortega",
    description:
      "Software Engineer who enjoys building interfaces people actually enjoy using.",
    url: "http://doubleodenis.github.io",
    siteName: "Denis Ortega",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis Ortega",
    description:
      "Software Engineer who enjoys building interfaces people actually enjoy using.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-slate-950 text-slate-400 antialiased">{children}</body>
    </html>
  );
}
