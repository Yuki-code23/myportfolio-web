'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/home/AnimatedSection'
import { fadeInUp } from '@/lib/animations'
import { isValidEmail } from '@/lib/utils'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

// SSGformのフォームIDをここに設定してください
const SSGFORM_ACTION = 'https://ssgform.com/s/eDc1ZvuApkVV'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = '名前を入力してください'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
      isValid = false
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'yuki.uemotojb@gmail.com',
      link: 'mailto:yuki.uemotojb@gmail.com',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Hiroshima, Japan',
      link: null,
    },
  ]

  return (
    <div className="pt-32 pb-20 bg-matt-black">
      {/* Hero Section */}
      <section className="container-custom mb-16">
        <AnimatedSection>
          <motion.p
            variants={fadeInUp}
            className="text-gold font-medium mb-4 tracking-wider"
          >
            GET IN TOUCH
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Let's Work <span className="gradient-text">Together</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-3xl"
          >
            お仕事のご依頼や、制作に関するご相談など、お気軽にお問い合わせください。
            新しいプロジェクトやクリエイティブなアイデア、あなたのビジョンを形にするお手伝いをさせていただけるのを楽しみにしております。
          </motion.p>
        </AnimatedSection>
      </section>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="glass-effect rounded-2xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gold/10 rounded-xl">
                        <info.icon className="text-2xl text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-gold smooth-transition"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="glass-effect rounded-2xl p-8">
                {/* SSGform: action属性にフォームURLを設定、method="POST"を使用 */}
                <form
                  action={SSGFORM_ACTION}
                  method="POST"
                  onSubmit={(e) => {
                    if (!validateForm()) {
                      e.preventDefault()
                    }
                  }}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-light-gray rounded-lg text-white focus:outline-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-gold'
                        } smooth-transition`}
                      placeholder="お名前を入力してください"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-light-gray rounded-lg text-white focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-gold'
                        } smooth-transition`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-light-gray rounded-lg text-white focus:outline-none focus:ring-2 ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-gold'
                        } smooth-transition resize-none`}
                      placeholder="お問い合わせ内容を入力してください..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full btn-primary cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    送信する
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
