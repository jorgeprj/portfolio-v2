"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
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
              <p className="text-lg leading-relaxed mb-4">
			  	Sou um desenvolvedor carioca, apaixonado por códigos desde os 15 anos. Tenho uma 
				forte afinidade com desenvolvimento Web e, atualmente, estou mergulhado em estudos 
				sobre Inteligência Artificial, buscando ampliar minhas habilidades e explorar novas 
				possibilidades tecnológicas. Sou formado em Ciência da Computação pela UFSCar, onde 
				construí uma base sólida em programação, lógica e resolução de problemas.
              </p>
              <p className="text-lg leading-relaxed">
			  	Atualmente, trabalho na Ambar Tech, em São Carlos, com foco em Análise de Dados. 
				Já atuei no suporte e manutenção do principal aplicativo da empresa, o que me 
				proporcionou uma compreensão profunda dos sistemas internos. Hoje, faço parte da 
				equipe de logística, contribuindo com melhorias nos fluxos de dados e na automação 
				de processos. Sou movido por desafios, aprendizado contínuo e pela vontade de 
				desenvolver soluções que geram impacto real.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
