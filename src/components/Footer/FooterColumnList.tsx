import { ReactNode } from "react";

function FooterColumnList({
  heading,
  children,
}: {
  heading: ReactNode | string;
  children: ReactNode;
}) {
  return (
    <div className="footer-column">
      {typeof heading === "string" ? (
        <h4 className="column-title-heading">Heading</h4>
      ) : (
        <div className="column-heading">{heading}</div>
      )}
      <ul>{children}</ul>
    </div>
  );
}

export default FooterColumnList;
