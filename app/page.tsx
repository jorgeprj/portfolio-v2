import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfolio</h1>
        <ThemeToggle />
      </header>
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="container mx-auto py-8 px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} - Criado com Next.js e Tailwind CSS</p>
      </footer>
    </div>
  )
}
