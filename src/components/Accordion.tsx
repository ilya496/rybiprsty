import { ReactNode } from "react";

type AccordionProps = {
  children: ReactNode;
  allowMultiple?: boolean;
};

const Accordion = ({ children, allowMultiple = false }: AccordionProps) => {
  return (
    <div
      className="accordion"
      data-allow-multiple={allowMultiple ? "true" : "false"}
    >
      {children}
    </div>
  );
};

export default Accordion;
