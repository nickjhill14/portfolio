type BasicInfo = {
  name: string;
  role: string;
  email: string;
  phoneNumber: string;
  linkedIn: string;
  github: string;
};

type Experience = {
  name: string;
  location: string;
  dateRange: string;
};

type ExperienceInfo = Experience[];

type Education = {
  qualification: string;
  institution: string;
  dateRange: string;
};

type EducationInfo = Education[];

type Project = {
  name: string;
  institution: string;
  dateRange: string;
};

type ProjectInfo = Project[];

type Achievement = {
  name: string;
  description: string;
};

type AchievementInfo = Achievement[];

type Skill = string;

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
  BasicInfo,
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
