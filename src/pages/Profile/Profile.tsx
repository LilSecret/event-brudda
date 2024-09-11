import {
  faAddressCard,
  faCalendarWeek,
  faEye,
  faHeart,
  faLock,
  faSquareH,
} from "@fortawesome/free-solid-svg-icons";
import SidebarNavItem from "./SidebarNavItem";
import PublicInfo from "./PublicInfo";
import ProfileAccount from "./ProfileAccount";
import ProfileSecurity from "./ProfileSecurity";
import ProfileInterests from "./ProfileInterests";
import ProfileHosted from "./ProfileHosted";
import ProfileUpcoming from "./ProfileUpcoming";
import ProfileSideBar from "./ProfileSideBar";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function ProfilePage() {
  const activePage = useSelector((state: RootState) => state.profilePage.activePage);

  return (
    <div className="profile-main">
      <ProfileSideBar />

      <div className="profile-content">
        {activePage === "publicInfo" && <PublicInfo />}
        {activePage === "account" && <ProfileAccount />}
        {activePage === "security" && <ProfileSecurity />}
        {activePage === "interests" && <ProfileInterests />}
        {activePage === "hosted" && <ProfileHosted />}
        {activePage === "upcoming" && <ProfileUpcoming />}
      </div>
    </div>
  );
}

export default ProfilePage;
