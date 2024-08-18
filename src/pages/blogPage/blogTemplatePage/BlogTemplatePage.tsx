import { Book, Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { motion, useScroll, useSpring } from "framer-motion";
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

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Page>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-secondary z-20 origin-top-left"
        style={{ scaleX }}
      />
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
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-4"
      >
        <BlogArticle blog={blog} />
      </motion.div>
    </Page>
  );
};
