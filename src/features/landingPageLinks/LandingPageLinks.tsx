import CodeIcon from "@mui/icons-material/Code";
import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";

function LandingPageLinks() {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      data-testid="landing-page-links"
    >
      <Button
        onClick={() => navigate("/cv")}
        role="link"
        startIcon={<DescriptionIcon />}
        text="View CV"
      />
      <Button
        onClick={() => navigate("/create")}
        role="link"
        startIcon={<CreateIcon />}
        text="Create Portfolio"
      />
      <Button
        onClick={() => navigate("/projects")}
        role="link"
        startIcon={<CodeIcon />}
        text="View Projects"
      />
    </Stack>
  );
}

export { LandingPageLinks };
