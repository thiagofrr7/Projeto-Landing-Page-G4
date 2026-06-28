import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/Icons/logo.png';
import menuHamb from '../assets/Icons/menu_hamb.svg';
import { useIdioma } from '../i18n/IdiomaContext';

function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const { t, alternarIdioma } = useIdioma();
    const isLogin = pathname === '/login';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollParaSecao = (id) => {
        const elemento = document.getElementById(id);
        if (!elemento) return;

        const offset = 85;
        const destino = elemento.getBoundingClientRect().top + window.scrollY - offset;
        const inicio = window.scrollY;
        const distancia = destino - inicio;
        const duracao = 1000;
        let inicioTempo = null;

        const animar = (tempoAtual) => {
            if (!inicioTempo) inicioTempo = tempoAtual;
            const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);
            const suavizado = 1 - Math.pow(1 - progresso, 3);
            window.scrollTo(0, inicio + distancia * suavizado);
            if (progresso < 1) requestAnimationFrame(animar);
        };

        requestAnimationFrame(animar);
    };

    const handleClickLink = (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');

        if (href?.startsWith('#')) {
            e.preventDefault();
            scrollParaSecao(href.slice(1));
            setMenuAberto(false);
            return;
        }

        if (href === '/' && pathname === '/') {
            e.preventDefault();
            scrollParaSecao('chamada');
            setMenuAberto(false);
            return;
        }

        setMenuAberto(false);
    };

    if (isLogin) return null;

    return (
        <nav className={`${styles.menu} ${scrolled ? styles.menuScrolled : ''}`}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src={logo} alt="Logo" className={styles.menuLogo} />

                <img
                    src={menuHamb}
                    alt="Menu"
                    className={styles.menuHamb}
                    onClick={() => setMenuAberto(!menuAberto)}
                />

                <ul
                    className={`${styles.menuLinks} ${menuAberto ? styles.menuLinksAberto : ''}`}
                    onClick={handleClickLink}
                >
                    <li><Link to="/">{t('menu.home')}</Link></li>
                    <li><a href="#secao02">{t('menu.oque')}</a></li>
                    <li><a href="#secao03">{t('menu.documentos')}</a></li>
                    <li><a href="#quemSouEu">{t('menu.quem')}</a></li>
                    <li><a href="#depoimentos">{t('menu.depoimentos')}</a></li>
                    <li><a href="#faq">{t('menu.faq')}</a></li>
                    <li><a href="#secao07">{t('menu.fale')}</a></li>
                    <li><Link to="/login">{t('menu.login')}</Link></li>
                    <li>
                        <button
                            type="button"
                            className={styles.botaoIdioma}
                            onClick={() => { alternarIdioma(); setMenuAberto(false); }}
                            aria-label={t('menu.botaoIdiomaAria')}
                        >
                            {t('menu.botaoIdioma')}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;