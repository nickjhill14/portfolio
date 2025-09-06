import { Cv } from "@/domain/cv";
import { SkillType } from "@/domain/skills";

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
            "Full-stack development using modern and emerging technologies",
            "Creating evolving and scalable architectures to meet business demands",
            "Mentored developers, fostering growth through knowledge sharing",
            "Driving high-performing teams via Agile methodologies",
            "Digitally transforming clients across a range of industries including food, automotive, and healthcare",
          ],
          collapsibleDetails: [
            {
              title: "Food Industry",
              details: [
                "Led the frontend development of a food recipe development app that utilises machine learning. Built in React, TypeScript, .NET, Python, and Azure",
                "Coordinated with Product Owners, Machine Learning Engineers, and Data Engineers on building a scalable and transformative app",
              ],
            },
            {
              title: "Automotive Industry",
              details: [
                "Led development of business-critical features, improving user experience and positively impacting 500,000+ customers. Collaborated closely with Product Owners, Lead Engineers, and Designers",
                "Built and maintained numerous Microfrontends and Microservices using React, TypeScript, Express, NestJS, Java, and Spring Boot",
                "Defined and implemented a robust QA strategy, leveraging tools like Percy, Playwright, Cypress, Jest, and JUnit to improve reliability",
                "Developed a UI component library using Storybook to improve developer efficiency and design consistency",
                "Established a reliable Continuous Integration strategy with a number of build pipelines facilitating frequent production deployments",
                "Improved business intelligence through the development of an analytics dashboard using Snowflake and Kafka",
                "Documented REST APIs and architectures using OpenAPI and Mermaid respectively",
              ],
            },
            {
              title: "Healthcare Industry",
              details: [
                "Built a tool to digitise a crucial healthcare process, reducing costs whilst improving employee quality-of-life and patient care",
                "Developed and integrated a React UI with a number of Python Lambda functions hosted in AWS and provisioned using Terraform",
              ],
            },
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
            "Enriched an existing open-source medical record and hospital system with SNOMED Clinical Terms for COVID-19.",
          ],
        },
        {
          name: "OpenMRS",
          location: "Thoughtworks",
          dateRange: "Apr. 20 - Sep. 20",
          details: [
            "Developed a patient registration module for an open-source project supporting healthcare in developing countries.",
          ],
        },
        {
          name: "Autonomous Robot Image Tagging System",
          location: "University Of Nottingham",
          dateRange: "Sep. 14 - Jul. 15",
          details: [
            "Developed a system composed of an autonomous image-capturing robot and a web app allowing users to tag objects in the images taken.",
          ],
        },
      ],
    },
    {
      title: "Achievements",
      items: [
        {
          name: "Machine Learning Project Publication, Thoughtworks",
          details: [
            "Credited in the Wall Street Journal article for a recipe development app for Mondelez",
          ],
          link: "https://www.wsj.com/articles/oreo-owner-mondelez-taps-ai-to-tweak-its-classic-snacks-6fa4c4cd?reflink=desktopwebshare_permalink",
        },
        {
          name: "AWS Certified Cloud Practitioner",
          details: ["Understanding of AWS concepts and services"],
        },
        {
          name: "7Digital/Esendex Award For Software Quality",
          details: ["For the Autonomous Robot Image Tagging System project"],
        },
        {
          name: "C++ Hall Of Fame, University Of Nottingham",
          details: ["For a high attaining C++ game project"],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "Masters In Computer Science (1st Class)",
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
  },
};
