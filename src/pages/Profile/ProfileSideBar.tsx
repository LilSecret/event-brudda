import {
  faAddressCard,
  faCalendarWeek,
  faEye,
  faHeart,
  faLock,
  faSquareH,
} from "@fortawesome/free-solid-svg-icons";
import SidebarNavItem from "./SidebarNavItem";

function ProfileSideBar() {
  return (
    <aside className="sidebar">
      <ul className="navigation-sidebar">
        <SidebarNavItem icon={faEye} label="Public Info" page="publicInfo" />
        <SidebarNavItem icon={faAddressCard} label="Account" page="account" />
        <SidebarNavItem icon={faLock} label="Security" page="security" />
        <SidebarNavItem icon={faHeart} label="Interests" page="interests" />
        <SidebarNavItem icon={faSquareH} label="Your Hosted Events" page="hosted" />
        <SidebarNavItem icon={faCalendarWeek} label="Upcoming Events" page="upcoming" />
      </ul>
    </aside>
  );
}

export default ProfileSideBar;
