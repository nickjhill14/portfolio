import { Link } from "@nextui-org/link";
import { BasicInfo } from "../../domain/basicInfo";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, phone, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div className="flex flex-col gap-4">
    <h1 className="text-4xl">{name}</h1>
    <h2 className="text-2l text-secondary font-bold">{role}</h2>
    <div className="flex gap-4">
      <Link
        href={`mailto:${email}`}
        isExternal
        underline="hover"
        showAnchorIcon
      >
        {email}
      </Link>
      {phone && (
        <Link href={`tel:${phone}`} isExternal underline="hover" showAnchorIcon>
          {phone}
        </Link>
      )}
      <Link
        href={`https://www.linkedin.com/in/${linkedIn}`}
        isExternal
        underline="hover"
        showAnchorIcon
      >
        {linkedIn}
      </Link>
      <Link
        href={`https://www.github.com/${gitHub}`}
        underline="hover"
        isExternal
        showAnchorIcon
      >
        {gitHub}
      </Link>
    </div>
  </div>
);
