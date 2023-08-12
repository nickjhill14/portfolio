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

export {
  type BasicInfo,
  type Experience,
  type ExperienceInfo,
  type Education,
  type EducationInfo,
  type Project,
  type ProjectInfo,
  type Achievement,
  type AchievementInfo,
};
