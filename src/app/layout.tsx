import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashish Bhiwapurkar | AI Engineer & Developer",
  description: "Portfolio of Kashish Bhiwapurkar - AI Engineer, ML Enthusiast, Flutter Developer building intelligent systems that solve real-world problems.",
  keywords: ["Kashish Bhiwapurkar", "AI Engineer", "Machine Learning", "Flutter Developer", "Portfolio", "ISL Translator"],
  authors: [{ name: "Kashish Bhiwapurkar" }],
  openGraph: {
    title: "Kashish Bhiwapurkar | AI Engineer & Developer",
    description: "Building intelligent systems that solve real-world problems.",
    type: "website",
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
      className={`${jetbrainsMono.variable} ${firaCode.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <style>{`
          * { cursor: none !important; }
          @media (pointer: coarse) { * { cursor: auto !important; } }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-[#050505]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
