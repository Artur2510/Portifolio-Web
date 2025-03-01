import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';
import { Project } from '../types/types';

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  const handleBackClick = () => {
    setActiveProject(null);
  };

  return (
    <section id='sectionProjetos' className='class-projects'>
      {!activeProject ? (
        <>
          <h2 className='projects-title'>Projetos</h2>
          <div className='projects-grid'>
            {projectsData.map((project) => (
              <div key={project.id} className='project-item' onClick={() => handleProjectClick(project)}>
                <img src={project.image} alt={project.name} className='project-image' />
                <p className='project-name'>{project.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className='project-title'>{activeProject.name}</h2>
          <p className='project-description'>{activeProject.description}</p>
          <a href={activeProject.githubLink} target='_blank' rel='noopener noreferrer' className='github-button'>Ver no GitHub</a>
          <button className='back-button' onClick={handleBackClick}>Voltar</button>
        </>
      )}
    </section>
  );
}

export default Projects;
