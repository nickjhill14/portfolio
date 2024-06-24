import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { cv } from "../../config/cv";
import { CvSection } from "../../features/cvSection/CvSection";

export const CvPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Button
        startContent={<Home />}
        onPress={() => navigate("/")}
        color="primary"
        className="self-start"
      >
        Go Home
      </Button>
      <h1 className="text-4xl">CV</h1>
      <CvSection cv={cv} />
    </Page>
  );
};
