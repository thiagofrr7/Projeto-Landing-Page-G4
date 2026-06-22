import Caixa from './Caixa/Caixa'
import styles from './Secao02.module.css'
import TituloSecao from '../../Components/TituloSecao/TituloSecao'


const cartoes = [
  {
    titulo: 'O que é?',
    texto: 'Tradução oficial de documentos, feita com rigor e fidelidade.',
  },
  {
    titulo: 'Quem faz?',
    texto:
      'Profissionais com formação em Letras, devidamente registrados e habilitados na Junta Comercial.',
  },
  {
    titulo: 'Validade',
    texto: 'Válida perante autoridades no Brasil e no exterior.',
  },
  {
    titulo: 'Diferenças',
    texto: 'Tem fé pública; não é equivalente à tradução simples.',
  },
]

function Secao02() {
  return (
    <section className={styles.secao02} id="secao02">
      <TituloSecao titulo="Tradução Juramentada" />
      <div className={styles.grade}>
        {cartoes.map((card) => (
          <Caixa key={card.titulo}
            titulo={card.titulo}
            texto={card.texto} />
        ))}
      </div>
    </section>
  )
}

export default Secao02