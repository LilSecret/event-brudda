import { Link } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import NavbarIcon from "./NavbarIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import styles from "./navbar.module.css";
import NavLink from "./NavLink";

function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav className={`${styles.navbar} main-inline-mw`}>
      <Logo type="dark" />
      <ul className={styles["nav-links"]}>
        <NavLink text="Events" link="/#events" />
        <NavLink text="Hosting" link="/events/host-an-event" />
        <NavLink text="About" link="/#about" />
      </ul>
      <div className={styles["nav-items"]}>
        {user && (
          <>
            <NavbarIcon icon={faCalendarDays} name="Schedule" />
            <img className={styles["profile-img"]} src="/male-glasses.jpg" />
          </>
        )}
        {!user && (
          <>
            <Link className="btn" data-type="accent" to="/login">
              Login
            </Link>
            <Link className="btn" data-type="outline" to="/">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
