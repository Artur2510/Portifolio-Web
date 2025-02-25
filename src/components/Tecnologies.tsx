import { useState } from 'react';
import { skillsData } from '../data/skillsData';
import '../styles/Tecnologies.css';
import { Skill } from '../types/types';

type Section = 'hardSkills' | 'softSkills' | 'otherSkills' | 'front-end' | 'back-end' | null;

function Tecnologies() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setHoveredSkill(null);
  };
  

  const handleMouseEnter = (skillId: string) => {
    setHoveredSkill(skillId);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const handleBackClick = () => {
    if (activeSection === 'front-end' || activeSection === 'back-end') {
      setActiveSection('hardSkills');
    } else if (activeSection === 'hardSkills') {
      setActiveSection(null);
    } else {
      setActiveSection(null);
    }
    setHoveredSkill(null);
  };
  
  
  const getSectionTitle = (section: Section): string => {
    switch (section) {
      case 'hardSkills':
        return 'Hard Skills';
      case 'front-end':
        return 'Front-end';
      case 'back-end':
        return 'Back-end';
      case 'softSkills':
        return 'Soft Skills';
      case 'otherSkills':
        return 'Outras Tecnologias';
      default:
        return 'TECNOLOGIAS';
    }
  };

  const renderSkills = (skills: Skill[]) => {
    const hoveredSkillData = skills.find(skill => skill.id === hoveredSkill);
  
    return (
      <div className="skills-container">
        <div className="skills-left">
          {skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-icon"
                onMouseEnter={() => handleMouseEnter(skill.id)}
                onMouseLeave={handleMouseLeave}
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="skills-right">
          {hoveredSkillData && <p>{hoveredSkillData.description}</p>}
        </div>
      </div>
    );
  };

  return (
    <section id='sectionTecnologias' className="class-tecnologies">
      {!activeSection ? (
        <>
          <h2 className="tecnologiesTitle">Habilidades</h2>
          <div className="accordion-item">
            <h3 onClick={() => handleSectionClick('hardSkills')} className="accordion-title">Hard Skills</h3>
            <h3 onClick={() => handleSectionClick('softSkills')} className="accordion-title">Soft Skills</h3>
            <h3 onClick={() => handleSectionClick('otherSkills')} className="accordion-title">Outras Habilidades</h3>
          </div>
        </>
      ) : activeSection === 'hardSkills' ? (
        <>
          <h2 className='skill-title'>Escolha uma área de Hard Skills</h2>
          <div className="accordion-item">
            <h3 onClick={() => handleSectionClick('front-end')} className="accordion-title">Front-end</h3>
            <h3 onClick={() => handleSectionClick('back-end')} className="accordion-title">Back-end</h3>
          </div>
          <button className="back-button" onClick={handleBackClick}>Voltar</button>
        </>
      ) : (
        <>
          <h2 className='skill-title'>{getSectionTitle(activeSection)}</h2>
          {activeSection === 'front-end' && renderSkills(skillsData.frontend)}
          {activeSection === 'back-end' && renderSkills(skillsData.backend)}
          {activeSection === 'softSkills' && renderSkills(skillsData.softSkills)}
          {activeSection === 'otherSkills' && renderSkills(skillsData.otherSkills)}
          <button className="back-button" onClick={handleBackClick}>Voltar</button>
        </>
      )}
    </section>
  );
}

export default Tecnologies;
