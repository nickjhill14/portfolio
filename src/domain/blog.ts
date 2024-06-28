type Paragraph = string;

type List = Array<string>;

type ImgSrc = { src: string; alt: string };

export type BlogSection = {
  heading: string;
  content: Array<Paragraph | List | ImgSrc>;
};

export type Blog = {
  title: string;
  sections: Array<BlogSection>;
  isDraft?: boolean;
};
