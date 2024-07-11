import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterSocialIcon({
  link,
  icon,
}: {
  link: string;
  icon: IconDefinition;
}) {
  return (
    <a className="footer-social-icon" href={link}>
      <FontAwesomeIcon className="footer-icon" data-type="social" icon={icon} />
    </a>
  );
}

export default FooterSocialIcon;
