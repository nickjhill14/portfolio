import { faker } from "@faker-js/faker";
import { BasicInfo } from "@/domain/basicInfo";
import { Blog, BlogSection } from "@/domain/blog";
import { Cv, CvSection, CvSectionItem, SkillsInfo } from "@/domain/cv";
import { Project } from "@/domain/projects";
import { Skill, SkillType } from "@/domain/skills";

export const buildBasicInfo = (override?: Partial<BasicInfo>): BasicInfo => ({
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  linkedIn: faker.internet.userName(),
  gitHub: faker.internet.userName(),
  ...override,
});

export const buildCv = (override?: Partial<Cv>): Cv => ({
  cvSections: [],
  skillsInfo: buildSkillsInfo(),
  ...override,
});

export const buildCvSection = (override?: Partial<CvSection>): CvSection => ({
  title: `Test CV Section ${faker.number.int()}`,
  items: [],
  ...override,
});

export const buildCvSectionItem = (
  override?: Partial<CvSectionItem>,
): CvSectionItem => ({
  name: faker.person.jobTitle(),
  ...override,
});

export const buildDateRange = (): string =>
  faker.date
    .betweens({
      from: "2011-01-08T00:00:00.000Z",
      to: "2020-02-03T00:00:00.000Z",
      count: 2,
    })
    .map((date) =>
      date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
      }),
    )
    .join(" - ");

export const buildSkillsInfo = (
  override?: Partial<SkillsInfo>,
): SkillsInfo => ({
  skills: [],
  ...override,
});

export const buildSkill = (override?: Partial<Skill>): Skill => ({
  key: SkillType.other,
  name: faker.commerce.productName(),
  ...override,
});

export const buildProject = (override?: Partial<Project>): Project => ({
  title: faker.hacker.noun(),
  description: faker.lorem.sentence(),
  githubLink: faker.internet.url(),
  skills: [],
  ...override,
});

export const buildBlog = (override?: Partial<Blog>): Blog => ({
  title: faker.hacker.noun(),
  date: faker.date.past(),
  readTime: faker.number.int(),
  sections: [],
  ...override,
});

export const buildBlogSection = (
  override?: Partial<BlogSection>,
): BlogSection => ({
  heading: faker.hacker.noun(),
  content: [],
  ...override,
});
