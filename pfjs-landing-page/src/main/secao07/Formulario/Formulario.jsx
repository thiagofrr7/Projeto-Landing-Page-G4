import { useState } from 'react'
import styles from './Formulario.module.css'
import emailjs from '@emailjs/browser'

function mascararTelefone(valor) {
    const numeros = valor.replace(/\D/g, '').slice(0, 11)

    if (numeros.length === 0) return ''
    if (numeros.length <= 2) return `(${numeros}`
    if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
    if (numeros.length <= 10) {
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`
    }
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
}

function Formulario() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        msg: '',
    })
    const [msgErro, setMsgErro] = useState('')

    function alterarForm(e) {
        setMsgErro('')
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function alterarTelefone(e) {
        setMsgErro('')
        setForm({
            ...form,
            telefone: mascararTelefone(e.target.value),
        })
    }

    function validar() {
        if (
            form.nome === '' ||
            form.email === '' ||
            form.telefone === '' ||
            form.msg === ''
        ) {
            setMsgErro('Todos os campos devem ser preenchidos!')
            return
        }

        const numerosTelefone = form.telefone.replace(/\D/g, '')

        if (numerosTelefone.length < 10) {
            setMsgErro('Telefone inválido! Use DDD + número.')
            return
        }

        const templateParams = {
            from_name: form.nome,
            from_email: form.email,
            from_phone: form.telefone,
            from_msg: form.msg,
        }

        emailjs
            .send('service_hyuenvg', 'template_ojci3zi', templateParams, 'MFBCIWpoIEEiLDpeZ')
            .then(() => {
                setMsgErro('E-mail enviado com sucesso!')
                setForm({ nome: '', email: '', telefone: '', msg: '' })
            })
            .catch(() => {
                setMsgErro('Não foi possível enviar o e-mail!')
            })
    }

    return (
        <form className={styles.formulario} onSubmit={(e) => e.preventDefault()}>
            <fieldset className={styles.campo}>
                <legend className={styles.label}>Nome completo:</legend>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={alterarForm}
                    className={styles.input}
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>Telefone:</legend>
                <input
                    id="telefone"
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={alterarTelefone}
                    className={styles.input}
                    placeholder="(00) 00000-0000"
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>E-mail:</legend>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={alterarForm}
                    className={styles.input}
                />
            </fieldset>

            <fieldset className={styles.campo}>
                <legend className={styles.label}>Mensagem:</legend>
                <textarea
                    id="msg"
                    name="msg"
                    value={form.msg}
                    onChange={alterarForm}
                    className={styles.textarea}
                    rows={5}
                />
            </fieldset>

            <input
                type="button"
                value="Enviar"
                onClick={validar}
                className={styles.botao}
            />

            {msgErro && (
                <p
                    className={
                        msgErro.includes('sucesso')
                            ? styles.feedbackSucesso
                            : styles.feedbackErro
                    }
                >
                    {msgErro}
                </p>
            )}
        </form>
    )
}

export default Formulario
