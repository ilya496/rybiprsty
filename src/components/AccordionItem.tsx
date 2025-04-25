import { ReactNode, useState } from "react";

type AccordionItemProps = {
  title: string;
  open?: boolean;
  children: ReactNode;
};

const AccordionItem = ({
  title,
  children,
  open = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}>
      <button
        className="accordion__header"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="accordion__icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="accordion__content">
        <div className="accordion__inner">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
