import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Alert, Chip, Divider, Rating } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SkillsInfo } from "../../domain/cv";

export type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

export const SkillsSection = ({
  skillsInfo: { skills, languages },
}: SkillsSectionProps) => (
  <Section headingText="Skills">
    {skills.length === 0 ? (
      <Alert severity="warning">No skills provided</Alert>
    ) : (
      <div>
        {skills.map(({ name }) => (
          <Chip label={name} variant="outlined" key={name} />
        ))}
      </div>
    )}
    <Divider />
    {languages.length === 0 ? (
      <Alert severity="warning">No languages provided</Alert>
    ) : (
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
    )}
  </Section>
);
