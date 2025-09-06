import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { AlertTriangle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Page } from "@/components/page/Page";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Page showHomeButton={false} className="flex flex-col items-center gap-4">
      <AlertTriangle className="h-12 w-12" />
      <Typography.H1 className="text-center">
        Something went wrong!
      </Typography.H1>
      <Button onClick={() => navigate("/")}>
        <Home />
        Go Home
      </Button>
    </Page>
  );
};
