import styles from './Secao07.module.css'
import Formulario from './Formulario/Formulario'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'
import fotoTradutora from '../../assets/Imagens/tradutora-formulario.webp'
import { useIdioma } from '../../i18n/IdiomaContext'


function Secao07() {
    const { t } = useIdioma()

    return (
        <section className={styles.secao07} id="secao07">
            <div className={`${styles.caixa}`}>
                <TituloSecao
                    titulo={t('secao07.titulo')}
                    subtitulo={t('secao07.subtitulo')}
                />
                <div className={styles.corpo}>
                    <div className={styles.areaForm}>
                        <Formulario />
                    </div>
                    <div className={styles.fotoWrapper}>
                        <img
                            src={fotoTradutora}
                            alt="Daiane, tradutora juramentada"
                            className={styles.foto}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Secao07
