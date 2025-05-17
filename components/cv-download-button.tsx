"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

interface CVDownloadButtonProps extends ButtonProps {
  text?: string
  showIcon?: boolean
}

export function CVDownloadButton({
  text = "Baixar Currículo",
  showIcon = true,
  className,
  ...props
}: CVDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadCV = async () => {
    try {
      setIsDownloading(true)

      // Cria um link para download e simula o clique
      const link = document.createElement("a")
      link.href = "/curriculo.pdf"
      link.download = "curriculo.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Download iniciado",
        description: "O download do currículo foi iniciado com sucesso.",
      })
    } catch (error) {
      console.error("Erro ao baixar currículo:", error)
      toast({
        title: "Erro no download",
        description: "Ocorreu um erro ao baixar o currículo. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button variant="secondary" onClick={downloadCV} disabled={isDownloading} className={className} {...props}>
      {showIcon && <FileText className="mr-2 h-4 w-4" />}
      {isDownloading ? "Baixando..." : text}
    </Button>
  )
}
