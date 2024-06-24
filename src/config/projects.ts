import { ReactComponent as PortfolioDiagram } from "../assets/portfolio-context-diagram.svg";
import { SkillKey } from "../domain/cv";
import { Project } from "../domain/projects";

export const projects: Project[] = [
  {
    title: "Portfolio",
    description: "A portfolio web app",
    githubLink: "https://github.com/nickjhill14/portfolio",
    Image: PortfolioDiagram,
    skills: [
      { key: SkillKey.language, name: "TypeScript" },
      { key: SkillKey.framework, name: "React" },
      { key: SkillKey.infra, name: "Vercel" },
      { key: SkillKey.platform, name: "GitHub" },
    ],
  },
  {
    title: "React App Template",
    description: "A template for generating React web apps",
    githubLink: "https://github.com/nickjhill14/react-app-template",
    skills: [
      { key: SkillKey.language, name: "TypeScript" },
      { key: SkillKey.framework, name: "React" },
    ],
  },
  {
    title: "Doctor Advice FIS",
    description:
      "A fuzzy inference system (FIS) for advising a doctor whether a patient should be referred to a hospital for emergency investigations",
    githubLink: "https://github.com/nickjhill14/doctor-advice-fis",
    skills: [{ key: SkillKey.language, name: "R" }],
  },
  {
    title: "Bench Press Sense",
    description:
      "An analytical tool for users to improve their current bench-press form",
    githubLink: "https://github.com/nickjhill14/bench-press-sense",
    skills: [
      { key: SkillKey.language, name: "Python" },
      { key: SkillKey.other, name: "GrovePi" },
    ],
  },
  {
    title: "Football Formations",
    description:
      "An accessibility demo with the analogy of football formations",
    githubLink: "https://github.com/nickjhill14/football-formations",
    skills: [
      { key: SkillKey.language, name: "TypeScript" },
      { key: SkillKey.framework, name: "React" },
    ],
  },
];
