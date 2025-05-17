"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/components/projects"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, ZoomIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CVDownloadButton } from "@/components/cv-download-button"
import { ImageModal } from "@/components/image-modal"
import { formatMarkdown } from "@/utils/markdown-formatter"

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

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

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setIsImageModalOpen(true)
  }

  // Função para verificar se um link é válido
  const isValidLink = (url: string) => {
    return url && url !== "#" && url !== ""
  }

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
          <div
            className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openImageModal(project.image)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <div className="bg-background/80 p-2 rounded-full">
                <ZoomIn className="h-6 w-6 text-primary" />
              </div>
            </div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
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
              {isValidLink(project.githubUrl) && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {isValidLink(project.liveUrl) && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                  <div
                    className="prose dark:prose-invert max-w-none prose-headings:my-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(project.fullDescription) }}
                  />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Desafios</h2>
                    <div
                      className="prose dark:prose-invert max-w-none prose-headings:my-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(project.challenges) }}
                    />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Soluções</h2>
                    <div
                      className="prose dark:prose-invert max-w-none prose-headings:my-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1"
                      dangerouslySetInnerHTML={{ __html: formatMarkdown(project.solutions) }}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot: string, index: number) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openImageModal(screenshot)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                        <div className="bg-background/80 p-2 rounded-full">
                          <ZoomIn className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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

                    {(isValidLink(project.githubUrl) || isValidLink(project.liveUrl)) && (
                      <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Links</h2>
                        <div className="space-y-2">
                          {isValidLink(project.githubUrl) && (
                            <Button variant="outline" size="sm" asChild className="w-full justify-start">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Repositório no GitHub
                              </a>
                            </Button>
                          )}
                          {isValidLink(project.liveUrl) && (
                            <Button variant="outline" size="sm" asChild className="w-full justify-start">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo ao vivo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
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

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={selectedImage}
        alt="Screenshot do projeto"
      />
    </div>
  )
}
