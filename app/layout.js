'use client'
import { Inter } from 'next/font/google'
import {Header} from "@/app/general";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta charSet="utf-8"/>
          <title>Service Calcule</title>
      </head>
      <body style={{margin: 0}} className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
