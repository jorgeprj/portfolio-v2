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
                Sou um desenvolvedor apaixonado por criar interfaces limpas e funcionais. Com experiência em
                desenvolvimento web moderno, busco sempre as melhores práticas e tecnologias para entregar produtos de
                qualidade.
              </p>
              <p className="text-lg leading-relaxed">
                Minha abordagem combina design minimalista com código eficiente, resultando em experiências digitais que
                são tanto visualmente atraentes quanto tecnicamente sólidas.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
