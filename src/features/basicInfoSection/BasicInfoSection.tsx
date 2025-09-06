import { BasicInfo } from "@/domain/basicInfo";
import { Typography } from "@/components/ui/typography";
import { BasicInfoLinks } from "./BasicInfoLinks";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div className="space-y-4">
    <Typography.H1>{name}</Typography.H1>
    <Typography.H2>{role}</Typography.H2>
    <BasicInfoLinks email={email} linkedIn={linkedIn} gitHub={gitHub} />
  </div>
);
