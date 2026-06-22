import styles from './TituloSecao.module.css';

function TituloSecao({ children, className }) {
    return (
        <h2 className={`${styles.tituloSecao} ${className || ''}`}>
            {children}
        </h2>
    );
}

export default TituloSecao;
function TituloSecao({ children, className, titulo }) {
    return (
        <div>
            <h2 className={`${styles.tituloSecao} ${className || ''}`}>
                {children}
            </h2>
            {titulo && <h1>{titulo}</h1>}
        </div>
    );
}

export default TituloSecao;
