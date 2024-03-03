import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C Everything Studio",
  description: "C Everything Studio is dabbling in code and creating things. Made by Catalin Stroe nicknamed cLu.",
  keywords: ["web3", "coding", "programming", "developer", "portfolio", "react", "nextjs"],
  metadataBase: new URL("http://localhost:3000"),
  authors: { name: "cLu from cEverything Studio" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ceverything.ro",
    siteName: "cEverything Studio",
    images: "/images/water7.png",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={spaceGrotesk.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
