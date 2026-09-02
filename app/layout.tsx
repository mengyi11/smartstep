import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartStep — Safety Shoe Monitoring",
  description: "Real-time safety shoe location, battery and hazard monitoring.",
  manifest: "/mobile-app/manifest.webmanifest",
  applicationName: "SmartStep",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SmartStep",
  },
  icons: {
    icon: "/mobile-app/icon.svg",
    apple: "/mobile-app/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><meta name="theme-color" content="#111858" /><meta name="mobile-web-app-capable" content="yes" /><link rel="preconnect" href="https://fonts.googleapis.com" /><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:FILL@0..1&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
