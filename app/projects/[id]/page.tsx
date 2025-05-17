"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/components/projects"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CVDownloadButton } from "@/components/cv-download-button"

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const projectId = Number.parseInt(params.id as string)
      const foundProject = projects.find((p) => p.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/")
      }

      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <Button variant="ghost" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para projetos
            </Link>
          </Button>

          <CVDownloadButton size="sm" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    {project.fullDescription.split("\n\n").map((paragraph: string, i: number) => (
                      <p key={i} className="mb-4 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Desafios</h2>
                    <p className="text-lg">{project.challenges}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Soluções</h2>
                    <p className="text-lg">{project.solutions}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot: string, index: number) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-8 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Tecnologias</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-sm py-1 px-3">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h2 className="text-xl font-bold mb-4">Links</h2>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" asChild className="w-full justify-start">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Repositório no GitHub
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="w-full justify-start">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo ao vivo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Currículo Completo</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">
                      Interessado no meu trabalho? Baixe meu currículo completo para conhecer mais sobre minhas
                      habilidades e experiências.
                    </p>
                    <CVDownloadButton className="w-full" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
