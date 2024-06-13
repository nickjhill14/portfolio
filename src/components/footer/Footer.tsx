import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { useColourMode } from "../../contexts/themeContext/ThemeContext";

export const Footer = () => {
  const { toggleColourMode } = useColourMode();

  const [lightMode, setLightMode] = useState(false);

  const handleToggleColourMode = () => {
    setLightMode(!lightMode);
    toggleColourMode();
  };

  return (
    <footer className="flex w-full justify-between p-2" data-testid="footer">
      <Button
        onClick={handleToggleColourMode}
        isIconOnly
        aria-label={lightMode ? "Toggle dark mode" : "Toggle light mode"}
      >
        {lightMode ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
      <Button
        as={Link}
        aria-label="Visit repo"
        href="https://github.com/nickjhill14/portfolio"
        isExternal
      >
        <GitHubIcon />
      </Button>
    </footer>
  );
};
