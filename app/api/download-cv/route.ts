import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Em um ambiente real, você acessaria o arquivo do sistema de arquivos
    // ou de um serviço de armazenamento como AWS S3

    // Para o Next.js, usamos a URL direta do arquivo
    return NextResponse.redirect(new URL("/curriculo.pdf", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"))
  } catch (error) {
    console.error("Erro ao baixar o currículo:", error)
    return NextResponse.json({ error: "Falha ao baixar o currículo" }, { status: 500 })
  }
}
