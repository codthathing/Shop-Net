import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/contexts/MainContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shop Net App",
  description: "Get different products here for Male, Female, Unisex.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <MainProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh] bg-white`}>
          {children}
        </body>
      </MainProvider>
    </html>
  );
}
