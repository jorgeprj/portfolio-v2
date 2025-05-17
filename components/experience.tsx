"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export type ExperienceItem = {
  id: number
  date: string
  title: string
  organization: string
  description: string
  icon: "education" | "work" | "award"
  fullDescription?: string
  skills?: string[]
  achievements?: string[]
  links?: { title: string; url: string }[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    date: "Março 2020",
    title: "Início da Graduação",
    organization: "UFSCar",
    description: "Início do curso de Ciência da Computação na Universidade Federal de São Carlos.",
    icon: "education",
    fullDescription: `Iniciei minha jornada acadêmica no curso de Ciência da Computação na Universidade Federal de São Carlos (UFSCar) em março de 2020.
    
    Durante o curso, tive a oportunidade de estudar diversas áreas da computação, desde fundamentos teóricos até aplicações práticas. As disciplinas abrangeram algoritmos, estruturas de dados, programação orientada a objetos, banco de dados, redes de computadores, inteligência artificial, entre outras.
    
    Participei ativamente de projetos acadêmicos e atividades extracurriculares que complementaram minha formação.`,
    skills: [
      "Algoritmos e Estruturas de Dados",
      "Programação Orientada a Objetos",
      "Banco de Dados",
      "Desenvolvimento Web",
      "Inteligência Artificial",
    ],
    achievements: [
      "Participação em maratonas de programação",
      "Desenvolvimento de projetos acadêmicos relevantes",
      "Colaboração em grupos de estudo",
    ],
    links: [
      { title: "UFSCar", url: "https://www.ufscar.br" },
      { title: "Departamento de Computação", url: "https://www.dc.ufscar.br" },
    ],
  },
  {
    id: 2,
    date: "Julho 2023",
    title: "Bolsista PET-BCC",
    organization: "UFSCar",
    description:
      "Participação no Programa de Educação Tutorial do Bacharelado em Ciência da Computação (PET-BCC), atuando como bolsista em projetos de extensão e tutoria.",
    icon: "award",
    fullDescription: `Em julho de 2023, ingressei no Programa de Educação Tutorial do Bacharelado em Ciência da Computação (PET-BCC) da UFSCar como bolsista.
    
    O PET-BCC é um programa que visa complementar a formação acadêmica dos alunos através de atividades de ensino, pesquisa e extensão. Como bolsista, participei de diversos projetos e iniciativas:
    
    - Desenvolvimento de projetos de extensão voltados para a comunidade
    - Organização de eventos acadêmicos e workshops
    - Tutoria para alunos ingressantes
    - Participação em grupos de estudo e pesquisa
    
    Esta experiência foi fundamental para o desenvolvimento de habilidades técnicas e interpessoais, além de proporcionar uma visão mais ampla sobre a aplicação da computação em diferentes contextos.`,
    skills: ["Gestão de Projetos", "Trabalho em Equipe", "Comunicação", "Ensino e Tutoria", "Organização de Eventos"],
    achievements: [
      "Desenvolvimento de projetos de impacto social",
      "Organização de eventos com grande participação da comunidade acadêmica",
      "Publicação de artigos e relatórios técnicos",
    ],
    links: [{ title: "PET-BCC UFSCar", url: "https://petbcc.ufscar.br" }],
  },
  {
    id: 3,
    date: "Agosto 2024",
    title: "Estágio em Dados",
    organization: "Ambar Tech",
    description:
      "Início do estágio na área de Dados, aplicando conhecimentos em análise e processamento de informações.",
    icon: "work",
    fullDescription: `Em agosto de 2024, iniciei meu estágio na Ambar Tech, atuando na área de Dados. Esta experiência me permitiu aplicar os conhecimentos teóricos adquiridos durante a graduação em um ambiente profissional real.
    
    Como estagiário de Dados, minhas principais responsabilidades incluíram:
    
    - Coleta e processamento de dados de diversas fontes
    - Desenvolvimento de pipelines de ETL
    - Criação de visualizações e dashboards para análise de dados
    - Implementação de modelos de machine learning para previsão e classificação
    - Colaboração com equipes multidisciplinares para solução de problemas de negócio
    
    Durante este período, pude aprimorar minhas habilidades técnicas e desenvolver uma compreensão mais profunda sobre como os dados podem ser utilizados para gerar insights valiosos e impulsionar a tomada de decisões baseadas em evidências.`,
    skills: [
      "Python para Análise de Dados",
      "SQL e Bancos de Dados",
      "ETL e Processamento de Dados",
      "Visualização de Dados",
      "Machine Learning",
    ],
    achievements: [
      "Desenvolvimento de soluções que otimizaram processos internos",
      "Implementação de modelos preditivos com alta acurácia",
      "Criação de dashboards utilizados por gestores para tomada de decisão",
    ],
    links: [{ title: "Ambar Tech", url: "https://ambar.tech" }],
  },
  {
    id: 4,
    date: "Agosto 2025",
    title: "Formatura",
    organization: "UFSCar",
    description: "Conclusão do curso de Ciência da Computação na Universidade Federal de São Carlos.",
    icon: "education",
    fullDescription: `Em agosto de 2025, concluí minha graduação em Ciência da Computação na Universidade Federal de São Carlos (UFSCar), marcando o fim de uma importante etapa na minha jornada acadêmica e o início de novos desafios profissionais.
    
    Durante os cinco anos de curso, adquiri uma sólida formação teórica e prática em diversas áreas da computação, desenvolvendo habilidades técnicas e interpessoais que me prepararam para o mercado de trabalho.
    
    Meu trabalho de conclusão de curso foi focado em [tema do TCC], onde pude aprofundar meus conhecimentos em uma área específica e contribuir com pesquisas relevantes para o campo.
    
    A formatura representa não apenas a conquista de um diploma, mas também o reconhecimento de anos de dedicação, aprendizado e crescimento pessoal e profissional.`,
    skills: [
      "Pensamento Crítico e Analítico",
      "Resolução de Problemas Complexos",
      "Desenvolvimento de Software",
      "Metodologias Ágeis",
      "Pesquisa Científica",
    ],
    achievements: [
      "Conclusão do curso com bom desempenho acadêmico",
      "Desenvolvimento de um trabalho de conclusão de curso relevante",
      "Construção de uma rede de contatos profissionais e acadêmicos",
    ],
    links: [
      { title: "UFSCar", url: "https://www.ufscar.br" },
      { title: "Departamento de Computação", url: "https://www.dc.ufscar.br" },
    ],
  },
]

export function Experience() {
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

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Minha Trajetória</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {experiences.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className={`relative flex flex-col md:flex-row ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot and icon */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                          {getIcon(item.icon)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                        <div
                          className={`p-4 rounded-lg border bg-card ${
                            index % 2 === 0 ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          <span className="inline-block px-3 py-1 mb-2 text-sm rounded-full bg-primary/10 text-primary">
                            {item.date}
                          </span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-muted-foreground font-medium">{item.organization}</p>
                          <p className="mt-2 mb-4">{item.description}</p>
                          <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/experiences/${item.id}`}>
                                <Info className="mr-2 h-4 w-4" />
                                Ver Detalhes
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
