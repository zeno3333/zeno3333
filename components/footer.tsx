"use client"

import Link from "next/link"
import { motion } from "framer-motion"

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative py-16 lg:py-24 rounded-t-[3rem] overflow-hidden">
      
      {/* Multiple liquid glass layers */}
      <div className="absolute inset-0 bg-accent/40 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-accent/20 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/50 via-transparent to-white/20" />
      
      {/* Glass refraction highlights */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Inner glow effects */}
      <div className="absolute inset-0 shadow-[inset_0_4px_30px_rgba(255,255,255,0.3),inset_0_-4px_30px_rgba(196,30,124,0.2)]" />
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[inset_0_4px_20px_rgba(255,255,255,0.4)]" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-accent/30 backdrop-blur-2xl border border-white/20 shadow-[inset_0_4px_30px_rgba(255,255,255,0.2)]" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/15 backdrop-blur-lg border border-white/20" />
      
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-white/40">
        <StarIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-20 text-white/25">
        <StarIcon className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 left-10 text-primary/40">
        <StarIcon className="w-4 h-4" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">
                <span className="font-sans text-white drop-shadow-lg">Vava</span>
                <span className="font-serif italic text-primary drop-shadow-lg">Studio</span>
              </span>
            </div>
            <p className="text-white/80 max-w-sm leading-relaxed text-lg drop-shadow-sm">
              Direction artistique & création de contenus digitaux pour des marques qui veulent se démarquer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-sans font-semibold text-white mb-4 drop-shadow-sm">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {["Services", "Portfolio", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors drop-shadow-sm"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white mb-4 drop-shadow-sm">Social</h4>
              <nav className="flex flex-col gap-3">
                {["Instagram", "LinkedIn", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/70 hover:text-white transition-colors drop-shadow-sm"
                  >
                    {social}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Glass divider */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="absolute inset-0 h-4 -top-2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-1.5">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-lg border border-white/40 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.4)]">
              <StarIcon className="w-3 h-3 text-primary" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/60 drop-shadow-sm">
            © {new Date().getFullYear()} VavaStudio. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors drop-shadow-sm">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors drop-shadow-sm">
              Politique de confidentialité
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
