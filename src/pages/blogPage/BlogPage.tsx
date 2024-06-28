import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { reactTestingBlog } from "../../config/blog";
import { BlogArticle } from "../../features/blogArticle/BlogArticle";

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
      <BlogArticle blog={reactTestingBlog} />
    </Page>
  );
};
