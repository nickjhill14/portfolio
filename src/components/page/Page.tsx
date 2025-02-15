import { Button } from "@heroui/react";
import { Player } from "@lordicon/react";
import { PropsWithChildren, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/animatedIcons/system-solid-41-home-hover-home-2.json";

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

  const homeIconRef = useRef<Player>(null);

  return (
    <div className={`flex flex-col gap-4${className ? className : ""}`}>
      {showHomeButton && (
        <Button
          startContent={<Player ref={homeIconRef} icon={HomeIcon} />}
          onMouseEnter={() => homeIconRef.current?.playFromBeginning()}
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
