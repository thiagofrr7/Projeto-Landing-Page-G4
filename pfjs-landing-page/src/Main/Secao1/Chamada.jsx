import React from 'react';
import tituloStyles from '../../Componentes/TituloSecao/TituloSecao.module.css';
import styles from './Chamada.module.css';
import Botao from '../../Componentes/Botao/Botao';
import bandeiraBr from '../../assets/Imagens/bandeiraBR.png';
import bandeiraEs from '../../assets/Imagens/bandeiraES.png';
import tradutora from '../../assets/Imagens/fotoChamada.webp';
import { useIdioma } from '../../i18n/IdiomaContext';

function Chamada() {
    const { t } = useIdioma();
    const handleFaleComigo = () => {
        const elemento = document.getElementById('secao07');
        if (!elemento) return;

        const offset = 85;
        const destino = elemento.getBoundingClientRect().top + window.scrollY - offset;
        const inicio = window.scrollY;
        const distancia = destino - inicio;
        const duracao = 1000;
        let inicioTempo = null;

        const animar = (tempoAtual) => {
            if (!inicioTempo) inicioTempo = tempoAtual;
            const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);
            const suavizado = 1 - Math.pow(1 - progresso, 3);
            window.scrollTo(0, inicio + distancia * suavizado);
            if (progresso < 1) requestAnimationFrame(animar);
        };

        requestAnimationFrame(animar);
    };

    return (
        <section id="chamada" className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.container}>
                    <div className={`${styles.esquerda} sr-reveal-fade`}>
                        <p className={styles.chamada}>
                            {t('hero.chamada')}
                        </p>
                        <h1 className={`${tituloStyles.tituloSecao} ${styles.titulo}`}>{t('hero.titulo')}</h1>

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
                            <Botao texto={t('hero.botao')} onClick={handleFaleComigo} />
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