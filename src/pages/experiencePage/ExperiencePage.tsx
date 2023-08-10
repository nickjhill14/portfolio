import { ExperienceSection } from "../../components/experience/ExperienceSection";
import { Experience } from "../../domain";

type ExperiencePageProps = {
  experiences: Experience[];
};

function ExperiencePage({ experiences }: ExperiencePageProps) {
  return (
    <>
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <ExperienceSection experience={experience} key={experience.name} />
      ))}
    </>
  );
}

export { ExperiencePage };
