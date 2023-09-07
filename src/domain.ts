import { MuiIcon } from "./utils/muiTypes";

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
  icon: MuiIcon;
  description: string;
};

type AchievementInfo = Achievement[];

type Skill = string;

type Language = { name: string; level: number };

type SkillInfo = { skills: Skill[]; languages: Language[] };

export {
  type Achievement,
  type AchievementInfo,
  type BasicInfo,
  type Education,
  type EducationInfo,
  type Experience,
  type ExperienceInfo,
  type Language,
  type Project,
  type ProjectInfo,
  type Skill,
  type SkillInfo,
};
