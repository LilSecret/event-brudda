import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TPActiveTab } from "./Profile";

function SidebarNavItem({
  icon,
  label,
  tab,
  activeTab,
  setActiveTab,
}: {
  icon: IconDefinition;
  label: string;
  tab: TPActiveTab;
  activeTab: TPActiveTab;
  setActiveTab: (tab: TPActiveTab) => void;
}) {
  return (
    <li
      className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
      onClick={() => {
        setActiveTab(tab);
      }}
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </li>
  );
}

export default SidebarNavItem;
