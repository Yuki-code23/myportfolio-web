import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Portfolio - Designer & Engineer',
  description: 'High-end portfolio showcasing design and engineering excellence',
  keywords: ['portfolio', 'designer', 'engineer', 'web development', 'creative'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="bg-matt-black text-white antialiased">
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
