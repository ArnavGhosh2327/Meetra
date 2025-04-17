import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meetra",
  description: "Quick HQ Meetings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 flex items-center justify-between rounded m-2 border-1 bg-background px-4 py-2">
          <span className="flex-none">Meetra</span>
          <NavigationMenu className="flex w-full gap-6 p-1 grow">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem className="active:scale-95">
                <NavigationMenuLink>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="active:scale-95">
                <NavigationMenuLink>Meetings</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="active:scale-95 hover:scale-105">
            {/*Basically a Dynamic Button*/}  
            Get Started
          </Button>
        </header>
        {children}
        <footer className="border-t-1 flex items-center justify-center p-2">
          <p>© 2023 Meetra</p>
        </footer>
      </body>
    </html>
  );
}
