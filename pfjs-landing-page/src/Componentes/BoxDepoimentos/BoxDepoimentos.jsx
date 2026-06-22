import styles from './BoxDepoimentos.module.css';
import checkNormal from '../../assets/Icons/checkmarkempty.svg';
import checkHover from '../../assets/Icons/checkmarkfilled.svg';

function BoxDepoimentos ({nome, texto}) {
  return (
    <div className={styles.boxDepoimento}>
        <h3>{nome}</h3>
        <p>{texto}</p>
    
    <div className={styles.iconeCheckmark}>
        <div className={styles.fundoIcone}></div>
        <img src={checkNormal} alt="Selo de Verificação" className={styles.imgNormal} />
        <img src={checkHover} alt="Selo Ativo" className={styles.imgHover} />
      </div>

    </div>
  );
}

export default BoxDepoimentos;