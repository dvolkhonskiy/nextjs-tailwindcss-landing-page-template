import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project title',
  description: 'Project description',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={inter.className + ' min-h-screen'}>
              <Navbar/>
              <div className='m-5 flex flex-col flex-grow'>
                  {children}
              </div>
              <Footer/>
          </body>
      </html>
  )
}
