import { ReactNode } from "react";

function FooterColumnList({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="footer-column">
      <h4 className="column-heading">{heading}</h4>
      <ul className="footer-column-list">{children}</ul>
    </div>
  );
}

export default FooterColumnList;
