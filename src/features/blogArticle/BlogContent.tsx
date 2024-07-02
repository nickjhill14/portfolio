import { Image } from "@nextui-org/image";
import { BlogSection, Code, ImgSrc } from "../../domain/blog";
import { CodeBlock } from "./CodeBlock";

type BlogContentProps = {
  blogSection: BlogSection;
};

const isImgSrc = (content: ImgSrc | unknown): content is ImgSrc =>
  (content as ImgSrc).src !== undefined;

const isCode = (content: Code | unknown): content is Code =>
  (content as Code).snippetPath !== undefined;

export const BlogContent = ({
  blogSection: { heading, content },
}: BlogContentProps) =>
  content.map((content, index) => {
    const key = `${heading}-content-${index}`;

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
        <Image key={key} src={content.src} alt={content.alt} width={500} />
      );
    } else if (isCode(content)) {
      return <CodeBlock key={key} snippetPath={content.snippetPath} />;
    }

    return content;
  });
