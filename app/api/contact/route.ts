import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializa o cliente Resend
// Você precisará adicionar sua chave API do Resend como variável de ambiente
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Envia o email usando Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Use um domínio verificado no Resend
      to: "jlmp2002@gmail.com",
      subject: `Mensagem do Portfolio: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      // Você também pode usar HTML para uma mensagem mais formatada
      html: `
        <h2>Nova mensagem do seu portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Erro ao enviar email:", error)
      return NextResponse.json(
        { error: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente." },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar mensagem:", error)
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente." },
      { status: 500 },
    )
  }
}
