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
  [SkillType.language]: "bg-blue-700",
  [SkillType.framework]: "bg-amber-700",
  [SkillType.testing]: "bg-emerald-700",
  [SkillType.infra]: "bg-fuchsia-700",
  [SkillType.platform]: "bg-lime-700",
  [SkillType.other]: "bg-gray-700",
};
