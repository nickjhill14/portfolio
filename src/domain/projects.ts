import { Skill } from "./skills";

export type Project = {
  title: string;
  description: string;
  skills: Skill[];
  githubLink: string;
  imgSrc?: string;
};
