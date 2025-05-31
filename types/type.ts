export type WorkExDTO = {
  id: string;
  image: string;
  position: string;
  company: string;
  jobdesk: Array<string>;
  tech: Array<string>;
  startDate: string;
  endDate: string;
};
export type WorkExFormDTO = {
  id: string;
  image: string;
  position: string;
  company: string;
  jobdesk: { value: string }[];
  tech: { value: string }[];
  startDate: string;
  endDate: string;
};

export type ProjectDTO = {
  id: string;
  image: string;
  title: string;
  description: string;
  tech: Array<string>;
  linkGithub: string | "";
  linkDemo: string | "";
  isDemo: boolean;
  isGithub: boolean;
};
export type ProfileDTO = {
  image: string;
  email: string;
  headers: string;
  description: string;
  location: string;
  position: string;
  available: boolean;
  whatsapp: string;
  cv: string;
};

export type TechStack = {
  id: string;
  tech: string;
  name: string;
};
export type DashboardDTO = {
  ExperienceCount: string;
  ProjectCount: string;
  techStackCount: string;
};
 