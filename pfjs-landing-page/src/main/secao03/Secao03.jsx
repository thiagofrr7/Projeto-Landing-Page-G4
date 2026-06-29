import styles from './Secao03.module.css'
import Documento from './Documento/Documento'
import TituloSecao from '../../Componentes/TituloSecao/TituloSecao'
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
    { titulo: 'Antecedentes criminais', icone: antecedentesIcon },
    { titulo: 'Autorização de viagem', icone: autorizacaoIcon },
    { titulo: 'Carteira de habilitação', icone: habilitacaoIcon },
    { titulo: 'Certidões', icone: certidoesIcon },
    { titulo: 'Comprovante de matrícula', icone: matriculaIcon },
    { titulo: 'Contratos', icone: contratoIcon },
    { titulo: 'Declarações', icone: declaracaoIcon },
    { titulo: 'Diploma', icone: diplomaIcon },
    { titulo: 'Histórico escolar', icone: historicoIcon },
    { titulo: 'Procuração', icone: procuracaoIcon },
]

function Secao03() {
    return (
        <section className={styles.secao03} id="secao03">
            <TituloSecao titulo="Documentos traduzidos" />
            <div className={styles.grade}>
                {documentos.map((doc) => (
                    <Documento
                        key={doc.titulo}
                        titulo={doc.titulo}
                        icone={doc.icone}
                    />
                ))}
            </div>
        </section>
    )
}

export default Secao03
