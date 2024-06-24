export enum SkillKey {
  language = "Language",
  framework = "Framework",
  testing = "Testing",
  infra = "Infra",
  platform = "Platform",
  other = "Other",
}

export type Skill = { key: SkillKey; name: string };

export const skillKeyColours: Record<SkillKey, string> = {
  [SkillKey.language]: "bg-blue-300",
  [SkillKey.framework]: "bg-amber-300",
  [SkillKey.testing]: "bg-emerald-300",
  [SkillKey.infra]: "bg-fuchsia-300",
  [SkillKey.platform]: "bg-lime-300",
  [SkillKey.other]: "bg-gray-300",
};
