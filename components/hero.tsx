"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Instagram } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

// TikTok icon component (not available in lucide-react)
function TikTokIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

// Floating icons configuration - Like, Instagram, TikTok
const floatingIcons = [
  { Icon: Heart, initialX: 15, initialY: 35, size: 28 },
  { Icon: Instagram, initialX: 85, initialY: 25, size: 26 },
  { Icon: TikTokIcon, initialX: 88, initialY: 65, size: 26 },
]

function FloatingIcon({ 
  Icon, 
  initialX, 
  initialY, 
  size,
  mouseX,
  mouseY,
  delay
}: { 
  Icon: React.ElementType
  initialX: number
  initialY: number
  size: number
  mouseX: any
  mouseY: any
  delay: number
}) {
  // Movement range for parallax effect
  const x = useTransform(mouseX, [0, 1], [initialX - 6, initialX + 6])
  const y = useTransform(mouseY, [0, 1], [initialY - 6, initialY + 6])
  
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })
  
  // Rotation based on mouse position
  const rotate = useTransform(mouseX, [0, 1], [-8, 8])
  const springRotate = useSpring(rotate, { stiffness: 50, damping: 20 })

  return (
    <motion.div
      className="absolute z-20 cursor-pointer rounded-2xl p-4
        bg-white/30 backdrop-blur-xl border border-white/50
        shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)]"
      style={{ 
        left: useTransform(springX, (v) => `${v}%`),
        top: useTransform(springY, (v) => `${v}%`),
        rotate: springRotate,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: delay,
        type: "spring",
        stiffness: 180
      }}
      whileHover={{ 
        scale: 1.15,
        boxShadow: "0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <Icon size={size} className="text-foreground/80" />
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

      {/* Floating social icons - hidden on mobile */}
      <div className="hidden md:block">
        {mounted && floatingIcons.map((icon, index) => (
          <FloatingIcon
            key={index}
            Icon={icon.Icon}
            initialX={icon.initialX}
            initialY={icon.initialY}
            size={icon.size}
            mouseX={mouseX}
            mouseY={mouseY}
            delay={0.6 + index * 0.15}
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
