import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Rating } from "@mui/material";
import { Divider } from "@nextui-org/divider";
import { Section } from "../../components/section/Section";
import { SkillKey, SkillsInfo } from "../../domain/cv";

type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

export const SkillsSection = ({
  skillsInfo: { skills, languages },
}: SkillsSectionProps) => {
  const skillKeyColours: Record<SkillKey, string> = {
    [SkillKey.language]: "bg-blue-500",
    [SkillKey.framework]: "bg-amber-500",
    [SkillKey.testing]: "bg-emerald-500",
    [SkillKey.infra]: "bg-fuchsia-500",
    [SkillKey.platform]: "bg-lime-500",
    [SkillKey.other]: "bg-gray-500",
  };

  return (
    <Section headingText="Skills">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
          {skills.map(({ key, name }) => (
            <div
              key={name}
              className={`${skillKeyColours[key]} p-2 rounded-full max-w-fit text-white text-small`}
            >
              {name}
            </div>
          ))}
        </div>
        <h3 className="text-secondary">Key</h3>
        <div className="flex gap-2">
          {Object.keys(skillKeyColours).map((key) => (
            <div
              key={key}
              className={`${
                skillKeyColours[key as SkillKey]
              } p-2 rounded-full max-w-fit text-white text-small`}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
      <Divider />
      {languages.map(({ name, level }) => (
        <div key={name}>
          <h3 className="text-secondary">{name}</h3>
          <Rating
            name="read-only"
            value={level}
            icon={<CircleIcon />}
            emptyIcon={<CircleOutlinedIcon />}
            readOnly
          />
        </div>
      ))}
    </Section>
  );
};
