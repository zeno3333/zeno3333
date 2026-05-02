"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Instagram, Linkedin } from "lucide-react"

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
    </svg>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-primary/20">
        <StarIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-20 text-accent/20">
        <StarIcon className="w-6 h-6" />
      </div>
      
      {/* Large decorative circle */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent rounded-full opacity-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <StarIcon className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-widest uppercase">Contact</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="font-sans font-bold">Un projet</span>
              <br />
              <span className="font-serif italic text-primary">en tête ?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
              Parlons-en ensemble et donnons vie à vos idées créatives.
            </p>

            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:hello@studio.fr"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-sans font-semibold text-foreground">hello@studio.fr</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-sans font-semibold text-foreground">Paris, France</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-10">
              <span className="text-sm text-muted-foreground">Suivez-moi</span>
              <div className="h-px flex-1 max-w-[100px] bg-border" />
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Votre nom
                  </label>
                  <div className={`relative rounded-2xl border-2 transition-colors duration-200 ${focused === 'name' ? 'border-primary bg-card' : 'border-border bg-secondary/30'}`}>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none rounded-2xl"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className={`relative rounded-2xl border-2 transition-colors duration-200 ${focused === 'email' ? 'border-primary bg-card' : 'border-border bg-secondary/30'}`}>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none rounded-2xl"
                      placeholder="jean@exemple.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Votre projet
                  </label>
                  <div className={`relative rounded-2xl border-2 transition-colors duration-200 ${focused === 'message' ? 'border-primary bg-card' : 'border-border bg-secondary/30'}`}>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none resize-none rounded-2xl"
                      placeholder="Décrivez votre projet en quelques mots..."
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Envoyer le message
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
