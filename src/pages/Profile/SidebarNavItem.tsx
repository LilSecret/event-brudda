import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { profileSActions, TPActivePage } from "../../state/Profile/profileSlice";
import styles from "./profile.module.css";

function SidebarNavItem({
  icon,
  label,
  page,
}: {
  icon: IconDefinition;
  label: string;
  page: TPActivePage;
}) {
  const activePage = useSelector((state: RootState) => state.profilePage.activePage);
  const dispatch = useDispatch();

  const handlePageClick = () => {
    dispatch(profileSActions.changeActivePage(page));
  };

  return (
    <li
      className={`${styles["sidebar-tab"]} ${activePage === page ? styles.active : ""}`}
      onClick={handlePageClick}>
      <FontAwesomeIcon icon={icon} />
      {label}
    </li>
  );
}

export default SidebarNavItem;
