import { Button } from "@heroui/react";
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "../../assets/animatedIcons/system-solid-199-attribution-in-attribution.json";
import HomeIcon from "../../assets/animatedIcons/system-solid-41-home-hover-home-2.json";
import { Page } from "../../components/page/Page";

// TODO: Test
export const ErrorPage = () => {
  const navigate = useNavigate();

  const homeIconRef = useRef<Player>(null);
  const personIconRef = useRef<Player>(null);

  useEffect(() => {
    personIconRef.current?.playFromBeginning();
  }, []);

  return (
    <Page showHomeButton={false} className="flex flex-col items-center gap-4">
      <Player ref={personIconRef} icon={PersonIcon} size={50} />
      <h1 className="text-5xl text-center">Something went wrong!</h1>
      <Button
        startContent={<Player ref={homeIconRef} icon={HomeIcon} />}
        onMouseEnter={() => homeIconRef.current?.playFromBeginning()}
        onPress={() => navigate("/")}
        color="primary"
      >
        Go Home
      </Button>
    </Page>
  );
};
