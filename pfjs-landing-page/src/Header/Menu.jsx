import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/Icons/logo.png';
import menuHamb from '../assets/Icons/menu_hamb.svg';

function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // aqui eu consigo controlar o scroll, se estiver na chamada vai manter a mesma cor ou seja o transparente
     const handleScroll = () => {
    setScrolled(window.scrollY > 0);
};

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        //se o usuário rolar a página o menu scrolled será aplicado
        //validação do menu se ele estará aberto para mostrar os links, digo no menu de hamburguer
        <nav className={`${styles.menu} ${scrolled ? styles.menuScrolled : ''}`}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img src={logo} alt="Logo" className={styles.menuLogo} />

                <img
                    src={menuHamb}
                    alt="Menu"
                    className={styles.menuHamb}
                    onClick={() => setMenuAberto(!menuAberto)}
                />
                    
                <ul className={`${styles.menuLinks} ${menuAberto ? styles.menuLinksAberto : ''}`}>

                    <li><Link to="/">Home</Link></li>
                    <li><a href="#o-que-e">O Que É</a></li>
                    <li><a href="#principais-documentos">Principais Documentos</a></li>
                    <li><a href="#quem-sou-eu">Quem Sou Eu</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#fale-comigo">Fale Comigo</a></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;