import { Post as IPost, PostLayout } from "../types/post";
import { truncate } from "../utils/truncate";

interface PostProps extends IPost {
  layout?: PostLayout;
}

function Post({
  title,
  author,
  date,
  tags,
  imageUrl,
  excerpt,
  layout = "vertical",
}: PostProps) {
  return (
    <article className={`post post--${layout}`}>
      <img src={imageUrl} alt="Post image" className="post__img" />
      <div className="post__content">
        <div className="post__heading">
          <span className="post__author">{author}</span>
          <span className="post__dot"></span>
          <time dateTime="2025-04-07" className="post__date">
            {date}
          </time>
        </div>
        <div className="post__body">
          <h3 className="post__title">{title}</h3>
          <p className="post__description">{truncate(excerpt)}</p>
        </div>
        <div className="post__tags">
          {tags.map((tag) => (
            <span
              key={tag.value}
              className={`post__tag post__tag--${tag.theme}`}
            >
              {tag.value}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Post;
