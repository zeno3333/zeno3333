"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

function TikTokIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

const navLinks = ["Services", "Projets", "Contact"]
const socialLinks = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "https://fr.linkedin.com/in/astrid-vavasseur-534880205", Icon: Linkedin },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
]

export function Footer() {
  return (
    <footer className="bg-secondary relative overflow-hidden pt-20 pb-8">
      {/* Decorative circle — bottom left */}
      <div className="absolute -left-64 -bottom-64 w-[500px] h-[500px] bg-accent/10 rounded-full hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-10"
        >
          <StarIcon className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-widest uppercase">Contact</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl mb-16"
        >
          <span className="font-serif italic text-primary">Restons</span>
          <br />
          <span className="font-sans font-bold text-foreground">en contact</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Brand card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card/95 backdrop-blur-sm rounded-3xl p-6"
          >
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="VavaStudio" width={160} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Direction artistique & création de contenus digitaux pour des marques qui veulent se démarquer.
            </p>
          </motion.div>

          {/* Navigation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card/95 backdrop-blur-sm rounded-3xl p-6"
          >
            <span className="text-xs text-primary font-bold tracking-wider uppercase">Navigation</span>
            <nav className="flex flex-col gap-3 mt-4">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-card/95 backdrop-blur-sm rounded-3xl p-6"
          >
            <span className="text-xs text-primary font-bold tracking-wider uppercase">Retrouvez-nous</span>
            <nav className="flex flex-col gap-3 mt-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Dotted divider — identical to portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="flex-1 max-w-xs border-t-2 border-dotted border-border" />
          <StarIcon className="w-4 h-4 text-primary" />
          <div className="flex-1 max-w-xs border-t-2 border-dotted border-border" />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} VavaStudio. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
