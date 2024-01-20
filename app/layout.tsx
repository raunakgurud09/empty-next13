import '@/styles/globals.css'

import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
// import { Noto_Serif_JP } from "next/font/google"
// const noto = Noto_Serif_JP({ })

import Header from '@/components/header'
import Footer from '@/components/footer'
import ThemeProviders from '../components/theme-provider'


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Raunak Gurud",
      url: "https://raunakgurud.com",
    },
  ],
  creator: "raunakgurud",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@raunakgurud",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${space_grotesk.variable} scroll-smooth`}
      lang="en"
    >
      <body>
        <ThemeProviders>
          <Header />
          {children}
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
