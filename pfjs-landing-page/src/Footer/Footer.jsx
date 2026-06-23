import iconeWhatsapp from '../assets/Icons/whatsapp.jpg';
import iconeFacebook from '../assets/Icons/facebook.jpg';
import iconeEmail from '../assets/Icons/email.jpg';
import iconeInstagram from '../assets/Icons/instagram.jpg';
import logoGrande from '../assets/Imagens/logogrande.jpg';
import cliqueAqui from '../assets/Imagens/cliquenosicones.jpg';
import faixa from '../assets/Imagens/faixa.jpg';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.containerRedesSociais} sr-reveal-fade`}>
        <div className={styles.whatsapp}>
          <a href="https://contate.me/ios/tradutora_juramentada" target="_blank"><img src={iconeWhatsapp} alt="WhatsApp" /></a>
        </div>
        <div className={styles.instagram}>
          <a href="https://www.instagram.com/daiane_tradutorajuramentada/" target="_blank"><img src={iconeInstagram} alt="Instagram" /></a>
        </div>
        <div className={styles.facebook}>
          <a href="https://web.facebook.com/tradutoraespanhol/?_rdc=1&_rdr#" target="_blank"><img src={iconeFacebook} alt="Facebook" /></a>
        </div>
        <div className={styles.email}>
          <a href="https://mail.google.com/mail/?view=cm&to=daippaz@gmail.com" target="_blank"><img src={iconeEmail} alt="Email" /></a>
        </div>
      </div>

      <div className={styles.cliqueAqui}>
        <img src={cliqueAqui} alt="Clique Aqui" />
      </div>

      <div className={styles.logoGrande}>
        <img src={logoGrande} alt="Logo Grande" />
      </div>

      <div className={styles.faixa}>
        <img src={faixa} alt="Faixa"></img>
      </div>
    </footer>
  );
}

export default Footer;