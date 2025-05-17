"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, BookOpen, FileType, Newspaper, BookMarked } from "lucide-react"

// Tipo para as publicações
export type Publication = {
  id: number
  title: string
  description: string
  type: "article" | "book" | "ebook" | "paper" | "research"
  date: string
  downloadUrl?: string
  viewUrl?: string
}

// Dados de exemplo para publicações
export const publications: Publication[] = [
  {
    id: 1,
    title: "Aplicativo UFSCar Planner",
    description: "Um artigo introdutório sobre o que foi feito no aplicativo UFSCar Planner.",
    type: "article",
    date: "Dezembro 2023",
    downloadUrl: "/artigo.pdf",
    viewUrl: "https://periodicos.ufsm.br/coming/article/view/85398",
  }
]

export function Publications() {
  const getTypeIcon = (type: Publication["type"]) => {
    switch (type) {
      case "article":
        return <Newspaper className="h-5 w-5" />
      case "book":
        return <BookMarked className="h-5 w-5" />
      case "ebook":
        return <BookOpen className="h-5 w-5" />
      case "paper":
        return <FileText className="h-5 w-5" />
      case "research":
        return <FileType className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeLabel = (type: Publication["type"]) => {
    switch (type) {
      case "article":
        return "Artigo Científico"
      case "book":
        return "Livro"
      case "ebook":
        return "E-book"
      case "paper":
        return "Paper"
      case "research":
        return "Pesquisa"
      default:
        return type
    }
  }

  return (
    <section id="publications" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Artigos Publicados</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-3">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    {/* Ícone à esquerda - removido o fundo */}
                    <div className="flex-shrink-0 p-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {getTypeIcon(publication.type)}
                      </div>
                    </div>

                    {/* Conteúdo central - reorganizado */}
                    <div className="flex-grow p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <h3 className="text-base font-bold">{publication.title}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="font-normal text-xs">
                            {getTypeLabel(publication.type)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{publication.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{publication.description}</p>
                    </div>

                    {/* Botões à direita */}
                    <div className="flex-shrink-0 p-4 flex gap-2">
                      {publication.downloadUrl && (
                        <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                          <a href={publication.downloadUrl} download aria-label={`Baixar ${publication.title}`}>
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {publication.viewUrl && (
                        <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                          <a
                            href={publication.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visualizar ${publication.title}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
