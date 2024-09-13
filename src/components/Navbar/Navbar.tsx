import { Link } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import NavbarIcon from "./NavbarIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import LinkNav from "./NavLink";
import styles from "./navbar.module.css";

function Navigation() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header>
      <nav className={`${styles.navbar} main-inline-mw`}>
        <Logo type="dark" />
        <ul className={styles["nav-links"]}>
          <LinkNav text="Events" to="/#events" />
          <LinkNav text="Hosting" to="/events/hosting" />
          <LinkNav text="About" to="/#about" />
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
              <Link className="btn" data-type="outline" to="/sign-up">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
