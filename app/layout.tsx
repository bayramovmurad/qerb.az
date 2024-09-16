import type { Metadata } from 'next'
import {Inter, Roboto} from 'next/font/google'
import './globals.css'
import Navbar from "@/components/shared/Navbar";

const roboto = Roboto({ subsets: ['latin'], weight: ["100","400","700","900"] })

export const metadata: Metadata = {
  title: "Qerb",
  description: 'Qerb haqqinda xeberler ve meqaleler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden bg-light w-[85%] mx-auto`}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}

