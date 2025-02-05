import { Player } from "@lordicon/react";
import { Button } from "@nextui-org/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/animatedIcons/system-solid-161-trending-flat-hover-ternd-flat-4.json";
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

  const backIconRef = useRef<Player>(null);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Page showHomeButton>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-secondary z-20 origin-top-left"
        style={{ scaleX }}
      />
      <Button
        startContent={
          <span className="rotate-180">
            <Player ref={backIconRef} icon={BackIcon} />
          </span>
        }
        onMouseEnter={() => backIconRef.current?.playFromBeginning()}
        onPress={() => navigate(PortfolioRoutePaths.BLOG)}
        color="primary"
        className="self-start"
      >
        Back
      </Button>
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
