import styles from "./navbar.module.css";

function NavLink({ text, link }: { text: string; link?: string }) {
  return (
    <li className={styles["nav-link"]}>
      <a href={link ? link : "/"}>{text}</a>
    </li>
  );
}

export default NavLink;
