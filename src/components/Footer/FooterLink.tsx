import styles from "./footer.module.css";

function FooterLink({ text, link = "/" }: { link?: string; text: string }) {
  return (
    <li>
      <a className={styles["footer-link"]} href={link}>
        {text}
      </a>
    </li>
  );
}

export default FooterLink;
