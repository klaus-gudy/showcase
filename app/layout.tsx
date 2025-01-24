import type { Metadata } from "next";
import { montserrat, poppins } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madadi's Showcase",
  description: "Modern & Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
