import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";

function FooterSocialIcon({ link, icon }: { link: string; icon: IconDefinition }) {
  return (
    <a className={styles["footer-social-icon"]} href={link}>
      <FontAwesomeIcon className={styles["footer-icon"]} data-type="social" icon={icon} />
    </a>
  );
}

export default FooterSocialIcon;
