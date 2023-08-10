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
  // TODO: Use a date type
  dates: string;
  details?: string[];
  company?: string;
};

export { type BasicInfo, type Experience };
