"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre
                  desenvolvimento.
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>email@exemplo.com</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:email@exemplo.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Seu Nome" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Seu Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Sua Mensagem" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
