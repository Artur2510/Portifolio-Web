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