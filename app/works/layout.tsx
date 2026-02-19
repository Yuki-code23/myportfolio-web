import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Works',
    description: '植本 裕貴 (Yuki Uemoto) が手掛けたプロジェクト一覧。Web制作、LP、AI開発、ライブ配信支援など、多様な実績を紹介します。',
}

export default function WorksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
