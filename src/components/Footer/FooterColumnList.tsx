import { ReactNode } from "react";
import styles from "./footer.module.css";

function FooterColumnList({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className={styles["footer-column"]}>
      <h4 className={styles["column-heading"]}>{heading}</h4>
      <ul className={styles["footer-column-list"]}>{children}</ul>
    </div>
  );
}

export default FooterColumnList;
