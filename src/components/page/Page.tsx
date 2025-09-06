import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type PageProps = {
  showHomeButton: boolean;
  className?: string;
};

export const Page = ({
  showHomeButton,
  className,
  children,
}: PropsWithChildren<PageProps>) => {
  const navigate = useNavigate();

  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {showHomeButton && (
        <Button onClick={() => navigate("/")} className="self-start">
          <Home />
          Go Home
        </Button>
      )}
      {children}
    </div>
  );
};
