import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'

export const metadata = {
  title: 'Home | Yuki Uemoto - Multi-Creator & Design Engineer',
  description: '植本 裕貴 (Yuki Uemoto) の公式ポートフォリオサイト。AI駆動開発とデザインを軸に、Webサービスやデジタル体験の更なる可能性を追求しています。',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  )
}
