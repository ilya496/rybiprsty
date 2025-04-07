export interface Post {
  title: string;
  author: string;
  date: string;
  tags: {
    value: string;
    theme: PostTagTheme;
  }[];
  imageUrl: string;
  excerpt: string;
}

export type PostLayout = "vertical" | "horizontal";
export type PostTagTheme = "purple" | "blue" | "pink";
