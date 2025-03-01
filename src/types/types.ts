export interface Skill {
    id: string;
    name: string;
    image: string;
    description: string;
  }
  
  export interface SkillsData {
    hardSkills: Skill[];
    softSkills: Skill[];
    otherSkills: Skill[];
  }
  
  export type Section = 'hardSkills' | 'softSkills' | 'otherSkills' | null;

  export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    githubLink: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface ButtonProps {
  href: string;
  imgSrc: string;
  altText: string;
  text: string;
}