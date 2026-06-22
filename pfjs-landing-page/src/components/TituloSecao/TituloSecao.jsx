import styles from './TituloSecao.module.css';

function TituloSecao({ titulo, subtitulo, className }) {
    return (
        <header className={styles.cabecalho}>
            <h2 className={`${styles.tituloSecao} ${className ?? ''}`}>{titulo}</h2>
            {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
        </header>
    );
}

export default TituloSecao;