import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";
import FooterSocialIcon from "./FooterSocialIcon";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";

function FooterCta() {
  return (
    <div className={styles["footer-cta"]}>
      <Logo type="light" />
      <ul className={styles["footer-column-list"]}>
        <li>
          <FontAwesomeIcon className={styles["footer-icon"]} icon={faEnvelope} />
          <span>jackson.graham@brudda.com</span>
        </li>
        <li>
          <FontAwesomeIcon className={styles["footer-icon"]} icon={faPhone} />
          <span>+1 (208) 555-0112</span>
        </li>
        <li>
          <div className={styles.socials}>
            <FooterSocialIcon link="https://www.instagram.com" icon={faInstagram} />
            <FooterSocialIcon link="https://www.facebook.com" icon={faFacebook} />
            <FooterSocialIcon link="https://www.twitter.com" icon={faTwitter} />
            <FooterSocialIcon link="https://www.youtube.com" icon={faYoutube} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FooterCta;
