import "./styles/globals.css"

import type { Metadata } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "./components/theme-provider"

export const metadata: Metadata = {
  title: "M4YOURS - Visual Editor",
  description:
    "A visual editor that lets you drag and drop with your components, directly within your current site or app.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
