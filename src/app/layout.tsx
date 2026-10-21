import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kashish Bhiwapurkar | AI/ML & Computer Vision Engineer",
  description:
    "AI/ML and Computer Vision engineer in training. B.Tech Data Science student at GHRCE building practical AI applications in hand-gesture recognition, multimodal AI, and intelligent systems.",
  keywords: [
    "Kashish Bhiwapurkar",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Portfolio",
    "ISL Translator",
    "AWS",
  ],
  authors: [{ name: "Kashish Bhiwapurkar" }],
  openGraph: {
    title: "Kashish Bhiwapurkar | AI/ML & Computer Vision Engineer",
    description:
      "Building practical AI applications in computer vision, multimodal AI, and intelligent systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish Bhiwapurkar | AI/ML & Computer Vision Engineer",
    description:
      "Building practical AI applications in computer vision, multimodal AI, and intelligent systems.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23000'/><text x='50' y='68' font-family='system-ui' font-size='55' font-weight='700' fill='%23fff' text-anchor='middle'>K</text></svg>"
      />
      <body
        className="min-h-full bg-black text-white"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
