import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoBanner } from "@/components/logo-banner"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LogoBanner />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
