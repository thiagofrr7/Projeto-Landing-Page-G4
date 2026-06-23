import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Formulario.module.css'
import Botao from '../../../Componentes/Botao/Botao'

// Formata o telefone como (00) 00000-0000 enquanto o usuário digita
function mascararTelefone(valor) {
    const numeros = valor.replace(/\D/g, '').slice(0, 11)
    if (numeros.length === 0) return ''
    if (numeros.length <= 2) return `(${numeros}`
    if (numeros.length <= 6) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
    if (numeros.length <= 10) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
}

function Formulario() {
    // Um único estado guarda todos os campos do formulário
    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        email: '',
        msg: '',
    })
    // Mensagem de feedback (serve tanto para erro quanto para sucesso)
    const [mensagem, setMensagem] = useState('')

    // Atualiza o campo que está sendo digitado, usando o "name" do input
    function aoDigitar(e) {
        const { name, value } = e.target
        setMensagem('')
        setForm({ ...form, [name]: value })
    }

    // O telefone passa pela máscara antes de ser salvo no estado
    function aoDigitarTelefone(e) {
        setMensagem('')
        setForm({ ...form, telefone: mascararTelefone(e.target.value) })
    }

    // Valida os campos e, se estiver tudo certo, envia o e-mail pelo EmailJS
    function enviar() {
        const { nome, telefone, email, msg } = form

        if (!nome || !telefone || !email || !msg) {
            setMensagem('Todos os campos devem ser preenchidos!')
            return
        }

        if (telefone.replace(/\D/g, '').length < 10) {
            setMensagem('Telefone inválido! Use DDD + número.')
            return
        }

        const templateParams = {
            from_name: nome,
            from_email: email,
            from_phone: telefone,
            from_msg: msg,
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
                <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={aoDigitarTelefone}
                    className={styles.input}
                    placeholder="(xx) xxxxx-xxxx"
                    required
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
                    placeholder="Digite sua mensagem"
                    required
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
