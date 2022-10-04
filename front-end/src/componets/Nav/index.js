import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hamburguerAberto from './../../assets/icones/hamburguer-aberto0.svg';
import hamburguer from './../../assets/icones/hamburguer.svg';
import logo from './../../assets/imagens/logo-in8-dev.svg';
import './index.css'

export default function Nav() {
    const [active, setMode] = useState(false);
    const toggleMode = () => {
        setMode(!active);
    };

    return (
        <header className='header'>
            <img className="logo" src={logo} alt="in8" />
            <div className={active ? 'oculta-menu' : 'exibe-menu'} onClick={toggleMode} >
                <img className="hamburguer" src={hamburguer} alt="botão mobile" />
            </div>

            <div className={active ? 'exibe-menu' : 'oculta-menu'} onClick={toggleMode} >
                <div>
                    <img className="hamburguer-aberto" src={hamburguerAberto} alt="botão mobile" />
                    <nav className='nav-bar' >
                        <AnchorLink href='#cadastro'>Cadastro</AnchorLink>
                        <AnchorLink href='#lista'>Lista</AnchorLink>
                        <AnchorLink href='#sobre-mim'>Sobre Mim</AnchorLink>
                    </nav>
                </div>
            </div>
        </header>);
}