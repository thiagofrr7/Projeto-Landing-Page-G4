import React, { useEffect, useState } from 'react';
import styles from './Faq.module.css';
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao';

function FAQ() {
    const url = "https://api.jsonbin.io/v3/b/6a372645f5f4af5e291656f8";
    const [faqs, setFaqs] = useState([]); //começo a lista com array vazio, por enquando nao carrega nada na tela
    const [aberto, setAberto] = useState(null);

    useEffect(() => { //função do react que executa uma ação num periodo de tempo
        lerFaq();
    }, []);//ele dispara somente uma vez, ele espera o componente carregar antes de disparar

    async function lerFaq() {
        const configAPI = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Access-Key': '$2a$10$4g.qrkgd3TRksxUTGLBpBOCR3heKcplnU2H5UgSHRUYskgilPtnG6'
            }
        };

        const response = await fetch(url, configAPI);
        const faqServidor = await response.json();

        setFaqs(faqServidor.record.faqs);
        //set faq vai coloca meu faq dentro da lista que declarei anteriormente 
    }

    return (
        <section id="faq" className={styles.faq}>
            <div className={styles.faqInner}>
                <TituloSecao>Perguntas Frequentes</TituloSecao>

                <div className={styles.lista}>
                    {faqs.length === 0 ? (
                        <p className={styles.carregando}>Carregando...</p>
                    ) : (
                        faqs.map((faq, indice) => (
                            <div key={indice} className={styles.itemWrapper}>
                                <div
                                    className={styles.item}
                                    onClick={() => setAberto(aberto === indice ? null : indice)}
                                >
                                    <p className={styles.pergunta}>
                                        {faq.pergunta} {aberto === indice ? '-' : '+'}
                                    </p>
                                </div>

                                {aberto === indice && (
                                    <div className={styles.resposta}>
                                        <p>{faq.resposta}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default FAQ;