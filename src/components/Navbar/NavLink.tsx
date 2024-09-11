import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function LinkNav({ text, to }: { text: string; to?: string }) {
  return (
    <li className={styles["nav-link"]}>
      <Link to={to ? to : "/"}>{text}</Link>
    </li>
  );
}

export default LinkNav;
