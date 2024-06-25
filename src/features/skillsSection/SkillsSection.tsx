import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import HelpIcon from "@mui/icons-material/Help";
import { Rating } from "@mui/material";
import { Divider } from "@nextui-org/divider";
import { Button, Tooltip } from "@nextui-org/react";
import { Chip } from "../../components/chip/Chip";
import { Section } from "../../components/section/Section";
import { SkillsInfo } from "../../domain/cv";
import { skillKeyColours } from "../../domain/skills";
import { SkillsKey } from "../SkillsKey/SkillsKey";

type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

export const SkillsSection = ({
  skillsInfo: { skills, languages },
}: SkillsSectionProps) => (
  <Section headingText="Skills">
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 flex-wrap">
        {skills
          .sort(({ key: aKey }, { key: bKey }) => aKey.localeCompare(bKey))
          .map(({ key, name }) => (
            <Chip key={name} text={name} className={skillKeyColours[key]} />
          ))}
      </div>
      <Tooltip content={<SkillsKey />} showArrow placement="bottom-end">
        <Button
          isIconOnly
          disabled
          className="max-w-fit self-end"
          aria-label="View key"
        >
          <HelpIcon />
        </Button>
      </Tooltip>
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
