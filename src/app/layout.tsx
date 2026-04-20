import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Zaki Revandi — Software Engineer",
  description:
    "Fresh graduate Software Engineer from BINUS University with experience in full-stack development using C# (.NET) and JavaScript. Based in Jakarta, Indonesia.",
  keywords: [
    "Muhammad Zaki Revandi",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    ".NET",
    "Jakarta",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Zaki Revandi" }],
  openGraph: {
    title: "Muhammad Zaki Revandi — Software Engineer",
    description:
      "Fresh graduate Software Engineer with hands-on experience in full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body
        style={{ fontFamily: "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
