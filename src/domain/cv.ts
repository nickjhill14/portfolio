import { Skill } from "./skills";

export type SkillsInfo = { skills: Skill[] };

export type CollapsibleDetail = { title: string; details: string[] };

export type CvSectionItem = {
  name: string;
  link?: string;
  location?: string;
  dateRange?: string;
  details?: string[];
  collapsibleDetails?: CollapsibleDetail[];
};

export type CvSection = {
  title: string;
  items: CvSectionItem[];
};

export type Cv = {
  cvSections: CvSection[];
  skillsInfo: SkillsInfo;
};
