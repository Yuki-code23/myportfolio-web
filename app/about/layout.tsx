import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: '植本 裕貴 (Yuki Uemoto) の経歴とスキル。教務管理からIT業界へ転身し、現在はAI駆動開発を武器にマルチクリエイターとして活動しています。',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
