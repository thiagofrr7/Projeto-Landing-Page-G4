import React from 'react';
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao';
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
                    <div className={styles.esquerda}>
                        <TituloSecao titulo="Tradução Juramentada">
                            {"Precisa traduzir um documento?\nEu resolvo isso para você"}
                        </TituloSecao>

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

                    <div className={styles.direita}>
                        <img src={tradutora} alt="Tradutora" className={styles.foto} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chamada;