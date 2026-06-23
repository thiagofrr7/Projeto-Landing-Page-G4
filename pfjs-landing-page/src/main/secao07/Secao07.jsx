import styles from './Secao07.module.css'
import Formulario from './Formulario/Formulario'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'

function Secao07() {
    return (
        <section className={styles.secao07} id="secao07">
            <div className={styles.caixa}>
                <TituloSecao
                    titulo="Ficou com dúvidas?"
                    subtitulo="Atendimento rápido, personalizado e 100% online."
                />
                <div className={styles.corpo}>
                    <div className={styles.areaForm}>
                        <Formulario />
                    </div>
                    <div className={styles.fotoWrapper}>
                        {/* <img
                            src={fotoTradutora}
                            alt="Tradutora Daiane"
                            className={styles.foto}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Secao07
