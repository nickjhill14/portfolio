import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";

export const LandingPageLinks = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row gap-4 flex-wrap"
      data-testid="landing-page-links"
    >
      <Button
        onClick={() => navigate(PortfolioRoutePaths.CV)}
        startContent={<DescriptionIcon />}
        color="primary"
      >
        View CV
      </Button>
      <Button
        color="primary"
        onPress={() => navigate(PortfolioRoutePaths.PROJECTS)}
        startContent={<CodeIcon />}
      >
        View Projects
      </Button>
    </div>
  );
};
