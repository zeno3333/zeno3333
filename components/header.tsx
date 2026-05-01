"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg">
          <div className="flex items-center justify-between h-16 px-6">
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="font-sans text-accent">Vava</span><span className="font-serif italic text-primary">Studio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="ml-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                Collaborer
              </Link>
            </nav>

            <button
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg p-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="mt-2 px-4 py-3 bg-primary text-white font-medium text-center rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Collaborer
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
