import { useState } from 'react';
import { skillsData } from '../data/skillsData';
import '../styles/Tecnologies.css';
import { Skill } from '../types/types';

type Section = 'hardSkills' | 'softSkills' | 'otherSkills' | null;

function Tecnologies() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSectionClick = (section: Section) => {
    setActiveSection(activeSection === section ? null : section);
    setHoveredSkill(null);
  };

  const handleMouseEnter = (skillId: string) => {
    setHoveredSkill(skillId);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const handleBackClick = () => {
    setActiveSection(null); 
    setHoveredSkill(null);
  };

  const getSectionTitle = (section: Section): string => {
    switch (section) {
      case 'hardSkills':
        return 'Hard Skills';
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
          <h2>TECNOLOGIAS</h2>
          <div className="accordion-item">
            <h3 onClick={() => handleSectionClick('hardSkills')} className="accordion-title">Hard Skills</h3>
            <h3 onClick={() => handleSectionClick('softSkills')} className="accordion-title">Soft Skills</h3>
            <h3 onClick={() => handleSectionClick('otherSkills')} className="accordion-title">Outras Tecnologias</h3>
          </div>
        </>
      ) : (
        <>
          <h2 className='skill-title'>{getSectionTitle(activeSection)}</h2>
          {activeSection === 'hardSkills' && renderSkills(skillsData.hardSkills)}
          {activeSection === 'softSkills' && renderSkills(skillsData.softSkills)}
          {activeSection === 'otherSkills' && renderSkills(skillsData.otherSkills)}
          <button className="back-button" onClick={handleBackClick}>Voltar</button>
        </>
      )}
    </section>
  );
}

export default Tecnologies;
