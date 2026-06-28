import { createContext, useContext, useEffect, useState } from 'react'
import { traducoes } from './traducoes'

const IdiomaContext = createContext(null)

const IDIOMAS_VALIDOS = ['pt', 'es']
const CHAVE_STORAGE = 'idioma'

function lerIdiomaInicial() {
  if (typeof window === 'undefined') return 'pt'
  const salvo = window.localStorage.getItem(CHAVE_STORAGE)
  return IDIOMAS_VALIDOS.includes(salvo) ? salvo : 'pt'
}

// Busca uma chave aninhada do tipo "secao07.subtitulo" dentro do dicionario
function buscarChave(objeto, caminho) {
  return caminho.split('.').reduce((acc, parte) => {
    if (acc && typeof acc === 'object' && parte in acc) return acc[parte]
    return undefined
  }, objeto)
}

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(lerIdiomaInicial)

  useEffect(() => {
    window.localStorage.setItem(CHAVE_STORAGE, idioma)
    document.documentElement.lang = idioma === 'es' ? 'es' : 'pt-BR'
  }, [idioma])

  const alternarIdioma = () => {
    setIdioma((atual) => (atual === 'pt' ? 'es' : 'pt'))
  }

  // Retorna a traducao da chave; se nao existir, cai no portugues e por fim na propria chave
  const t = (chave) => {
    const valor = buscarChave(traducoes[idioma], chave)
    if (valor !== undefined) return valor
    const fallback = buscarChave(traducoes.pt, chave)
    return fallback !== undefined ? fallback : chave
  }

  return (
    <IdiomaContext.Provider value={{ idioma, alternarIdioma, t }}>
      {children}
    </IdiomaContext.Provider>
  )
}

export function useIdioma() {
  const contexto = useContext(IdiomaContext)
  if (!contexto) {
    throw new Error('useIdioma deve ser usado dentro de um IdiomaProvider')
  }
  return contexto
}
