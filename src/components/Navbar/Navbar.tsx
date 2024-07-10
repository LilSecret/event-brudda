import { Link } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";

function Navbar() {
  // const user = "charles";
  const user = null;

  return (
    <nav className="navbar main-inline-mw">
      <Logo />
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#events">Events</a>
        </li>
        <li className="nav-link">
          <a href="/events/host-an-event">Hosting</a>
        </li>
        <li className="nav-link">
          <a href="#about">About</a>
        </li>
      </ul>
      {user && (
        <div className="nav-items">
          <FontAwesomeIcon className="nav-icon" icon={faCalendarDays} />
          <FontAwesomeIcon className="nav-icon" icon={faBell} />
          <div className="profile-img"></div>
        </div>
      )}
      {!user && (
        <div className="nav-items">
          <Link className="btn" data-type="accent" to="/login">
            Login
          </Link>
          <Link className="btn" data-type="outline" to="/">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
