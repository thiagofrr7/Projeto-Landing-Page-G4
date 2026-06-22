import styles from './TituloSecao.module.css';

function TituloSecao({ children, className }) {
    return (
        <h2 className={`${styles.tituloSecao} ${className || ''}`}>
            {children}
        </h2>
    );
}

export default TituloSecao;