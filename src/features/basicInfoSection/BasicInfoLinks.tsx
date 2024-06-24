import { Link } from "@nextui-org/link";

type BasicInfoLinksProps = {
  email: string;
  linkedIn: string;
  gitHub: string;
};

export const BasicInfoLinks = ({
  email,
  linkedIn,
  gitHub,
}: BasicInfoLinksProps) => (
  <div className="flex flex-col gap-4 md:flex-row">
    <Link href={`mailto:${email}`} isExternal underline="hover" showAnchorIcon>
      {email}
    </Link>
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
);
