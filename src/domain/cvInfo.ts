type SectionDetails = { details?: string[] };

type Experience = {
  name: string;
  location: string;
  dateRange: string;
} & SectionDetails;

type ExperienceInfo = Experience[];

type Education = {
  qualification: string;
  institution: string;
  dateRange: string;
} & SectionDetails;

type EducationInfo = Education[];

type Project = {
  name: string;
  institution: string;
  dateRange: string;
} & SectionDetails;

type ProjectInfo = Project[];

type Achievement = {
  name: string;
  description: string;
};

type AchievementInfo = Achievement[];

type Skill = { name: string };

type Language = { name: string; level: number };

type SkillInfo = { skills: Skill[]; languages: Language[] };

type CvInfo = {
  experienceInfo: ExperienceInfo;
  educationInfo: EducationInfo;
  skillInfo: SkillInfo;
  projectInfo: ProjectInfo;
  achievementsInfo: AchievementInfo;
};

export type {
  Achievement,
  AchievementInfo,
  CvInfo,
  Education,
  EducationInfo,
  Experience,
  ExperienceInfo,
  Language,
  Project,
  ProjectInfo,
  Skill,
  SkillInfo,
};
