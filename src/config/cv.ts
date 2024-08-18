import { Cv } from "../domain/cv";
import { SkillType } from "../domain/skills";

export const cv: Cv = {
  cvSections: [
    {
      title: "Experience",
      items: [
        {
          name: "Senior Consultant Developer",
          location: "London",
          dateRange: "Feb. 20 - Present",
          details: [
            "Advocating software excellence through the effective implementation of coding practices, cross-role collaboration, and QA strategy",
            "Creating evolving and scalable architectures to meet business demands",
            "Cultivating the growth of devs via mentoring and knowledge sharing",
            "Digitally transforming clients in the healthcare and automotive industries",
            "Driving high-performing teams via Agile methodologies",
            "Working across the tech stack (frontend, backend, and infra)",
            "Contributing to a number of internal and external open-source projects",
          ],
        },
        {
          name: "English Teacher",
          location: "Shenzhen & Hong Kong",
          dateRange: "Sep. 17 - Aug. 19",
          details: [
            "Scored 97% Teaching English As A Foreign Language (GA Level 3)",
            "Scored 91% in the Chinese Language Proficiency Test (HSK Level 3)",
          ],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          name: "Bahmni",
          location: "Thoughtworks",
          dateRange: "Jul. 20 - Sep. 20",
          details: [
            "Enriched an existing open-source medical record and hospital system with SNOMED Clinical Terms for COVID-19",
          ],
        },
        {
          name: "OpenMRS",
          location: "Thoughtworks",
          dateRange: "Apr. 20 - Sep. 20",
          details: [
            "Developed a patient registration module for an open-source project supporting healthcare in developing countries",
          ],
        },
        {
          name: "Autonomous Robot Image Tagging System",
          location: "University Of Nottingham",
          dateRange: "Sep. 14 - Jul. 15",
          details: [
            "Developed a system composed of an autonomous image-capturing robot and a web app allowing users to tag objects in the images taken",
          ],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "Masters In Computer Science",
          location: "University Of Nottingham",
          dateRange: "Sep. 13 - Jul. 17",
        },
        {
          name: "3 A Levels",
          location: "Beaumont School",
          dateRange: "Sep. 11 - Aug. 13",
        },
        {
          name: "12 GCSEs",
          location: "Beaumont School",
          dateRange: "Sep. 09 - Aug. 11",
        },
      ],
    },
    {
      title: "Achievements",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          details: ["Understanding of AWS concepts and services"],
        },
        {
          name: "7Digital/Esendex For Software Quality",
          details: ["For the Autonomous Robot Image Tagging System project"],
        },
        {
          name: "C++ Hall Of Fame, University Of Nottingham",
          details: ["For a high attaining C++ game project"],
        },
      ],
    },
  ],
  skillsInfo: {
    skills: [
      {
        key: SkillType.language,
        name: "JavaScript",
      },
      {
        key: SkillType.language,
        name: "TypeScript",
      },
      {
        key: SkillType.language,
        name: "Java",
      },
      {
        key: SkillType.language,
        name: "Python",
      },
      {
        key: SkillType.language,
        name: "HTML",
      },
      {
        key: SkillType.language,
        name: "CSS",
      },
      {
        key: SkillType.framework,
        name: "React",
      },
      {
        key: SkillType.framework,
        name: "Redux",
      },
      {
        key: SkillType.platform,
        name: "Node.js",
      },
      {
        key: SkillType.framework,
        name: "Spring",
      },
      {
        key: SkillType.language,
        name: "SQL",
      },
      {
        key: SkillType.language,
        name: "PostgreSQL",
      },
      {
        key: SkillType.testing,
        name: "JUnit",
      },
      {
        key: SkillType.testing,
        name: "Jest",
      },
      {
        key: SkillType.testing,
        name: "Cypress",
      },
      {
        key: SkillType.testing,
        name: "Playwright",
      },
      {
        key: SkillType.infra,
        name: "Terraform",
      },
      {
        key: SkillType.infra,
        name: "AWS",
      },
      {
        key: SkillType.platform,
        name: "Docker",
      },
      {
        key: SkillType.platform,
        name: "OpenShift",
      },
      {
        key: SkillType.other,
        name: "Agile",
      },
      {
        key: SkillType.other,
        name: "Kanban",
      },
      {
        key: SkillType.other,
        name: "Clean Code",
      },
      {
        key: SkillType.testing,
        name: "TDD",
      },
      {
        key: SkillType.other,
        name: "CI/CD",
      },
      {
        key: SkillType.framework,
        name: "REST",
      },
      {
        key: SkillType.infra,
        name: "Microservices",
      },
      {
        key: SkillType.infra,
        name: "Microfrontends",
      },
      {
        key: SkillType.other,
        name: "BFF",
      },
      {
        key: SkillType.other,
        name: "Git",
      },
      {
        key: SkillType.platform,
        name: "GitHub",
      },
      {
        key: SkillType.platform,
        name: "Bitbucket",
      },
      {
        key: SkillType.platform,
        name: "GoCD",
      },
      {
        key: SkillType.platform,
        name: "GitHub Actions",
      },
      {
        key: SkillType.platform,
        name: "Jenkins",
      },
      {
        key: SkillType.platform,
        name: "Jira",
      },
      {
        key: SkillType.platform,
        name: "Kibana",
      },
      {
        key: SkillType.platform,
        name: "Snowflake",
      },
      {
        key: SkillType.other,
        name: "Mermaid",
      },
    ],
    languages: [
      {
        name: "English",
        level: 5,
      },
      {
        name: "Mandarin Chinese",
        level: 2,
      },
    ],
  },
};
