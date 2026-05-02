"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

// Custom floating icons with SVG images - positioned above computer and next to face
const floatingIcons = [
  { src: "/icon-star.svg", initialX: 75, initialY: 20, size: 80 }, // Above computer area (top right)
  { src: "/icon-badge.svg", initialX: 12, initialY: 40, size: 90 }, // Next to face (left side)
]

function FloatingIcon({ 
  src, 
  initialX, 
  initialY, 
  size,
  mouseX,
  mouseY,
  delay
}: { 
  src: string
  initialX: number
  initialY: number
  size: number
  mouseX: any
  mouseY: any
  delay: number
}) {
  // Increased movement range for more noticeable parallax effect
  const x = useTransform(mouseX, [0, 1], [initialX - 8, initialX + 8])
  const y = useTransform(mouseY, [0, 1], [initialY - 8, initialY + 8])
  
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })
  
  // Rotation based on mouse position for extra dynamism
  const rotate = useTransform(mouseX, [0, 1], [-5, 5])
  const springRotate = useSpring(rotate, { stiffness: 50, damping: 20 })

  return (
    <motion.div
      className="absolute z-20 cursor-pointer"
      style={{ 
        left: useTransform(springX, (v) => `${v}%`),
        top: useTransform(springY, (v) => `${v}%`),
        rotate: springRotate,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: delay,
        type: "spring",
        stiffness: 180
      }}
      whileHover={{ 
        scale: 1.1,
      }}
    >
      <Image
        src={src}
        alt="Decorative icon"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </motion.div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.jpg"
          alt="Creative workspace"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Floating custom icons - hidden on mobile */}
      <div className="hidden md:block">
        {mounted && floatingIcons.map((icon, index) => (
          <FloatingIcon
            key={index}
            {...icon}
            mouseX={mouseX}
            mouseY={mouseY}
            delay={0.6 + index * 0.2}
          />
        ))}
      </div>

      {/* Centered content - liquid glass card */}
      <div className="relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] px-12 py-10 sm:px-24 sm:py-12 text-center max-w-3xl mx-auto
            bg-white/25 backdrop-blur-2xl
            border border-white/50
            shadow-[0_8px_60px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.3)]"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                bg-white/40 backdrop-blur-lg border border-white/50
                shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-foreground/80 font-medium font-sans tracking-wide uppercase">Disponible</span>
            </motion.div>
            
            {/* Main title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-foreground mb-5"
            >
              <span className="font-sans font-bold">Je crée des </span>
              <span className="font-serif italic text-primary">expériences</span>
              <br />
              <span className="font-sans font-bold">visuelles </span>
              <span className="font-serif italic text-accent">uniques</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-foreground/70 text-sm sm:text-base mb-8 font-sans leading-relaxed"
            >
              Direction artistique, création de contenus, sites web, photos et rédaction.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-3 mb-8"
            >
              <Link
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <span className="font-sans text-sm tracking-wide">Voir mes projets</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-full transition-all duration-300
                  bg-white/40 backdrop-blur-lg border border-white/50 text-foreground/80
                  shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]
                  hover:bg-white/60 hover:text-foreground"
              >
                <span className="font-sans text-sm tracking-wide">Me contacter</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex justify-center gap-8 pt-6 border-t border-white/30"
            >
              <div className="text-center">
                <span className="block text-xl font-bold text-primary font-sans">8+</span>
                <span className="text-xs text-foreground/60 font-sans uppercase tracking-wider">Ans exp.</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-accent font-sans">100%</span>
                <span className="text-xs text-foreground/60 font-sans uppercase tracking-wider">Satisfaction</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-bold text-primary font-sans">50+</span>
                <span className="text-xs text-foreground/60 font-sans uppercase tracking-wider">Projets</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
