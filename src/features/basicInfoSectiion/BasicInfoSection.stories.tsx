import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoSection } from "./BasicInfoSection";

const meta = {
  title: "Features/BasicInfoSection",
  component: BasicInfoSection,
} satisfies Meta<typeof BasicInfoSection>;

type Story = StoryObj<typeof meta>;

const basicInfoWithoutPhone: BasicInfo = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  linkedIn: faker.internet.userName(),
  gitHub: faker.internet.userName(),
};

const basicInfoWithPhone: BasicInfo = {
  ...basicInfoWithoutPhone,
  phone: faker.phone.number("+44 7## ### ###"),
};

const Default: Story = {
  args: { basicInfo: basicInfoWithoutPhone },
};

const WithPhone: Story = {
  args: { basicInfo: basicInfoWithPhone },
};

export default meta;
export { Default, WithPhone };
