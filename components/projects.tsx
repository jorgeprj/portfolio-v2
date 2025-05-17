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
    title: "futCo.",
    description: "Um micro-saas para colecionadores de camisas de futebol.",
    image: "/futco.png?height=200&width=400",
    tags: ["ReactJS", "Firebase", "Stripe", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "#",
    fullDescription: `A FutCo. é uma plataforma digital onde apaixonados por futebol podem criar seus perfis e catalogar suas camisas de forma prática, bonita e organizada.
    A proposta é unir simplicidade, comunidade e paixão pelo futebol, oferecendo um espaço onde cada camisa tem sua história — e cada colecionador, sua identidade.
    `,
    challenges:
      "O maior desafio foi desenvolver um micro-saas do zero: do design à implementação, passando pela integração com o Stripe para pagamentos e Firebase para autenticação e armazenamento de dados.",
    solutions:
      "Estamos implementando uma arquitetura escalável, utilizando Firebase para autenticação e armazenamento de dados, e Stripe para pagamentos. O design é responsivo e intuitivo, garantindo uma experiência fluida em dispositivos móveis e desktops.",
    screenshots: [],
  },
  {
    id: 2,
    title: "hattrick",
    description: "Micro-saas para gerenciamento de modo carreira no jogo EA FC 24.",
    image: "/hattrick.png?height=200&width=400",
    tags: ["ReactJS", "Node.js", "TailwindCSS", "JSON Server", "JavaScript"],
    githubUrl: "https://github.com/jorgeprj/hattrick-react",
    liveUrl: "#",
    fullDescription: `Hattrick é um site baseado em **React** projetado para aprimorar a experiência do modo carreira no EA FC 24. O site utiliza um banco de dados simulado por meio do **JSON Server**,.
    
    Funcionalidades principais:
    - Analise de desempenho do jogador com um perfil completo
    - Analise do time com um perfil detalhado
    - Busca de atletas pelo banco de dados`,
    challenges:
      "Implementar um sistema online onde o jogador de EA FC 24, pudesse inserir seu modo carreira, e ter a experiencia real de qualquer clube profissional no mundo. Aprimorando as estatisticas e dados, misturando dados reais e criados pelo jogo. ",
    solutions:
      "Utilizei o ReactJS para criar uma interface de usuário interativa e responsiva, permitindo que os usuários visualizassem e interagissem com os dados do jogo. O JSON Server foi utilizado para simular um banco de dados, permitindo que os usuários armazenassem e recuperassem informações sobre seus jogadores e times. A integração entre o React e o JSON Server foi feita através de chamadas API RESTful, garantindo uma comunicação eficiente entre o front-end e o back-end.",
    screenshots: [
      "/hattrick2.png?height=300&width=500",
      "/hattrick1.png?height=300&width=500",
      "/hattrick3.png?height=300&width=500",
      "/hattrick5.png?height=300&width=500",
      "/hattrick6.png?height=300&width=500",
    ],
  },
  {
    id: 3,
    title: "Kings League REST API",
    description: "API criada com os dados retirados a partir do site oficial da Kings League.",
    image: "/kings.jpg?height=200&width=400",
    tags: ["Python", "Web Scraping", "Flask", "SQLite", "REST API", "OnRender"],
    githubUrl: "https://github.com/jorgeprj/kings-league-api",
    liveUrl: "https://kings-league-api.onrender.com/",
    fullDescription: "A *Kings World Cup 2024* API é uma API RESTful desenvolvida em *Python* com o objetivo de promover a Kings League por meio da disponibilização de dados dos jogadores da competição. O projeto é fan-made e utiliza web scraping para extrair informações diretamente do site oficial da liga. Com endpoints organizados e bem documentados, a API permite consultar dados detalhados dos jogadores, servindo como ferramenta educativa e demonstrativa de desenvolvimento back-end.",
    challenges:
      `Durante o desenvolvimento, os principais desafios envolveram a extração confiável de dados via **web scraping**, o tratamento de possíveis inconsistências nas informações obtidas, e a proteção da API contra uso indevido. Além disso, foi necessário lidar com limitações de performance e escalabilidade em ambiente gratuito, garantindo estabilidade e respostas rápidas durante ouso.`,
    solutions:
      `Para superar esses desafios, foram adotadas boas práticas de design REST, tratamento robusto de dados coletados, e a desativação de endpoints sensíveis **(POST, PATCH, DELETE)** por motivos de segurança. A hospedagem foi realizada na plataforma Render, garantindo fácil acesso público, enquanto a documentação clara torna a API acessível para desenvolvedores interessados em explorar o projeto.`,
    screenshots: [
      "/kings1.png?height=300&width=500"
    ],
  },
]

export function Projects() {
  // Função para verificar se um link é válido
  const isValidLink = (url: string) => {
    return url && url !== "#" && url !== ""
  }

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
                    {isValidLink(project.githubUrl) && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={isValidLink(project.liveUrl) ? "flex-1" : "w-full"}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {isValidLink(project.liveUrl) && (
                      <Button size="sm" asChild className={isValidLink(project.githubUrl) ? "flex-1" : "w-full"}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
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