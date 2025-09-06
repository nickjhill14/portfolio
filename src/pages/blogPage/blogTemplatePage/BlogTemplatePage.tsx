import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Page } from "@/components/page/Page";
import { Blog } from "@/domain/blog";
import { BlogArticle } from "@/features/blogArticle/BlogArticle";

import { PortfolioRoutePaths } from "@/routing/routePaths";

type BlogTemplatePageProps = {
  blog: Blog;
};

export const BlogTemplatePage = ({ blog }: BlogTemplatePageProps) => {
  const navigate = useNavigate();

  return (
    <Page showHomeButton>
      <Button
        onClick={() => navigate(PortfolioRoutePaths.BLOG)}
        variant="outline"
        className="ml-2 self-start"
      >
        <ArrowLeft />
        Back
      </Button>
      <Typography.H1>{blog.title}</Typography.H1>
      <BlogArticle blog={blog} />
    </Page>
  );
};
