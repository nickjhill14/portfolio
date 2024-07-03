import { Biotech, Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import {
  BlogRoutePaths,
  PortfolioRoutePaths,
} from "../../routing/portfolioRouting/PortfolioRouting";

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
      <h2 className="text-2l text-secondary font-bold">Testing</h2>
      <Button
        startContent={<Biotech />}
        onPress={() =>
          navigate(
            `${PortfolioRoutePaths.BLOG}${BlogRoutePaths.REACT_COMPONENT_TESTING}`,
          )
        }
        color="primary"
        className="self-start"
      >
        React Component Testing
      </Button>
    </Page>
  );
};
