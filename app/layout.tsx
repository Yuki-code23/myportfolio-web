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
  title: {
    default: '植本 裕貴 (Yuki Uemoto) | Multi-Creator & Design Engineer',
    template: '%s | Yuki Uemoto',
  },
  description: 'AI駆動開発とデザインを融合させるマルチクリエイター、植本 裕貴のポートフォリオ。広島を拠点に、Next.jsやSTUDIOを用いたWeb制作、求人LP、AI活用アプリの開発を行っています。',
  keywords: ['植本 裕貴', 'Yuki Uemoto', 'Design Engineer', 'Multi-Creator', 'デザインエンジニア', 'マルチクリエイター', 'AI駆動開発', 'Next.js', 'STUDIO', '広島'],
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
