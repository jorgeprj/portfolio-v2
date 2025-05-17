/**
 * Converte texto simples com formatação markdown básica para HTML
 */
export function formatMarkdown(text: string): string {
  if (!text) return ""

  // Divide o texto em linhas
  const lines = text.split("\n")
  let html = ""
  let inList = false
  let listType = ""

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Pula linhas vazias
    if (line === "") {
      if (inList) {
        html += listType === "ul" ? "</ul>" : "</ol>"
        inList = false
      }
      continue
    }

    // Cabeçalhos
    if (line.startsWith("# ")) {
      if (inList) {
        html += listType === "ul" ? "</ul>" : "</ol>"
        inList = false
      }
      html += `<h2 class="text-2xl font-bold my-4">${line.substring(2)}</h2>`
      continue
    }

    if (line.startsWith("## ")) {
      if (inList) {
        html += listType === "ul" ? "</ul>" : "</ol>"
        inList = false
      }
      html += `<h3 class="text-xl font-bold my-3">${line.substring(3)}</h3>`
      continue
    }

    if (line.startsWith("### ")) {
      if (inList) {
        html += listType === "ul" ? "</ul>" : "</ol>"
        inList = false
      }
      html += `<h4 class="text-lg font-bold my-2">${line.substring(4)}</h4>`
      continue
    }

    // Lista não ordenada
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList || listType !== "ul") {
        if (inList) {
          html += listType === "ul" ? "</ul>" : "</ol>"
        }
        html += '<ul class="list-disc pl-6 my-4 space-y-2">'
        inList = true
        listType = "ul"
      }
      html += `<li class="mb-1">${formatInlineMarkdown(line.substring(2))}</li>`
      continue
    }

    // Lista ordenada
    const orderedListMatch = line.match(/^(\d+)\.\s(.+)$/)
    if (orderedListMatch) {
      if (!inList || listType !== "ol") {
        if (inList) {
          html += listType === "ul" ? "</ul>" : "</ol>"
        }
        html += '<ol class="list-decimal pl-6 my-4 space-y-2">'
        inList = true
        listType = "ol"
      }
      html += `<li class="mb-1">${formatInlineMarkdown(orderedListMatch[2])}</li>`
      continue
    }

    // Parágrafo normal
    if (inList) {
      html += listType === "ul" ? "</ul>" : "</ol>"
      inList = false
    }
    html += `<p class="mb-4 text-lg leading-relaxed">${formatInlineMarkdown(line)}</p>`
  }

  // Fecha qualquer lista aberta
  if (inList) {
    html += listType === "ul" ? "</ul>" : "</ol>"
  }

  return html
}

/**
 * Formata elementos inline como negrito e itálico
 */
function formatInlineMarkdown(text: string): string {
  // Negrito: **texto** ou __texto__
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>")

  // Itálico: *texto* ou _texto_
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>")
  text = text.replace(/_([^_]+)_/g, "<em>$1</em>")

  // Links: [texto](url)
  text = text.replace(
    /\[([^\]]+)\]$$([^)]+)$$/g,
    '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
  )

  return text
}
