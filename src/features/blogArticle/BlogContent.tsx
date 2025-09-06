import { BlogSection, Code, ImgSrc } from "@/domain/blog";
import { Typography } from "@/components/ui/typography";
import { CodeBlock } from "./CodeBlock";

interface BlogContentProps {
  blogSection: BlogSection;
}

const isImgSrc = (content: unknown): content is ImgSrc =>
  (content as ImgSrc).src !== undefined;

const isCode = (content: unknown): content is Code =>
  (content as Code).snippetPath !== undefined;

export const BlogContent = ({ blogSection }: BlogContentProps) => (
  <>
    {blogSection.content.map((content, index) => {
      const key = `${blogSection.heading}-content-${index}`;

      if (typeof content === "string") {
        return <Typography.P key={key}>{content}</Typography.P>;
      } else if (Array.isArray(content)) {
        return (
          <Typography.List key={key}>
            {content.map((item, index) => (
              <li key={`${key}-${index}`}>{item}</li>
            ))}
          </Typography.List>
        );
      } else if (isImgSrc(content)) {
        return (
          <img
            key={key}
            src={content.src}
            alt={content.alt}
            width={500}
            className="rounded"
          />
        );
      } else if (isCode(content)) {
        return <CodeBlock key={key} snippetPath={content.snippetPath} />;
      }

      return content;
    })}
  </>
);
