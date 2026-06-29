import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import styles from './Formulario.module.css'
import Botao from '../../../Componentes/Botao/Botao'

function Formulario() {
    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        email: '',
        msg: '',
    })
    const [mensagem, setMensagem] = useState('')

    function aoDigitar(e) {
        const { name, value } = e.target
        setMensagem('')
        setForm({ ...form, [name]: value })
    }

    function aoDigitarTelefone(valor) {
        setMensagem('')
        setForm({ ...form, telefone: valor || '' })
    }

    function enviar() {
        const { nome, telefone, email, msg } = form
        const nomeTrim = nome.trim()

        if (!nomeTrim || !telefone || !email) {
            setMensagem('Preencha nome, telefone e e-mail.')
            return
        }

        if (!isValidPhoneNumber(telefone)) {
            setMensagem('Telefone inválido! Inclua o código do país (ex.: +55, +34).')
            return
        }

        const templateParams = {
            from_name: nomeTrim,
            from_email: email,
            from_phone: telefone,
            from_msg: msg || '(sem mensagem)',
        }

        emailjs
            .send('service_hyuenvg', 'template_ojci3zi', templateParams, 'MFBCIWpoIEEiLDpeZ')
            .then(() => {
                setMensagem('E-mail enviado com sucesso!')
                setForm({ nome: '', telefone: '', email: '', msg: '' })
            })
            .catch(() => {
                setMensagem('Não foi possível enviar o e-mail!')
            })
    }

    const sucesso = mensagem.includes('sucesso')

    return (
        <form
            className={styles.formulario}
            onSubmit={(e) => {
                e.preventDefault()
                enviar()
            }}
        >
            <fieldset className={styles.campo}>
                <legend className={styles.label}>Nome completo:</legend>
                <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={aoDigitar}
                    className={styles.input}
                    placeholder="Digite seu nome"
                    required
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>Telefone:</legend>
                <PhoneInput
                    international
                    defaultCountry="BR"
                    countryCallingCodeEditable={false}
                    value={form.telefone}
                    onChange={aoDigitarTelefone}
                    className={styles.telefoneInput}
                    numberInputProps={{
                        className: styles.telefoneNumero,
                        required: true,
                    }}
                    countrySelectProps={{
                        className: styles.telefonePais,
                    }}
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>E-mail:</legend>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={aoDigitar}
                    className={styles.input}
                    placeholder="Digite seu e-mail"
                    required
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>Mensagem:</legend>
                <textarea
                    name="msg"
                    value={form.msg}
                    onChange={aoDigitar}
                    className={styles.textarea}
                    rows={5}
                    placeholder="Digite sua mensagem (opcional)"
                />
            </fieldset>
            <div className={styles.botaoWrapper}>
                <Botao texto="Enviar" />
                {mensagem && (
                    <p className={sucesso ? styles.feedbackSucesso : styles.feedbackErro}>
                        {mensagem}
                    </p>
                )}
            </div>

        </form>
    )
}

export default Formulario
