import React, { useState } from 'react';
import '../styles/Header.css';
import Button from './Button';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false); // Fecha o menu ao clicar no link
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Alterna o estado do menu
  };

  return (
    <div className="class-header">
      <div className="class-links">
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </button>
        <nav className={menuActive ? 'active' : ''}>
          <a href="#sectionSobre" onClick={(e) => handleScroll(e, 'sectionSobre')}>Sobre</a>
          <a href="#sectionTecnologias" onClick={(e) => handleScroll(e, 'sectionTecnologias')}>Tecnologias</a>
          <a href="#sectionProjetos" onClick={(e) => handleScroll(e, 'sectionProjetos')}>Projetos</a>
          <a href="#sectionFormacao" onClick={(e) => handleScroll(e, 'sectionFormacao')}>Formação</a>
        </nav>
      </div>
      <Button
        href="https://www.linkedin.com/in/artur-bicalho/"
        imgSrc="/imagens/linkedin.svg"
        altText="Logo do Linkedin"
        text=""
      />
      {/* Sobreposição que cobre o fundo */}
      <div className={menuActive ? 'overlay active' : 'overlay'} onClick={toggleMenu}></div>
    </div>
  );
}

export default Header;
