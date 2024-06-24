import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export const LandingPageLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 flex-wrap" data-testid="landing-page-links">
      <Button
        onClick={() => navigate("/cv")}
        startContent={<DescriptionIcon />}
        color="primary"
      >
        View CV
      </Button>
      <Button
        color="primary"
        onPress={() => navigate("/projects")}
        startContent={<CodeIcon />}
      >
        View Projects
      </Button>
    </div>
  );
};
