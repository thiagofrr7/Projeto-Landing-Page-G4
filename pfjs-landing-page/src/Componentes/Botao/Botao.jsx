import styles from './Botao.module.css';

function Botao({ texto, onClick }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            {texto}
        </button>
    );
}

export default Botao;