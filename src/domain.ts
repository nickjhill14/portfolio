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
  dates: string;
};

type ExperienceInfo = Experience[];

type Education = {
  qualification: string;
  institution: string;
  dates: string;
};

type EducationInfo = Education[];

export {
  type BasicInfo,
  type Experience,
  type ExperienceInfo,
  type Education,
  type EducationInfo,
};
