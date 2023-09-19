import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function LandingPageLinks() {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      data-testid="landing-page-links"
    >
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/cv")}
        role="link"
        startIcon={<DescriptionIcon />}
        variant="contained"
      >
        View CV
      </Button>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/create")}
        role="link"
        startIcon={<CreateIcon />}
        variant="contained"
      >
        Create
      </Button>
      <Button
        component={Link}
        role="link"
        variant="contained"
        startIcon={<GitHubIcon />}
        to="https://github.com/nickjhill14/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Repo
      </Button>
    </Stack>
  );
}

export { LandingPageLinks };
