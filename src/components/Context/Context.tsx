import { ReactNode } from "react";
import styles from "./context.module.css";

function Context({ children }: { children: ReactNode }) {
  return (
    <div className="main-inline-mw">
      <div className={styles.context}>{children}</div>
    </div>
  );
}

export default Context;
