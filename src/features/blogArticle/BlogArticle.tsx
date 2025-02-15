import { Divider } from "@heroui/divider";
import { AccessTimeFilled, CalendarMonth } from "@mui/icons-material";
import { format } from "date-fns";
import { Section } from "../../components/section/Section";
import { Blog } from "../../domain/blog";
import { BlogContent } from "./BlogContent";

type BlogArticleProps = {
  blog: Blog;
};

export const BlogArticle = ({
  blog: { sections, date, isDraft, readTime },
}: BlogArticleProps) => (
  <Section className="md:w-2/3">
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <CalendarMonth />
        <p className="font-light">{format(date, "dd/MM/yyyy")}</p>
      </div>
      <div className="flex items-center gap-1">
        <AccessTimeFilled />
        <p className="font-light">Est. Read Time: {readTime} mins</p>
      </div>
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
