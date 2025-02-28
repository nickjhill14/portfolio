import { Button } from "@heroui/react";
import { Player } from "@lordicon/react";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CvIcon from "../../assets/animatedIcons/system-solid-14-article-hover-article.json";
import BookIcon from "../../assets/animatedIcons/system-solid-19-book-morph-book.json";
import CodeIcon from "../../assets/animatedIcons/system-solid-34-code-hover-code.json";
import { PortfolioRoutePaths } from "../../routing/PortfolioRouting";

export const LandingPageLinks = () => {
  const navigate = useNavigate();

  const bookIconRef = useRef<Player>(null);
  const cvIconRef = useRef<Player>(null);
  const codeIconRef = useRef<Player>(null);

  useEffect(() => {
    setTimeout(() => {
      bookIconRef.current?.playFromBeginning();
      cvIconRef.current?.playFromBeginning();
      codeIconRef.current?.playFromBeginning();
    }, 1750);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row gap-4 flex-wrap"
      data-testid="landing-page-links"
    >
      <Button
        onPress={() => navigate(PortfolioRoutePaths.CV)}
        color="primary"
        size="lg"
        onMouseEnter={() => cvIconRef.current?.playFromBeginning()}
        startContent={<Player ref={cvIconRef} icon={CvIcon} />}
      >
        View CV
      </Button>
      <Button
        color="primary"
        size="lg"
        onPress={() => navigate(PortfolioRoutePaths.PROJECTS)}
        onMouseEnter={() => codeIconRef.current?.playFromBeginning()}
        startContent={<Player ref={codeIconRef} icon={CodeIcon} />}
      >
        View Projects
      </Button>
      <Button
        color="primary"
        size="lg"
        onPress={() => navigate(PortfolioRoutePaths.BLOG)}
        onMouseEnter={() => bookIconRef.current?.playFromBeginning()}
        startContent={<Player ref={bookIconRef} icon={BookIcon} />}
      >
        View Blog
      </Button>
    </div>
  );
};
