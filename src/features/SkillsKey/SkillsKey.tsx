import { Chip } from "../../components/chip/Chip";
import { skillKeyColours, type SkillType } from "../../domain/skills";

export const SkillsKey = () => (
  <div className="flex flex-col gap-2 p-2">
    <h3 className="text-secondary">Key</h3>
    <div className="flex gap-2 flex-wrap">
      {Object.keys(skillKeyColours).map((key) => (
        <Chip
          key={key}
          text={key}
          className={skillKeyColours[key as SkillType]}
        />
      ))}
    </div>
  </div>
);
