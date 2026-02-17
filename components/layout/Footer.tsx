'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
]

const footerLinks = [
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-gold/10 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text mb-4 cursor-pointer inline-block"
              >
                PORTFOLIO
              </motion.h3>
            </Link>
            <p className="text-gray-400 text-sm">
              Designer & Engineer
              <br />
              Creating exceptional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-gold smooth-transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold smooth-transition text-xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
