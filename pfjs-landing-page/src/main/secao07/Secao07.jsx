import styles from './Secao07.module.css'
import Formulario from './Formulario/Formulario'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'
import fotoTradutora from '../../assets/Imagens/tradutora-formulario.webp'


function Secao07() {
    return (
        <section className={styles.secao07} id="secao07">
            <div className={`${styles.caixa}`}>
                <TituloSecao
                    titulo="Ficou com dúvidas?"
                    subtitulo={
                        <>
                            Atendimento rápido, personalizado e{' '}
                            <span className={styles.subtituloOnline}>100% online!</span>
                        </>
                    }
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
