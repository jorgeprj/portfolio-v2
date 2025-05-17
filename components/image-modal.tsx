"use client"

import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  alt: string
}

export function ImageModal({ isOpen, onClose, imageUrl, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-transparent border-none">
        <DialogTitle className="sr-only">{alt || "Visualização da imagem"}</DialogTitle>
        <div className="relative w-full h-full">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-50 rounded-full bg-background/80 hover:bg-background/90 text-foreground"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </Button>
          </DialogClose>
          <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
