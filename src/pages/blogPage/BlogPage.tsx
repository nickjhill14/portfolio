import { Link } from "@heroui/link";
import { Button } from "@heroui/react";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BugIcon from "../../assets/animatedIcons/system-solid-21-bug-in-bug.json";
import { Page } from "../../components/page/Page";
import { basicInfo } from "../../config/basicInfo";
import { blogs } from "../../config/blog";
import { PortfolioRoutePaths } from "../../routing/PortfolioRouting";

export const BlogPage = () => {
  const navigate = useNavigate();

  const bugIconRef = useRef<Player>(null);

  useEffect(() => {
    bugIconRef.current?.playFromBeginning();
  }, []);

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
          onPress={() =>
            navigate(
              `${PortfolioRoutePaths.BLOG}/${blogs[0].title
                .replaceAll(" ", "-")
                .toLowerCase()}`,
            )
          }
          color="primary"
          size="lg"
          className="self-start"
          startContent={<Player ref={bugIconRef} icon={BugIcon} />}
          onMouseEnter={() => bugIconRef.current?.playFromBeginning()}
        >
          {blogs[0].title}
        </Button>
      </motion.div>
    </Page>
  );
};
