'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedSection from '@/components/home/AnimatedSection'
import { fadeInUp } from '@/lib/animations'
import {
  HiCode,
  HiColorSwatch,
  HiDeviceMobile,
  HiLightningBolt,
  HiCheckCircle,
  HiOutlineTerminal
} from 'react-icons/hi'

const skills = [
  {
    category: 'Frontend Development',
    icon: HiCode,
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Design',
    icon: HiColorSwatch,
    items: [
      'Figma',
      'Canva',
      'STUDIO',
    ],
  },
  {
    category: 'Backend',
    icon: HiLightningBolt,
    items: [
      'Node.js',
      'MicroCMS',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    category: 'Mobile & Others',
    icon: HiDeviceMobile,
    items: [
      'React Native',
      'Git',
      'Vercel',
    ],
  },
  {
    category: 'IDE',
    icon: HiOutlineTerminal,
    items: [
      'VS Code',
      'Antigravity',
    ],
  },
]

const experiences = [
  {
    year: '2025.09 - Present',
    title: 'Multi-Creator & Design Engineer (Freelance)',
    company: 'Nomad Lab / Product Lab',
    description: 'AI駆動開発を中心に、ITリテラシーを高めながらプロダクト開発に注力。総合サービス企業のWebサイト修正、ITサポート企業の求人LP作成、社内請求書AI発行アプリの開発などに携わる。',
  },
  {
    year: '2025.04 - 2025.08',
    title: 'IT Technical Specialist',
    company: 'IT・エンジニアリング支援企業',
    description: 'IT業界へのキャリア転換を見据え、技術スタックの基盤構築と実務スキルの習得に専念。短期間でAI駆動開発やモダンフロントエンド技術への移行を実現。',
  },
  {
    year: '2023.04 - 2025.03',
    title: 'Branch Manager & Regional Captain',
    company: '株式会社トライグループ',
    description: '教室長として最大150名の生徒管理および教室経営に従事。毎月の営業目標を達成。2024年には中四国・九州エリアの約9教室を束ねるキャプテンとして、地域全体の売上に貢献。',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-matt-black overflow-hidden">
      {/* Hero Section */}
      <section className="container-custom mb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.p
              variants={fadeInUp}
              className="text-gold font-medium mb-4 tracking-wider"
            >
              ABOUT ME
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                植本 裕貴 <span className="text-gray-500 font-normal">/ Yuki Uemoto</span>
              </h2>
              <p className="text-gold font-medium">Hiroshima, Japan</p>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Multi-Creator &<br />
              <span className="gradient-text">Design Engineer</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="text-gray-400 text-lg space-y-6 max-w-2xl"
            >
              <p>
                2000年8月生まれ、広島県出身。
                2025年9月より、デザインとエンジニアリングを横断する「マルチクリエイター」として活動を開始しました。
                AI駆動開発（AI-Driven Development）を駆使し、圧倒的なスピード感で高品質なプロダクトを生み出すスタイルを得意としています。
              </p>
              <p>
                「Design Engineer」として、使い心地とビジュアル、そして技術的な機能美のすべてが融合したデジタル体験の創出を目指しています。
              </p>
              <p>
                クリエイターとしての活動は開発に留まらず、ライブ配信（Palmu）では最高ランクのS帯を半年以上維持。
                クリエイター支援やコミュニティ形成にも情熱を注いでいます。
              </p>
              <div className="pt-4 border-t border-gold/10">
                <h4 className="text-white font-bold mb-2">Personal & Hobbies</h4>
                <p>
                  動物が大好きで、家ではハリネズミ、モモンガ、モルモットたちと一緒に賑やかに暮らしています。
                  ギター演奏やカフェ巡りも、創作意欲を刺激する大切な時間です。
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Miyajima Image with Seamless Blend - Positioned at Top Right Edge */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-32 -right-64 hidden lg:block h-[800px] w-[60%] z-0 pointer-events-none"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-matt-black via-matt-black/20 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-matt-black/20 via-transparent to-matt-black" />
            <div className="relative h-full w-full">
              <Image
                src="/miyajima.jpg"
                alt="Miyajima Itsukushima Shrine Torii Gate"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom mb-20">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.category} delay={index * 0.1}>
              <motion.div
                className="glass-effect rounded-2xl p-8 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <skill.icon className="text-3xl text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">{skill.category}</h3>
                </div>

                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400">
                      <HiCheckCircle className="text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container-custom">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="glass-effect rounded-2xl p-8 border-l-4 border-gold"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-gold font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-light-gray rounded-full text-sm font-medium">
                      {exp.year}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
