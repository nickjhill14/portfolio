import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Section } from "../../components/section/Section";
import { Blog } from "../../domain/blog";

type BlogArticleProps = {
  blog: Blog;
};

export const BlogArticle = ({
  blog: { title, sections, isDraft },
}: BlogArticleProps) => (
  <Section headingText={title} className="md:w-2/3">
    {isDraft && <strong>🚧 This blog is still in draft mode!</strong>}
    {sections.map(({ heading, content }, index) => (
      <div key={`Section ${index}`}>
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
          }
          return (
            <Image key={key} src={content.src} alt={content.alt} width={500} />
          );
        })}
        <Divider />
      </div>
    ))}
  </Section>
);
