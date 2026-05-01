"use client"

import { motion } from "framer-motion"

// SVG Logos in white
const SamsungLogo = () => (
  <svg viewBox="0 0 200 30" className="h-6 w-auto" fill="white">
    <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" letterSpacing="2">SAMSUNG</text>
  </svg>
)

const PicardLogo = () => (
  <svg viewBox="0 0 80 90" className="h-12 w-auto" fill="white">
    {/* Snowflake */}
    <g transform="translate(40, 35)">
      <path d="M0,-30 L0,30 M-26,-15 L26,15 M-26,15 L26,-15" stroke="white" strokeWidth="3" fill="none"/>
      <path d="M0,-25 L-5,-20 M0,-25 L5,-20" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M0,25 L-5,20 M0,25 L5,20" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M-22,-12 L-17,-17 M-22,-12 L-22,-5" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M22,12 L17,17 M22,12 L22,5" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M-22,12 L-17,17 M-22,12 L-22,5" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M22,-12 L17,-17 M22,-12 L22,-5" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="0" cy="0" r="8" fill="white"/>
    </g>
    <text x="40" y="82" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="400">picard</text>
  </svg>
)

const CupraLogo = () => (
  <svg viewBox="0 0 100 80" className="h-10 w-auto" fill="white">
    {/* Tribal symbol */}
    <path d="M50,5 L30,35 L10,35 L30,20 L50,45 L70,20 L90,35 L70,35 L50,5 Z" fill="white"/>
    <path d="M50,30 L40,50 L50,42 L60,50 L50,30 Z" fill="white"/>
    <text x="50" y="72" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" letterSpacing="4">CUPRA</text>
  </svg>
)

const CassegrainLogo = () => (
  <svg viewBox="0 0 150 50" className="h-8 w-auto" fill="white">
    <ellipse cx="75" cy="25" rx="70" ry="20" fill="none" stroke="white" strokeWidth="1.5"/>
    <text x="75" y="32" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontStyle="italic">Cassegrain</text>
  </svg>
)

const NespressoLogo = () => (
  <svg viewBox="0 0 180 35" className="h-7 w-auto" fill="white">
    <path d="M5,30 Q0,15 15,10 Q5,20 15,30" stroke="white" strokeWidth="2" fill="none"/>
    <text x="18" y="28" fontFamily="Georgia, serif" fontSize="24" fontWeight="400" letterSpacing="1">
      <tspan fontWeight="600">N</tspan>ESPRESSO
    </text>
    <circle cx="168" cy="28" r="2" fill="white"/>
  </svg>
)

const SeatLogo = () => (
  <svg viewBox="0 0 70 80" className="h-10 w-auto" fill="white">
    {/* S Symbol */}
    <rect x="10" y="5" width="50" height="45" rx="6" fill="none" stroke="white" strokeWidth="2"/>
    <path d="M15,20 L55,20 M15,35 L55,35" stroke="white" strokeWidth="5"/>
    <path d="M20,20 L20,35 Q20,40 25,40 L45,40 Q50,40 50,35 L50,20" fill="none" stroke="white" strokeWidth="3"/>
    <text x="35" y="72" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" letterSpacing="6">SEAT</text>
  </svg>
)

const LclLogo = () => (
  <svg viewBox="0 0 100 60" className="h-10 w-auto" fill="white">
    <path d="M10,25 Q50,50 90,25" fill="none" stroke="white" strokeWidth="1.5"/>
    <text x="50" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold">LCL</text>
    <text x="50" y="52" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" letterSpacing="1">BANQUE ET ASSURANCE</text>
  </svg>
)

const logos = [
  { component: SamsungLogo, name: "Samsung" },
  { component: PicardLogo, name: "Picard" },
  { component: CupraLogo, name: "Cupra" },
  { component: CassegrainLogo, name: "Cassegrain" },
  { component: NespressoLogo, name: "Nespresso" },
  { component: SeatLogo, name: "Seat" },
  { component: LclLogo, name: "LCL" },
]

export function LogoBanner() {
  return (
    <section className="overflow-hidden">
      {/* Intro text */}
      <div className="bg-background py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            <span className="font-sans font-bold text-foreground">Ils m&apos;ont fait </span>
            <span className="font-serif italic text-primary">confiance !</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Diplômée d&apos;un <span className="font-semibold text-accent">Master 2 en direction artistique et conception-rédaction</span> (Le Quatre by ISCOM), 
            complétée par des expériences en agences parisiennes (<span className="text-gray-500 font-medium">BBDO</span>, <span className="text-gray-500 font-medium">McCann</span>) et en freelance.
          </p>
        </div>
      </div>
      
      {/* Logo banner */}
      <div className="bg-primary py-8">
        <div className="flex">
        <motion.div
          className="flex items-center gap-16 px-8"
          animate={{
            x: [0, -1400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity"
            >
              <logo.component />
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}
