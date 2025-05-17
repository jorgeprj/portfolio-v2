"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const navigateToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const navigateToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    // Cria um link para download e simula o clique
    const link = document.createElement("a")
    link.href = "/curriculo.pdf"
    link.download = "curriculo.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 md:py-28 flex flex-col items-center justify-center min-h-[90vh] text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full overflow-hidden mb-8 border-4 border-primary/20"
      >
        <Image
          src="/profile.png?height=150&width=150"
          alt="Foto de perfil"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Olá, sou o <span className="text-primary">Jorge Pires</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
      >
        Analista de dados e desenvolvedor web
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <Button size="lg" onClick={navigateToProjects}>
          Meus Projetos
        </Button>
        <Button size="lg" variant="outline" onClick={navigateToContact}>
          Contato
        </Button>
        <Button size="lg" variant="secondary" onClick={downloadCV}>
          <FileText className="mr-2 h-4 w-4" />
          Baixar Currículo
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce bg-background/80 hover:bg-background/90 shadow-sm"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Rolar para baixo</span>
        </Button>
      </motion.div>
    </section>
  )
}
