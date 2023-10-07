import Image from 'next/image'
import logo from "public/cypherkeep-logo.png"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='bg-black'>
          <Image 
        src={logo} 
        alt="logo" 
        width={300} 
        height={50}/>
        </nav>{children}</body>
    </html>
  )
}
