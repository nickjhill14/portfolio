import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { siGithub } from "simple-icons";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer
      className="flex flex-col items-center gap-1 pt-4"
      data-testid="footer"
    >
      <div className="flex justify-center gap-4">
        <div>
          <Button asChild aria-label="Visit repo" size="icon">
            <a
              href="https://github.com/nickjhill14/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-label="GitHub"
              >
                <path d={siGithub.path} />
              </svg>
            </a>
          </Button>
        </div>
        <div>
          <Button
            aria-label={`Change to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
      <Typography.P className="text-xs">
        Developed by Nicholas Hill
      </Typography.P>
    </footer>
  );
};
