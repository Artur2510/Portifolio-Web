import '../styles/Header.css';
import Button from './Button';

function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return(
    <div className="class-header">
    <div className="class-links">
      <nav>
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
    </div>
  )
};

export default Header;