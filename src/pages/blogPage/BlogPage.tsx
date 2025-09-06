import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";
import { Typography } from "@/components/ui/typography";
import { Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Page } from "@/components/page/Page";
import { basicInfo } from "@/config/basicInfo";
import { blogs } from "@/config/blog";

import { PortfolioRoutePaths } from "@/routing/routePaths";

export const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <Page showHomeButton>
      <Typography.H1>Blog</Typography.H1>
      <div className="flex flex-col gap-4">
        <Typography.P className="inline-flex">
          For blog request and/or any queries. Please contact me here:
          <Link href={`mailto:${basicInfo.email}`} isExternal className="ml-1">
            {basicInfo.email}
          </Link>
          .
        </Typography.P>
        <Button
          onClick={() =>
            navigate(
              `${PortfolioRoutePaths.BLOG}/${blogs[0].title
                .replaceAll(" ", "-")
                .toLowerCase()}`,
            )
          }
          className="self-start"
        >
          <Bug />
          {blogs[0].title}
        </Button>
      </div>
    </Page>
  );
};
