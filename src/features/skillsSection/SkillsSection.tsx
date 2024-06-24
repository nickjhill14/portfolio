import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Chip, Rating } from "@mui/material";
import { Divider } from "@nextui-org/divider";
import { Section } from "../../components/section/Section";
import { SkillsInfo } from "../../domain/cv";

type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

export const SkillsSection = ({
  skillsInfo: { skills, languages },
}: SkillsSectionProps) => (
  <Section headingText="Skills">
    <div className="flex gap-2 flex-wrap">
      {skills.map(({ name }) => (
        <Chip label={name} variant="outlined" key={name} />
      ))}
    </div>
    <Divider />
    <div>
      {languages.map(({ name, level }) => (
        <div key={name}>
          <p>{name}</p>
          <Rating
            name="read-only"
            value={level}
            icon={<CircleIcon />}
            emptyIcon={<CircleOutlinedIcon />}
            readOnly
          />
        </div>
      ))}
    </div>
  </Section>
);
