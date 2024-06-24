import { BasicInfo } from "../../domain/basicInfo";
import { BasicInfoLinks } from "./BasicInfoLinks";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl">{name}</h1>
    <h2 className="text-2l text-secondary font-bold">{role}</h2>
    <BasicInfoLinks email={email} linkedIn={linkedIn} gitHub={gitHub} />
  </div>
);
