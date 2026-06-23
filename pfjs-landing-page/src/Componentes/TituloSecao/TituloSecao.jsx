import styles from './TituloSecao.module.css';

function TituloSecao({ children, className, titulo, subtitulo }) {
    return (
        <div>
            {titulo && (
                <h2 className={`${styles.tituloSecao} ${className || ''}`}>
                    {titulo}
                </h2>
            )}
            {children && (
                <h2 className={`${styles.tituloSecao} ${className || ''}`}>
                    {children}
                </h2>
            )}
            {subtitulo && <p className={styles.subtituloSecao}>{subtitulo}</p>}
        </div>
    );
}

export default TituloSecao;
