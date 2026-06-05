import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OptiConv | Global Unit Converter",
  description: "Convertworld alternative. Fast, free, and accurate length, weight, temperature, area, volume, speed, and data converter in multiple languages.",
  keywords: "unit converter, convert length, convert kg to lbs, online calculator, metrik dönüştürücü",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
