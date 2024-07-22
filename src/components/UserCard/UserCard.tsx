import { TUser } from "../../types";
import "./styles.css";

function UserCard({ user }: { user: TUser }) {
  const { firstName, lastName, username, profileImg } = user;
  const fullName = firstName + " " + lastName;

  return (
    <div className="user-card">
      <img
        className="user-profile-img"
        src={profileImg}
        alt="user profile img"
      />
      <h4 className="heading">{fullName}</h4>
      <p className="user-username">@{username}</p>
    </div>
  );
}

export default UserCard;
