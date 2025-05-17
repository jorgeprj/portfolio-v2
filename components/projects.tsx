"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const projects = [
  {
    id: 1,
    title: "Projeto Minimalista",
    description: "Um site minimalista com design clean e funcionalidades modernas.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    fullDescription: `Este projeto foi desenvolvido com foco em minimalismo e usabilidade. 
    Utilizando Next.js e Tailwind CSS, criei uma interface limpa e intuitiva que prioriza o conteúdo.
    
    O design segue princípios de espaço em branco estratégico e tipografia cuidadosamente selecionada para garantir legibilidade e hierarquia visual.
    
    Funcionalidades incluem:
    - Tema claro e escuro
    - Layout responsivo
    - Animações sutis
    - Otimização de performance`,
    challenges:
      "O maior desafio foi equilibrar minimalismo com funcionalidade, garantindo que a interface fosse simples mas completa.",
    solutions:
      "Implementei um sistema de design baseado em componentes reutilizáveis e adotei uma abordagem de 'mobile-first' para garantir uma experiência consistente em todos os dispositivos.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  {
    id: 2,
    title: "App de Produtividade",
    description: "Aplicativo para gerenciamento de tarefas com interface intuitiva.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    fullDescription: `Este aplicativo de produtividade foi desenvolvido para ajudar usuários a gerenciar suas tarefas diárias de forma eficiente.
    
    Construído com React no frontend e Node.js com MongoDB no backend, o aplicativo oferece uma experiência fluida e responsiva.
    
    Funcionalidades principais:
    - Criação e gerenciamento de tarefas
    - Categorização por projetos
    - Lembretes e notificações
    - Estatísticas de produtividade
    - Sincronização entre dispositivos`,
    challenges:
      "Implementar um sistema de sincronização em tempo real que funcionasse mesmo offline foi um desafio significativo.",
    solutions:
      "Utilizei uma combinação de service workers e uma arquitetura de sincronização otimista para garantir que os usuários pudessem continuar trabalhando mesmo sem conexão.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
  {
    id: 3,
    title: "E-commerce Moderno",
    description: "Plataforma de e-commerce com design responsivo e experiência de usuário otimizada.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Stripe", "Supabase"],
    githubUrl: "#",
    liveUrl: "#",
    fullDescription: `Esta plataforma de e-commerce foi desenvolvida com foco em performance e experiência do usuário.
    
    Utilizando Next.js para renderização híbrida, Stripe para processamento de pagamentos e Supabase para backend, criei uma solução completa e escalável.
    
    Características principais:
    - Carregamento rápido de páginas
    - Checkout simplificado
    - Sistema de busca avançado
    - Gerenciamento de estoque
    - Análise de dados de vendas`,
    challenges:
      "Otimizar a performance mantendo uma experiência rica em recursos foi o principal desafio deste projeto.",
    solutions:
      "Implementei estratégias de carregamento progressivo, SSR/ISR para páginas críticas e otimização de imagens para garantir tempos de carregamento rápidos mesmo em conexões lentas.",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={`/projects/${project.id}`}>
                          <Info className="h-4 w-4 mr-1" />
                          Detalhes
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.id}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <div className="flex gap-3 w-full">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
