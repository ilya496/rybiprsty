import Post from "../components/Post";
import { Post as IPost } from "../types/post";

const recent: IPost[] = [
  {
    title: "Lorem, ipsum dolor. Sin cere",
    author: "John Doe",
    date: "2023-10-01",
    tags: [
      { value: "TypeScript", theme: "blue" },
      { value: "Programming", theme: "purple" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Learn the basics of TypeScript and how it can improve your JavaScript code.",
  },
  {
    title: "Lorem, ipsum",
    author: "Jane Smith",
    date: "2023-09-15",
    tags: [
      { value: "React", theme: "pink" },
      { value: "Frontend", theme: "blue" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Discover the best practices for building scalable React applications.",
  },
  {
    title: "React Best",
    author: "Jane Smith",
    date: "2023-09-15",
    tags: [
      { value: "React", theme: "pink" },
      { value: "Frontend", theme: "blue" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Discover the best practices for building scalable React applications. Discover the best practices for building scalable React applications. Discover the best practices for building scalable React applications.",
  },
];

const posts: IPost[] = [
  {
    title: "Lorem, ipsum dolor. Sin cere",
    author: "John Doe",
    date: "2023-10-01",
    tags: [
      { value: "TypeScript", theme: "blue" },
      { value: "Programming", theme: "purple" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Learn the basics of TypeScript and how it can improve your JavaScript code.",
  },
  {
    title: "Lorem, ipsum dolor. Sin cere",
    author: "John Doe",
    date: "2023-10-01",
    tags: [
      { value: "TypeScript", theme: "blue" },
      { value: "Programming", theme: "purple" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Learn the basics of TypeScript and how it can improve your JavaScript code.",
  },
  {
    title: "Lorem, ipsum dolor. Sin cere",
    author: "John Doe",
    date: "2023-10-01",
    tags: [
      { value: "TypeScript", theme: "blue" },
      { value: "Programming", theme: "purple" },
    ],
    imageUrl: "https://placehold.co/600x300",
    excerpt:
      "Learn the basics of TypeScript and how it can improve your JavaScript code.",
  },
];

function BlogPage() {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__recent">
          {recent.map((post, index) => (
            <Post
              key={index}
              {...post}
              layout={index !== 0 ? "horizontal" : "vertical"}
            />
          ))}
        </div>

        <div className="blog__grid">
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
