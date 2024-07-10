import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarIcon({ icon, name }: { icon: IconDefinition; name: string }) {
  return (
    <div className="nav-icon-wrapper">
      <FontAwesomeIcon className="nav-icon" icon={icon} />
      <div className="nav-icon-tooltip">{name}</div>
    </div>
  );
}

export default NavbarIcon;
