import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartStep — Safety Shoe Monitoring",
  description: "Real-time safety shoe location, battery and hazard monitoring.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:FILL@0..1&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
