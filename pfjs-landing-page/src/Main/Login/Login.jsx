import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const USUARIO_TESTE = 'admin';
const SENHA_TESTE = '1234';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    //autenticação básica para rodar em qualquer máquina
    function handleLogin(e) {
        e.preventDefault();
        if (usuario === USUARIO_TESTE && senha === SENHA_TESTE) {
            sessionStorage.setItem('autenticado', 'true');
            navigate('/administrador');
        } else {
            setErro('Usuário ou senha incorretos.');
        }
    }

    return (
        <main className={styles.loginSection}>
            <div className={styles.loginCard}>
                <h2 className={styles.titulo}>Login</h2>
                <form onSubmit={handleLogin} className={styles.form}>
                    <div className={styles.campo}>
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            id="usuario"
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="Digite seu usuário"
                            autoComplete="username"
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="senha">Senha</label>
                        <input
                            id="senha"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                        />
                    </div>
                    {erro && <p className={styles.erro}>{erro}</p>}
                    <button type="submit" className={styles.botao}>Entrar</button>
                </form>
            </div>
        </main>
    );
}

export default Login;