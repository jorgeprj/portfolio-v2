"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { experiences, type ExperienceItem } from "@/components/experience"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CVDownloadButton } from "@/components/cv-download-button"
import { formatMarkdown } from "@/utils/markdown-formatter"

export default function ExperienceDetails() {
  const params = useParams()
  const router = useRouter()
  const [experience, setExperience] = useState<ExperienceItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const experienceId = Number.parseInt(params.id as string)
      const foundExperience = experiences.find((e) => e.id === experienceId)

      if (foundExperience) {
        setExperience(foundExperience)
      } else {
        router.push("/")
      }

      setLoading(false)
    }
  }, [params.id, router])

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "education":
        return <GraduationCap className="h-6 w-6" />
      case "work":
        return <Briefcase className="h-6 w-6" />
      case "award":
        return <Award className="h-6 w-6" />
      default:
        return <GraduationCap className="h-6 w-6" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Experiência não encontrada</h1>
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
            <Link href="/#experience">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para experiências
            </Link>
          </Button>

          <CVDownloadButton size="sm" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
              {getIcon(experience.icon)}
            </div>
            <div>
              <span className="inline-block px-3 py-1 mb-1 text-sm rounded-full bg-primary/10 text-primary">
                {experience.date}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold">{experience.title}</h1>
              <p className="text-xl text-muted-foreground">{experience.organization}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Descrição</h2>
                  <div
                    className="prose dark:prose-invert max-w-none prose-headings:my-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(experience.fullDescription || "") }}
                  />
                </CardContent>
              </Card>

              {experience.achievements && experience.achievements.length > 0 && (
                <Card className="mt-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Conquistas</h2>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="relative">
              <div className="sticky top-8 space-y-6">
                {experience.skills && experience.skills.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Habilidades Desenvolvidas</h2>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {experience.links && experience.links.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Links Relacionados</h2>
                      <div className="space-y-2">
                        {experience.links.map((link, index) => (
                          <Button key={index} variant="outline" size="sm" asChild className="w-full justify-start">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {link.title}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Currículo Completo</h2>
                    <p className="text-muted-foreground mb-4">
                      Baixe meu currículo completo para mais informações sobre minha formação e experiência
                      profissional.
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