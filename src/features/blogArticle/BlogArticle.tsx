import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Divider } from "@nextui-org/divider";
import { Section } from "../../components/section/Section";
import { Blog } from "../../domain/blog";
import { BlogContent } from "./BlogContent";

type BlogArticleProps = {
  blog: Blog;
};

export const BlogArticle = ({
  blog: { title, sections, isDraft, readTime },
}: BlogArticleProps) => (
  <Section headingText={title} className="md:w-2/3">
    <div className="flex items-center gap-1">
      <AccessTimeFilledIcon />
      <p className="font-light">Est. Read Time: {readTime} mins</p>
    </div>
    {isDraft && <strong>🚧 Draft 🚧</strong>}
    {sections.map((section, index) => (
      <div key={`section-${index}`} className="flex flex-col gap-2">
        <h3 className="text-secondary">{section.heading}</h3>
        <BlogContent blogSection={section} />
        {index < sections.length - 1 && <Divider />}
      </div>
    ))}
  </Section>
);
