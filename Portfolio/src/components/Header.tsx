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
      <a href="#sectionInicio" onClick={(e) => handleScroll(e, 'sectionInicio')}>Inicio</a>
      <a href="#sectionSobre" onClick={(e) => handleScroll(e, 'sectionSobre')}>Sobre</a>
      <a href="#sectionTecnologias" onClick={(e) => handleScroll(e, 'sectionTecnologias')}>Tecnologias</a>
      <a href="#sectionProjetos" onClick={(e) => handleScroll(e, 'sectionProjetos')}>Projetos</a>
      <a href="#sectionFormacao" onClick={(e) => handleScroll(e, 'sectionFormacao')}>Formação</a>
      </nav>
    </div>
      <Button />
    </div>
  )
};

export default Header;