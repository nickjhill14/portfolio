import { Book, Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../../components/page/Page";
import { Blog } from "../../../domain/blog";
import { BlogArticle } from "../../../features/blogArticle/BlogArticle";
import { PortfolioRoutePaths } from "../../../routing/portfolioRouting/PortfolioRouting";

type BlogTemplatePageProps = {
  blog: Blog;
};

export const BlogTemplatePage = ({ blog }: BlogTemplatePageProps) => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="flex gap-4">
        <Button
          startContent={<Home />}
          onPress={() => navigate(PortfolioRoutePaths.BASE)}
          color="primary"
          className="self-start"
        >
          Go Home
        </Button>
        <Button
          startContent={<Book />}
          onPress={() => navigate(PortfolioRoutePaths.BLOG)}
          color="primary"
          className="self-start"
        >
          Back
        </Button>
      </div>
      <h1 className="text-4xl">{blog.title}</h1>
      <BlogArticle blog={blog} />
    </Page>
  );
};
