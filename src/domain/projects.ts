import { FunctionComponent, SVGProps } from "react";

import { Skill } from "./skills";

export type Project = {
  title: string;
  description: string;
  skills: Skill[];
  githubLink: string;
  Image?: FunctionComponent<SVGProps<SVGSVGElement>>;
};
