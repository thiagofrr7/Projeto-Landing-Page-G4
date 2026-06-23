import React from 'react';
import tituloStyles from '../../Componentes/TituloSecao/TituloSecao.module.css';
import styles from './Chamada.module.css';
import Botao from '../../Componentes/Botao/Botao';
import bandeiraBr from '../../assets/Imagens/bandeiraBR.png';
import bandeiraEs from '../../assets/Imagens/bandeiraES.png';
import tradutora from '../../assets/Imagens/fotoChamada.webp';

function Chamada() {
    return (
        <section id="chamada" className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.container}>
                    <div className={`${styles.esquerda} sr-reveal-fade`}>
                        <p className={styles.chamada}>
                            {"Precisa traduzir um documento?\nEu resolvo isso para você"}
                        </p>
                        <h1 className={`${tituloStyles.tituloSecao} ${styles.titulo}`}>Tradução Juramentada</h1>

                        <div className={styles.bandeiras}>
                            <div className={styles.bandeira}>
                                <img src={bandeiraEs} alt="Espanhol" />
                                <span>ES</span>
                            </div>
                            <div className={styles.bandeira}>
                                <img src={bandeiraBr} alt="Português" />
                                <span>PT</span>
                            </div>
                        </div>

                        <div className={styles.btnWrapper}>
                            <Botao texto="Fale Comigo" onClick={() => { }} />
                        </div>
                    </div>

                    <div className={`${styles.direita} sr-reveal-fade`}>
                        <img src={tradutora} alt="Tradutora" className={styles.foto} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chamada;