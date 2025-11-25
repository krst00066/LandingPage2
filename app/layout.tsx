import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bonus 200% + 100 Free Spins | Platform Gaming #1 Indonesia",
  description:
    "Daftar sekarang dan dapatkan bonus welcome 200%! Withdraw kilat 3 menit, slot gacor, live casino, sportsbook. Platform gaming terpercaya dengan RTP 98%.",
  keywords: "slot gacor, casino online, sportsbook, bonus besar, withdraw cepat, game online indonesia",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#D97706",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
