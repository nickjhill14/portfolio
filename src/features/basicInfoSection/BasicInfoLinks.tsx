import { Link } from "@/components/Link";
import { Linkedin, Mail } from "lucide-react";
import { siGithub } from "simple-icons";

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
    <Link href={`mailto:${email}`} isExternal>
      <Mail />
      {email}
    </Link>
    <Link href={`https://www.linkedin.com/in/${linkedIn}`} isExternal>
      <Linkedin />
      {linkedIn}
    </Link>
    <Link href={`https://www.github.com/${gitHub}`} isExternal>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        aria-label="GitHub"
      >
        <path d={siGithub.path} />
      </svg>
      {gitHub}
    </Link>
  </div>
);
