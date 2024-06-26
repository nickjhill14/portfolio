import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";

export const BlogPage = () => {
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
      <h1 className="text-4xl">Blog</h1>
      <p>🚧 Page under construction 🚧</p>
    </Page>
  );
};
