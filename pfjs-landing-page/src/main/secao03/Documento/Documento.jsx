import styles from './Documento.module.css'

function Documento({ titulo, icone }) {
  return (
    <article className={styles.documento}>
      <img
        src={icone}
        alt=""
        className={styles.icone}
        aria-hidden="true"
      />
      <h3 className={styles.titulo}>{titulo}</h3>
    </article>
  )
}

export default Documento