import { Link } from "@nextui-org/link";
import { BasicInfo } from "../../domain/basicInfo";

type BasicInfoSectionProps = {
  basicInfo: BasicInfo;
};

export const BasicInfoSection = ({
  basicInfo: { name, role, email, phone, linkedIn, gitHub },
}: BasicInfoSectionProps) => (
  <div>
    <h2>{name}</h2>
    <h3>{role}</h3>
    <div>
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
