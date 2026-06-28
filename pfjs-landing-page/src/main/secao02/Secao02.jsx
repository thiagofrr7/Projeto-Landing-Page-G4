import Caixa from './Caixa/Caixa'
import styles from './Secao02.module.css'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'
import { useIdioma } from '../../i18n/IdiomaContext'

function Secao02() {
  const { t } = useIdioma()
  const cartoes = t('secao02.cartoes')

  return (
    <section className={styles.secao02} id="secao02">
      <TituloSecao titulo={t('secao02.titulo')} />
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