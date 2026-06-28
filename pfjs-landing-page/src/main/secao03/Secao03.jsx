import styles from './Secao03.module.css'
import Documento from './Documento/Documento'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'
import { useIdioma } from '../../i18n/IdiomaContext'
import diplomaIcon from '../../assets/Icons/diploma.svg'
import historicoIcon from '../../assets/Icons/historico-escolar.svg'
import certidoesIcon from '../../assets/Icons/certidoes.svg'
import contratoIcon from '../../assets/Icons/contrato.svg'
import procuracaoIcon from '../../assets/Icons/procuracao.svg'
import declaracaoIcon from '../../assets/Icons/declaracao.svg'
import autorizacaoIcon from '../../assets/Icons/autorizacao-viagem.svg'
import habilitacaoIcon from '../../assets/Icons/carteira-habilitacao.svg'
import antecedentesIcon from '../../assets/Icons/antecedentes-criminais.svg'
import matriculaIcon from '../../assets/Icons/comprovante-matricula.svg'

const documentos = [
    { chave: 'antecedentes', icone: antecedentesIcon },
    { chave: 'autorizacao', icone: autorizacaoIcon },
    { chave: 'habilitacao', icone: habilitacaoIcon },
    { chave: 'certidoes', icone: certidoesIcon },
    { chave: 'matricula', icone: matriculaIcon },
    { chave: 'contratos', icone: contratoIcon },
    { chave: 'declaracoes', icone: declaracaoIcon },
    { chave: 'diploma', icone: diplomaIcon },
    { chave: 'historico', icone: historicoIcon },
    { chave: 'procuracao', icone: procuracaoIcon },
]

function Secao03() {
    const { t } = useIdioma()

    return (
        <section className={styles.secao03} id="secao03">
            <TituloSecao titulo={t('secao03.titulo')} />
            <div className={styles.grade}>
                {documentos.map((doc) => (
                    <Documento
                        key={doc.chave}
                        titulo={t(`secao03.documentos.${doc.chave}`)}
                        icone={doc.icone}
                    />
                ))}
            </div>
        </section>
    )
}

export default Secao03