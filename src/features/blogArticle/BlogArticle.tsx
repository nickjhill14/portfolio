import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Section } from "../../components/section/Section";
import { Blog, Code, ImgSrc } from "../../domain/blog";
import { CodeBlock } from "./CodeBlock";

type BlogArticleProps = {
  blog: Blog;
};

const isImgSrc = (content: ImgSrc | unknown): content is ImgSrc =>
  (content as ImgSrc).src !== undefined;

const isCode = (content: Code | unknown): content is Code =>
  (content as Code).snippetPath !== undefined;

export const BlogArticle = ({
  blog: { title, sections, isDraft, readTime },
}: BlogArticleProps) => (
  <Section headingText={title} className="md:w-2/3">
    <div className="flex items-center gap-1">
      <AccessTimeFilledIcon />
      <p className="font-light">Est. Read Time: {readTime} mins</p>
    </div>
    {isDraft && <strong>🚧 Draft 🚧</strong>}
    {sections.map(({ heading, content }, index) => (
      <div key={`Section ${index}`} className="flex flex-col gap-2">
        <h3 className="text-secondary">{heading}</h3>
        {content.map((content, index) => {
          const key = `${heading} content ${index}`;

          if (typeof content === "string") {
            return <p key={key}>{content}</p>;
          } else if (Array.isArray(content)) {
            return (
              <ul key={key} className="pl-6">
                {content.map((item, index) => (
                  <li key={`${key} list item ${index}`} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            );
          } else if (isImgSrc(content)) {
            return (
              <Image
                key={key}
                src={content.src}
                alt={content.alt}
                width={500}
              />
            );
          } else if (isCode(content)) {
            return <CodeBlock key={key} snippetPath={content.snippetPath} />;
          }

          return content;
        })}
        {index < sections.length - 1 && <Divider />}
      </div>
    ))}
  </Section>
);
