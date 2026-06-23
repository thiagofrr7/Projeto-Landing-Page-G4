import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

export function useScrollReveal(opcoes = {}) {
    useEffect(() => {
        const sr = ScrollReveal()

        const padrao = {
            distance: '0px',    // ← sem movimento
            duration: 2000,
            opacity: 0,         // começa invisível (já é o padrão da lib)
            easing: 'ease-out',
            reset: false,
            ...opcoes,
        }

        sr.reveal('.sr-reveal-padrao', padrao)
        sr.reveal('.sr-reveal-fade', { distance: '0px', duration: 2000, interval: 200 })

        return () => sr.destroy()
    }, [])
}