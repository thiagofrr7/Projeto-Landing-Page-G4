import styles from './Caixa.module.css'
import bookmarkIcon from '../../../assets/icons/bookmark-star.svg'

function Caixa({ titulo, texto }) { //destructuring do objeto
  return (
    <article className={styles.caixa}>
      <img
        src={bookmarkIcon}
        alt=""
        className={styles.icone}
        aria-hidden="true"
      />

      <div className={styles.cabecalho}>
        <h3 className={styles.titulo}>{titulo}</h3>
      </div>

      <p className={styles.texto}>{texto}</p>
    </article>
  )
}
export default Caixa;