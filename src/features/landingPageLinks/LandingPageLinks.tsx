import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button as MuiButton, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
        text="Create"
      />
      <MuiButton
        component={Link}
        role="link"
        variant="contained"
        startIcon={<GitHubIcon />}
        to="https://github.com/nickjhill14/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Repo
      </MuiButton>
    </Stack>
  );
}

export { LandingPageLinks };
