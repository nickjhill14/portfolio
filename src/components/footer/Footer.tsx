import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer
      className="flex w-full justify-center p-4 gap-4"
      data-testid="footer"
    >
      <motion.div whileHover={{ scale: 1.2 }}>
        <Button
          as={Link}
          aria-label="Visit repo"
          href="https://github.com/nickjhill14/portfolio"
          isExternal
          color="primary"
          isIconOnly
        >
          <GitHubIcon />
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Button
          aria-label={`Change to ${theme === "light" ? "dark" : "light"} mode`}
          color="primary"
          isIconOnly
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </Button>
      </motion.div>
    </footer>
  );
};
