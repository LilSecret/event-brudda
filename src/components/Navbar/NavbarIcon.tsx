import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";

function NavbarIcon({ icon, name }: { icon: IconDefinition; name: string }) {
  return (
    <div className={styles["nav-icon-wrapper"]}>
      <FontAwesomeIcon className={styles["nav-icon"]} icon={icon} />
      <div className={styles["nav-icon-tooltip"]}>{name}</div>
    </div>
  );
}

export default NavbarIcon;
