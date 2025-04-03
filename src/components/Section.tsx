interface SectionProps {
  id: string;
  title: string;
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  link?: string;
  isGrid?: boolean;
  content?: Array<{ title: string; text: string }>;
}

const Section = ({
  id,
  title,
  text,
  imageSrc,
  imageAlt,
  imagePosition,
  link,
  isGrid,
  content,
}: SectionProps) => {
  return (
    <section
      className={`section ${isGrid ? "grid-layout" : ""} ${
        imagePosition ? `image-${imagePosition}` : ""
      }`}
      id={id}
    >
      <h2 className="section__title">{title}</h2>
      <div
        className={`content ${
          imagePosition === "left" ? "image-left" : "image-right"
        }`}
      >
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt} className="section__image" />
        )}
        <div className="text">
          <p className="section__text">{text}</p>
          {link && (
            <a
              href={link}
              className="section__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dataset Link
            </a>
          )}
          {isGrid && (
            <div className="grid">
              {content?.map((item, idx) => (
                <div className="grid-item" key={idx}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
