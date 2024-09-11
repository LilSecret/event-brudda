import PublicInfo from "./PublicInfo";
import ProfileAccount from "./ProfileAccount";
import ProfileSecurity from "./ProfileSecurity";
import ProfileInterests from "./ProfileInterests";
import ProfileHosted from "./ProfileHosted";
import ProfileUpcoming from "./ProfileUpcoming";
import ProfileSideBar from "./ProfileSideBar";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import styles from "./profile.module.css";
import Context from "../../components/Context/Context";

function ProfilePage() {
  const activePage = useSelector((state: RootState) => state.profilePage.activePage);
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return (
      <Context>
        <h2 className="mx-auto heading">Please Sign in to view your profile page.</h2>
      </Context>
    );
  }

  return (
    <div className={styles["profile-main"]}>
      <ProfileSideBar />

      <div className={styles["profile-content"]}>
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
