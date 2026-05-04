"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

function TikTokIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
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
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4 text-2xl font-bold">
              <span className="font-sans text-accent">Vava</span>
              <span className="font-serif italic text-primary">Studio</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Direction artistique & création de contenus digitaux pour des marques qui veulent se démarquer.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-sans font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-sans font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Retrouvez-nous
            </h4>
            <nav className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 mb-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
