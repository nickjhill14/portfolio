import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
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
    <div className="flex align-middle gap-1">
      <MailIcon />
      <Link
        href={`mailto:${email}`}
        isExternal
        underline="hover"
        showAnchorIcon
      >
        {email}
      </Link>
    </div>
    <div className="flex align-middle gap-1">
      <LinkedInIcon />
      <Link
        href={`https://www.linkedin.com/in/${linkedIn}`}
        isExternal
        underline="hover"
        showAnchorIcon
      >
        {linkedIn}
      </Link>
    </div>
    <div className="flex align-middle gap-1">
      <GitHubIcon />
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
