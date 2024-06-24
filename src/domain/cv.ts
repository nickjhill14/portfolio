import { type Skill } from "./skills";

export type Language = { name: string; level: number };

export type SkillsInfo = { skills: Skill[]; languages: Language[] };

export type CvSectionItems = {
  name: string;
  location?: string;
  dateRange?: string;
  details?: string[];
};

export type CvSection = {
  title: string;
  items: CvSectionItems[];
};

export type Cv = {
  cvSections: CvSection[];
  skillsInfo: SkillsInfo;
};
