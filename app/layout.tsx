import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Vansh Raj Chauhan | Next.js & React Developer",
    template: "%s | Vansh Raj Chauhan",
  },
  description:
    "Full Stack Developer specializing in Next.js, React. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
  ],
  authors: [{ name: "Vansh Raj Chauhan" }],
  creator: "Vansh Raj Chauhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vansh Raj Chauhan Portfolio",
    title: "Vansh Raj Chauhan | Next.js & React Developer",
    description:
      "Full Stack Developer specializing in Next.js, React. Building high-performance web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Raj Chauhan | Next.js & React Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and AI Integration",

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
