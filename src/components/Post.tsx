import { LuArrowUpRight } from "react-icons/lu";

function Post() {
  return (
    <article className="post">
      <img
        src="https://placehold.co/600x300"
        alt="Post image"
        className="post__img"
      />
      <div className="post__content">
        <div className="post__heading">
          <span className="post__author">John Doe</span>
          <span className="post__dot"></span>
          <time dateTime="2025-04-07" className="post__date">
            {new Date().toDateString()}
          </time>
        </div>
        <div className="post__body">
          <h3 className="post__title">
            Post title <LuArrowUpRight />
          </h3>
          <p className="post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            possimus!
          </p>
        </div>
        <div className="post__tags">
          <span className="post__tag post__tag--purple">Design</span>
          <span className="post__tag post__tag--blue">Research</span>
        </div>
      </div>
    </article>
  );
}

export default Post;
