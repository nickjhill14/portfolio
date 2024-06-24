import { Cv } from "../domain/cv";
import { SkillKey } from "../domain/skills";

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
            "Digitally transforming clients in the healthcare and automotive industries",
            "Driving the development of high-performing via Agile methodologies",
            "Working across the tech stack (frontend, backend, and infra)",
            "Contributing to internal, external, and open-source projects globally",
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
          name: "React App Template",
          location: "Personal",
          dateRange: "Sep. 23 - Present",
        },
        {
          name: "Portfolio Generator",
          location: "Personal",
          dateRange: "Aug. 23 - Present",
        },
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
        key: SkillKey.language,
        name: "JavaScript",
      },
      {
        key: SkillKey.language,
        name: "TypeScript",
      },
      {
        key: SkillKey.language,
        name: "Java",
      },
      {
        key: SkillKey.language,
        name: "Python",
      },
      {
        key: SkillKey.language,
        name: "HTML",
      },
      {
        key: SkillKey.language,
        name: "CSS",
      },
      {
        key: SkillKey.framework,
        name: "React",
      },
      {
        key: SkillKey.framework,
        name: "Redux",
      },
      {
        key: SkillKey.platform,
        name: "Node.js",
      },
      {
        key: SkillKey.framework,
        name: "Spring",
      },
      {
        key: SkillKey.language,
        name: "SQL",
      },
      {
        key: SkillKey.language,
        name: "PostgreSQL",
      },
      {
        key: SkillKey.testing,
        name: "JUnit",
      },
      {
        key: SkillKey.testing,
        name: "Jest",
      },
      {
        key: SkillKey.testing,
        name: "Cypress",
      },
      {
        key: SkillKey.testing,
        name: "Playwright",
      },
      {
        key: SkillKey.infra,
        name: "Terraform",
      },
      {
        key: SkillKey.infra,
        name: "AWS",
      },
      {
        key: SkillKey.platform,
        name: "Docker",
      },
      {
        key: SkillKey.platform,
        name: "OpenShift",
      },
      {
        key: SkillKey.other,
        name: "Agile",
      },
      {
        key: SkillKey.other,
        name: "Kanban",
      },
      {
        key: SkillKey.other,
        name: "Clean Code",
      },
      {
        key: SkillKey.testing,
        name: "TDD",
      },
      {
        key: SkillKey.other,
        name: "CI/CD",
      },
      {
        key: SkillKey.framework,
        name: "REST",
      },
      {
        key: SkillKey.infra,
        name: "Microservices",
      },
      {
        key: SkillKey.infra,
        name: "Microfrontends",
      },
      {
        key: SkillKey.other,
        name: "BFF",
      },
      {
        key: SkillKey.other,
        name: "Git",
      },
      {
        key: SkillKey.platform,
        name: "GitHub",
      },
      {
        key: SkillKey.platform,
        name: "Bitbucket",
      },
      {
        key: SkillKey.platform,
        name: "GoCD",
      },
      {
        key: SkillKey.platform,
        name: "GitHub Actions",
      },
      {
        key: SkillKey.platform,
        name: "Jenkins",
      },
      {
        key: SkillKey.platform,
        name: "Jira",
      },
      {
        key: SkillKey.platform,
        name: "Kibana",
      },
      {
        key: SkillKey.platform,
        name: "Snowflake",
      },
      {
        key: SkillKey.other,
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
