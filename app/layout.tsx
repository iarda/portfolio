import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";

const kanit = Kanit({ variable: "--font-rubik-sans", subsets: ["latin"], weight: ["300"] });

export const metadata: Metadata = {
  title: "Portfolio - Ismail Arda",
  description: "Built with passion.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kanit.className}>
      <body className="antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
