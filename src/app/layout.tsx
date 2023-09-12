import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Kasper Tontti - Software Engineer & Designer`,
  description: `A seasoned software consultant with a decade of hands-on experience in crafting user-centric digital solutions. Living life to be inspired and to inspire.`,
  themeColor: "black",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "WebGL",
    "Three.js",
    "TailwindCSS",
    "Kasper Tontti",
  ],
  authors: [{ name: "Kasper Tontti", url: "https://github.com/kajumito" }],
  colorScheme: "dark",
  creator: "Kasper Tontti",
  publisher: "Kasper Tontti",
  openGraph: {
    title: `Kasper Tontti - Software Engineer & Designer`,
    description: `A seasoned software consultant with a decade of hands-on experience in crafting user-centric digital solutions. Living life to be inspired and to inspire.`,
    url: "https://kaspertontti.fi",
    siteName: `Kasper Tontti - Software Engineer & Designer`,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
