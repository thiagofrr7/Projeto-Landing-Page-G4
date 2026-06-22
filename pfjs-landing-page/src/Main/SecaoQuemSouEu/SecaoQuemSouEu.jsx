import imagemDaiane from '../../assets/Imagens/daiane_qse.JPG';
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao';
import styles from './SecaoQuemSouEu.module.css';

function SecaoQuemSouEu() {
  return (
    <section className={styles.secaoQuemSouEu}>
      <TituloSecao>Quem Sou Eu</TituloSecao>
    <div className={styles.divQuemSouEu}>
      <div className={styles.divTexto}>
      <p><span className={styles.pBold}>Daiane Padula Paz</span> é formada em <span className={styles.pGold}>Letras Português/Espanhol</span>, <span className={styles.pGold}>Especialista em Tradução de Língua Espanhola e Mestre em Ensino de Língua Espanhola</span>. Atua como <span className={styles.pBold}>Tradutora Juramentada</span> desde 2010; trajetória longa que permite ter conhecimento de documentos de diversos tipos de documentos do Brasil e do exterior.</p>
      <p>Seu trabalho vai além da tradução de palavras: busca <span className={styles.pGold}>garantir segurança</span>, <span className={styles.pGold}> clareza e fidelidade às informações originais</span>. Com atendimento humanizado, personalizado e ágil, <span className={styles.pGold}>acompanha cada cliente de forma próxima</span>, <span className={styles.pGold}>oferecendo orientações sobre documentos e trâmites</span>.</p>
      </div>
      <div className={styles.divFoto}>
        <img src={imagemDaiane} alt="Daiane Padula Paz" />
      </div>
    </div>
    </section>
  );
}

export default SecaoQuemSouEu;