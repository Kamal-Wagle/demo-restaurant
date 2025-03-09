import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Savoria Restaurant",
  description: "This is The Best Resturadent in Surkhet . Experience exquisite flavors and impeccable service at our Michelin-starred restaurant.",
  openGraph: {
    title: "Savoria Restaurant",
    description: "This is The Best Resturadent in Surkhet . Experience exquisite flavors and impeccable service at our Michelin-starred restaurant.",
    images: [
      {
        url: "/websiteImage.png?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Savoria Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savoria Restaurant",
    description: "This is The Best Resturadent in Surkhet .Experience exquisite flavors and impeccable service at our Michelin-starred restaurant.",
    images: ["/websiteImage.png?height=630&width=1200"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-orange-50 to-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'