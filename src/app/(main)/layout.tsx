import Header from "@/components/layout/Header";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Shop Net Page",
    template: "%s - Shop Net"
  }
} 

export default function NavigationLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="bg-white h-full flex flex-col">
      <Header />
      {children}
    </main>
  )
}