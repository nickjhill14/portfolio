import { ExperienceSection } from "../../components/experience/ExperienceSection";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <>
      <h1>Experience</h1>
      {experienceInfo.map((experience) => (
        <ExperienceSection experience={experience} key={experience.name} />
      ))}
    </>
  );
}

export { ExperiencePage };
