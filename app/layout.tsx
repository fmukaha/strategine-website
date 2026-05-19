import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://strategine.com"),
  title: {
    default: "Strategine | Responsible Business Intelligence",
    template: "%s | Strategine",
  },
  description:
    "Strategine builds responsible business intelligence systems for leadership teams.",
  robots: {
    index: true,
    follow: true,
  },  icons: {
    icon: "/strategine_logo_mark.svg",
    shortcut: "/strategine_logo_mark.svg",
    apple: "/strategine_logo_mark.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}



