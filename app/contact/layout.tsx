import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
    description: '植本 裕貴 (Yuki Uemoto) への仕事のご依頼、ご相談はこちらから。広島を拠点に全国対応可能です。',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
