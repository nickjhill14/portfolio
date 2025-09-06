import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { Blog } from "@/domain/blog";
import { BlogContent } from "./BlogContent";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type BlogArticleProps = {
  blog: Blog;
};

export const BlogArticle = ({ blog }: BlogArticleProps) => (
  <Card className="md:w-2/3">
    <CardHeader>
      <div className="flex flex-col md:flex-row gap-2">
        <span className="flex items-center gap-1">
          <Calendar size={15} />
          <Typography.P className="text-sm">
            {format(blog.date, "dd/MM/yyyy")}
          </Typography.P>
        </span>
        <span className="flex items-center gap-1">
          <Clock size={15} />
          <Typography.P className="text-sm">
            Est. Read Time: {blog.readTime} mins
          </Typography.P>
        </span>
      </div>
      {blog.isDraft && <strong>🚧 Draft 🚧</strong>}
    </CardHeader>
    <CardContent>
      {blog.sections.map((section, index) => (
        <div key={section.heading} className="flex flex-col gap-2">
          <Typography.H3>{section.heading}</Typography.H3>
          <BlogContent blogSection={section} />
          {index < blog.sections.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </CardContent>
  </Card>
);
