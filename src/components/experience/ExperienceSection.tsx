import { Experience } from "../../domain";

type ExperienceSectionProps = {
  experience: Experience;
};

function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { name, location, dates } = experience;

  return (
    <>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{dates}</p>
    </>
  );
}

export { ExperienceSection };
