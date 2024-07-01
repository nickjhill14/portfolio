import { ReactElement } from "react";

type Paragraph = string;

type List = Array<string | ReactElement>;

export type ImgSrc = { src: string; alt: string };

export type Code = { code: string };

export type BlogSection = {
  heading: string;
  content: Array<Paragraph | List | ImgSrc | Code | ReactElement>;
};

export type Blog = {
  title: string;
  sections: Array<BlogSection>;
  readTime: number;
  isDraft?: boolean;
};
