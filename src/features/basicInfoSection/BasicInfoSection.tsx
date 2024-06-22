import { Link } from "@nextui-org/link";
import { BasicInfo } from "../../domain/basicInfo";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, phone, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div className="flex flex-col gap-2">
    <h1 className="text-4xl">{name}</h1>
    <h2 className="text-2l font-bold">{role}</h2>
    <div className="flex gap-8">
      <Link href={`mailto:${email}`} isExternal showAnchorIcon>
        {email}
      </Link>
      {phone && (
        <Link href={`tel:${phone}`} isExternal showAnchorIcon>
          {phone}
        </Link>
      )}
      <Link
        href={`https://www.linkedin.com/in/${linkedIn}`}
        isExternal
        showAnchorIcon
      >
        {linkedIn}
      </Link>
      <Link href={`https://www.github.com/${gitHub}`} isExternal showAnchorIcon>
        {gitHub}
      </Link>
    </div>
  </div>
);
