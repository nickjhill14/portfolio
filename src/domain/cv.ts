type Skill = { name: string };

type Language = { name: string; level: number };

type SkillsInfo = { skills: Skill[]; languages: Language[] };

type CvSectionItems = {
  name: string;
  location?: string;
  dateRange?: string;
  details?: string[];
};

type CvSection = {
  title: string;
  items?: CvSectionItems[];
};

type Cv = {
  cvSections?: CvSection[];
  skillsInfo: SkillsInfo;
};

export type { Cv, CvSection, CvSectionItems, Language, Skill, SkillsInfo };
