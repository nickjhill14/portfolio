import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

type PageProps = {
  showHomeButton: boolean;
};

export const Page = ({
  showHomeButton,
  children,
}: PropsWithChildren<PageProps>) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      {showHomeButton && (
        <Button
          startContent={<Home />}
          onPress={() => navigate("/")}
          color="primary"
          className="self-start"
        >
          Go Home
        </Button>
      )}

      {children}
    </div>
  );
};
