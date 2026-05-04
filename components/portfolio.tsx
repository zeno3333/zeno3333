"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const categories = ["Tous", "Social Media", "Direction Artistique", "Web", "Galerie", "Rédaction", "Iconographie"]

const projects = [
  {
    title: "Grandes marques",
    category: "Social Media",
    description: "Nespresso, Seat, Samsung, Cassegrain, LCL, Ameska Paris",
    tag: "CRÉATION DE CONTENUS",
    gradient: "from-primary to-primary/60",
  },
  {
    title: "Idéation",
    category: "Direction Artistique",
    description: "Concepts publicitaires, Rebranding",
    tag: "DIRECTION ARTISTIQUE",
    gradient: "from-accent to-accent/60",
  },
  {
    title: "Site Vitrine",
    category: "Web",
    description: "Templates, SEO, Sites sur-mesure",
    tag: "WEB",
    gradient: "from-primary/80 to-accent/40",
  },
  {
    title: "Photos",
    category: "Galerie",
    description: "Shooting produit, lifestyle",
    tag: "GALERIE",
    gradient: "from-accent/80 to-primary/40",
  },
  {
    title: "Copywriting",
    category: "Rédaction",
    description: "Newsletter, blog, accroches",
    tag: "RÉDACTION",
    gradient: "from-primary to-primary/35",
  },
  {
    title: "Iconographie",
    category: "Iconographie",
    description: "Illustrations, pictogrammes",
    tag: "GRAPHISME",
    gradient: "from-accent to-primary",
  },
]

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <StarIcon className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium tracking-widest uppercase">Portfolio</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-foreground">
                <span className="font-serif italic text-primary">Projets</span>
                <br />
                <span className="font-sans font-bold">récents</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href="#" className="group block">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="self-end">
                        <motion.div
                          initial={false}
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        >
                          <ArrowUpRight size={20} className="text-foreground" />
                        </motion.div>
                      </div>

                      <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-5">
                        <span className="text-xs text-primary font-bold tracking-wider uppercase">
                          {project.tag}
                        </span>
                        <h3 className="font-sans text-lg font-semibold text-foreground mt-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dotted line decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-16"
        >
          <div className="flex-1 max-w-xs border-t-2 border-dotted border-border" />
          <StarIcon className="w-4 h-4 text-primary" />
          <div className="flex-1 max-w-xs border-t-2 border-dotted border-border" />
        </motion.div>
      </div>
    </section>
  )
}
