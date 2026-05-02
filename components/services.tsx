"use client"

import { motion } from "framer-motion"
import { Compass, PenTool, Monitor, FileText, Camera } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Direction Artistique",
    description: "Identité visuelle & univers de marque cohérent",
    accent: "primary",
  },
  {
    icon: PenTool,
    title: "Créations de Contenus",
    description: "Design graphique & stratégie réseaux sociaux",
    accent: "accent",
  },
  {
    icon: Monitor,
    title: "Création de Site Web",
    description: "Site sur-mesure & UI/UX",
    accent: "primary",
  },
  {
    icon: FileText,
    title: "Rédaction",
    description: "Storytelling authentique & newsletter",
    accent: "accent",
  },
  {
    icon: Camera,
    title: "Photo et Vidéo",
    description: "Shooting produit & montage vidéo",
    accent: "primary",
  },
]

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 text-primary/20">
        <StarIcon className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-10 text-accent/20">
        <StarIcon className="w-6 h-6" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <StarIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-widest uppercase">Mes Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground">
              <span className="font-sans font-bold">Ce que je</span>
              <br />
              <span className="font-serif italic text-primary">peux faire</span>{" "}
              <span className="font-sans font-bold">pour vous</span>
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Des solutions créatives adaptées à vos besoins, de la conception à la réalisation.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isAccent = service.accent === "accent"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
                  {/* Number */}
                  <span className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 font-sans">
                    0{index + 1}
                  </span>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    isAccent ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <Icon size={28} className={isAccent ? "text-accent" : "text-primary"} />
                  </div>
                  
                  <h3 className="font-sans text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="bg-primary rounded-3xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 text-white/20">
                <StarIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="font-serif italic text-2xl text-white mb-3">
                  Un projet en tête ?
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Discutons de vos idées et donnons vie à votre vision.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors w-fit"
              >
                Me contacter
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
