import { Project } from "@/domain/projects";
import { SkillType } from "@/domain/skills";

export const projects: Project[] = [
  {
    title: "Portfolio",
    description: "A portfolio web app.",
    githubLink: "https://github.com/nickjhill14/portfolio",
    skills: [
      { key: SkillType.language, name: "TypeScript" },
      { key: SkillType.framework, name: "React" },
      { key: SkillType.infra, name: "Vercel" },
      { key: SkillType.platform, name: "GitHub" },
    ],
  },
  {
    title: "React App Template",
    description: "A template for generating React web apps.",
    githubLink: "https://github.com/nickjhill14/react-app-template",
    skills: [
      { key: SkillType.language, name: "TypeScript" },
      { key: SkillType.framework, name: "React" },
    ],
  },
  {
    title: "Doctor Advice FIS",
    description:
      "A fuzzy inference system (FIS) for advising a doctor whether a patient should be referred to a hospital for emergency investigations.",
    githubLink: "https://github.com/nickjhill14/doctor-advice-fis",
    skills: [{ key: SkillType.language, name: "R" }],
  },
  {
    title: "Bench Press Sense",
    description:
      "An analytical tool for users to improve their current bench-press form.",
    githubLink: "https://github.com/nickjhill14/bench-press-sense",
    skills: [
      { key: SkillType.language, name: "Python" },
      { key: SkillType.other, name: "GrovePi" },
    ],
  },
  {
    title: "Football Formations",
    description:
      "An accessibility demo with the analogy of football formations.",
    githubLink: "https://github.com/nickjhill14/football-formations",
    skills: [
      { key: SkillType.language, name: "TypeScript" },
      { key: SkillType.framework, name: "React" },
    ],
  },
];
