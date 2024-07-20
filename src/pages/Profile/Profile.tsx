import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./styles.css";
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
import { useState } from "react";

export type TPActiveTab =
  | "publicInfo"
  | "account"
  | "security"
  | "interests"
  | "hosted"
  | "upcoming";

function Profile() {
  const [activeTab, setActiveTab] = useState<TPActiveTab>("publicInfo");

  return (
    <div className="profile-page">
      <header>
        <Navbar />
      </header>

      <main className="profile-main">
        <aside className="sidebar">
          <ul className="navigation-sidebar">
            <SidebarNavItem
              icon={faEye}
              label="Public Info"
              tab="publicInfo"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SidebarNavItem
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              icon={faAddressCard}
              label="Account"
              tab="account"
            />
            <SidebarNavItem
              icon={faLock}
              label="Security"
              tab="security"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SidebarNavItem
              icon={faHeart}
              label="Interests"
              tab="interests"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SidebarNavItem
              icon={faSquareH}
              label="Your Hosted Events"
              tab="hosted"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <SidebarNavItem
              icon={faCalendarWeek}
              label="Upcoming Events"
              tab="upcoming"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
          <div className="sidebar-bar"></div>
        </aside>

        <div className="profile-content">
          {activeTab === "publicInfo" && <PublicInfo />}
          {activeTab === "account" && <ProfileAccount />}
          {activeTab === "security" && <ProfileSecurity />}
          {activeTab === "interests" && <ProfileInterests />}
          {activeTab === "hosted" && <ProfileHosted />}
          {activeTab === "upcoming" && <ProfileUpcoming />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
