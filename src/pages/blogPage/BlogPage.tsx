import { Biotech } from "@mui/icons-material";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { basicInfo } from "../../config/basicInfo";
import { blogs } from "../../config/blog";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";

export const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <Page showHomeButton>
      <h1 className="text-4xl">Blog</h1>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-4"
      >
        <p>
          For blog request and/or any queries. Please contact me here:{" "}
          <Link
            href={`mailto:${basicInfo.email}`}
            isExternal
            underline="hover"
            showAnchorIcon
          >
            {basicInfo.email}
          </Link>
        </p>
        <Button
          startContent={<Biotech />}
          onPress={() =>
            navigate(
              `${PortfolioRoutePaths.BLOG}/${blogs[0].title
                .replaceAll(" ", "-")
                .toLowerCase()}`,
            )
          }
          color="primary"
          className="self-start"
        >
          {blogs[0].title}
        </Button>
      </motion.div>
    </Page>
  );
};
