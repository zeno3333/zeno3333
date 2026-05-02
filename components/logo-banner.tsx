"use client"

import Image from "next/image"

const logos = [
  { src: "/logo-2.svg", name: "Logo 2" },
  { src: "/logo-3.svg", name: "Logo 3" },
  { src: "/logo-4.svg", name: "Logo 4" },
  { src: "/logo-5.svg", name: "Logo 5" },
  { src: "/logo-6.svg", name: "Logo 6" },
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
      
      {/* Logo banner with infinite scroll using CSS animation */}
      <div className="bg-primary py-8 overflow-hidden">
        <div className="relative flex">
          {/* First set of logos */}
          <div className="flex items-center animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 flex items-center justify-center px-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className="h-14 w-auto object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 flex items-center justify-center px-8"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className="h-14 w-auto object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
