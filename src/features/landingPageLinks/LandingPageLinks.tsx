import { Button } from "@/components/ui/button";
import { BookOpen, Code, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PortfolioRoutePaths = {
  CV: "/cv",
  PROJECTS: "/projects",
  BLOG: "/blog",
} as const;

export const LandingPageLinks = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row gap-4 flex-wrap"
      data-testid="landing-page-links"
    >
      <Button onClick={() => navigate(PortfolioRoutePaths.CV)}>
        <FileText />
        View CV
      </Button>
      <Button onClick={() => navigate(PortfolioRoutePaths.PROJECTS)}>
        <Code />
        View Projects
      </Button>
      <Button onClick={() => navigate(PortfolioRoutePaths.BLOG)}>
        <BookOpen />
        View Blog
      </Button>
    </div>
  );
};
