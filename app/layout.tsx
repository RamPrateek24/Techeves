import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LaserFlowBoxExample from "@/components/LaserFlowBoxExample"; // ✅ import component
import Navbar from "@/components/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechEves",
  description: "Hub for all techy events",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
      <Navbar />
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LaserFlowBoxExample />
          </div>

        {/* render page content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
