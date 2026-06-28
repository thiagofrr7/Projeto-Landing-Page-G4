import { useState, useEffect, useRef } from 'react';
import BoxDepoimentos from '../../Componentes/BoxDepoimentos/BoxDepoimentos';
import styles from './SecaoDepoimentos.module.css'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao';
import { useIdioma } from '../../i18n/IdiomaContext';

function SecaoDepoimentos() {
    const { t, idioma } = useIdioma();
    const url = "https://api.jsonbin.io/v3/b/6a387c8af5f4af5e291a4b71";
    const [depoimentos, setDepoimentos] = useState([]);
    const [indiceAtivo, setIndiceAtivo] = useState(0);
    const totalIndicadoresRef = useRef(0); 

    useEffect(() => {
    const carregarDados = async () => {
        try {
            const configAPI = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Access-Key': '$2a$10$2BnnQCI5DYO/pJJavOSCKeIrpvyoA3zd0C6HB5YCSJp3iSNi/n6NW'
                }
            };
            const response = await fetch(url, configAPI);
            const dados = await response.json();
            setDepoimentos(dados.record.depoimentos);
        } catch (error) {
            console.error("Erro ao buscar depoimentos:", error);
        }
    };

    carregarDados(); 
    }, []);

    useEffect(() => {
    if (depoimentos.length === 0) return;

    totalIndicadoresRef.current = Math.ceil(depoimentos.length / 3);

    const temporizador = setInterval(() => {
        setIndiceAtivo((prevIndice) => (prevIndice + 1) % totalIndicadoresRef.current);
    }, 8000);

    return () => clearInterval(temporizador);
}, [depoimentos.length]);

    const depoimentosVisiveis = depoimentos.slice(indiceAtivo * 3, (indiceAtivo * 3) + 3);

    const totalIndicadores = Math.ceil(depoimentos.length / 3);
    const indicadores = Array.from({ length: totalIndicadores }, (_, i) => i);

    return (
        <section id="depoimentos" className={`${styles.secaoDepoimentos} sr-reveal-depoimentos`}>
            <TituloSecao>{t('depoimentos.titulo')}</TituloSecao>
            <div className={styles.divDepoimentos}>
                {depoimentos.length === 0 ? (
                    <p>{t('comum.carregando')}</p>
                ) : (
                    depoimentosVisiveis.map((dep, indice) => (
                        <BoxDepoimentos
                            key={indice}
                            nome={dep.nome}
                            texto={idioma === 'es' ? (dep.texto_es ?? dep.texto) : dep.texto}
                        />
                    ))
                )}
            </div>
            {depoimentos.length > 0 && (
                <div className={styles.divIndicadores}>
                    {indicadores.map((i) => (
                        <span
                            key={i}
                            className={`${styles.indicador} ${indiceAtivo === i ? styles.indicadorAtivo : ''}`}
                            onClick={() => setIndiceAtivo(i)}
                        ></span>
                    ))}
                </div>
            )}
        </section>
    );
}

export default SecaoDepoimentos;