export enum SkillType {
  language = "Language",
  framework = "Framework",
  testing = "Testing",
  infra = "Infra",
  platform = "Platform",
  other = "Other",
}

export type Skill = { key: SkillType; name: string };

export const skillKeyColours: Record<SkillType, string> = {
  [SkillType.language]: "bg-blue-300",
  [SkillType.framework]: "bg-amber-300",
  [SkillType.testing]: "bg-emerald-300",
  [SkillType.infra]: "bg-fuchsia-300",
  [SkillType.platform]: "bg-lime-300",
  [SkillType.other]: "bg-gray-300",
};
