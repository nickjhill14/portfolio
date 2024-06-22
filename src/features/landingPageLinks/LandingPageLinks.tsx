import { Link } from "@nextui-org/link";
import { useNavigate } from "react-router-dom";

export const LandingPageLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-8" data-testid="landing-page-links">
      <Link onPress={() => navigate("/cv")} underline="hover">
        View CV
      </Link>
      <Link onPress={() => navigate("/projects")} underline="hover">
        View Projects
      </Link>
    </div>
  );
};
