import type { Metadata } from "next";
import { montserrat } from "./fonts/fonts";
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
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
