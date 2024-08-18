import { type Skill } from "./skills";

export type Language = { name: string; level: number };

export type SkillsInfo = { skills: Skill[]; languages: Language[] };

export type CvSectionItem = {
  name: string;
  location?: string;
  dateRange?: string;
  details?: string[];
};

export type CvSection = {
  title: string;
  items: CvSectionItem[];
};

export type Cv = {
  cvSections: CvSection[];
  skillsInfo: SkillsInfo;
};
