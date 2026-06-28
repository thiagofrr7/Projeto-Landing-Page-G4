import imagemDaiane from '../../assets/Imagens/daiane_qse.JPG';
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao';
import styles from './SecaoQuemSouEu.module.css';
import { useIdioma } from '../../i18n/IdiomaContext';

function SecaoQuemSouEu() {
  const { t, idioma } = useIdioma();

  const paragrafosPt = (
    <>
      <p><span className={styles.pBold}>Daiane Padula Paz</span> é formada em <span className={styles.pGold}>Letras Português/Espanhol</span>, <span className={styles.pGold}>Especialista em Tradução de Língua Espanhola e Mestre em Ensino de Língua Espanhola</span>. Atua como <span className={styles.pBold}>Tradutora Juramentada</span> desde 2010; trajetória longa que permite ter conhecimento de documentos de diversos tipos de documentos do Brasil e do exterior.</p>
      <p>Seu trabalho vai além da tradução de palavras: busca <span className={styles.pGold}>garantir segurança</span>, <span className={styles.pGold}> clareza e fidelidade às informações originais</span>. Com atendimento humanizado, personalizado e ágil, <span className={styles.pGold}>acompanha cada cliente de forma próxima</span>, <span className={styles.pGold}>oferecendo orientações sobre documentos e trâmites</span>.</p>
    </>
  );

  const paragrafosEs = (
    <>
      <p><span className={styles.pBold}>Daiane Padula Paz</span> es licenciada en <span className={styles.pGold}>Letras Portugués/Español</span>, <span className={styles.pGold}>Especialista en Traducción de Lengua Española y Máster en Enseñanza de Lengua Española</span>. Actúa como <span className={styles.pBold}>Traductora Jurada</span> desde 2010; una larga trayectoria que le permite conocer documentos de diversos tipos de Brasil y del exterior.</p>
      <p>Su trabajo va más allá de la traducción de palabras: busca <span className={styles.pGold}>garantizar seguridad</span>, <span className={styles.pGold}> claridad y fidelidad a la información original</span>. Con una atención humanizada, personalizada y ágil, <span className={styles.pGold}>acompaña a cada cliente de forma cercana</span>, <span className={styles.pGold}>ofreciendo orientación sobre documentos y trámites</span>.</p>
    </>
  );

  return (
    <section className={styles.secaoQuemSouEu} id="quemSouEu">
      <TituloSecao>{t('quemSouEu.titulo')}</TituloSecao>
    <div className={styles.divQuemSouEu}>
      <div className={styles.divTexto}>
      {idioma === 'es' ? paragrafosEs : paragrafosPt}
      </div>
      <div className={styles.divFoto}>
        <img src={imagemDaiane} alt="Daiane Padula Paz" />
      </div>
    </div>
    </section>
  );
}

export default SecaoQuemSouEu;