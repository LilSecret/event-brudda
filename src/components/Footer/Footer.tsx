import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import "./styles.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterColumnList from "./FooterColumnList";
import NewsletterSignUp from "./NewsletterSignUp";

function Footer() {
  return (
    <footer className="footer">
      <div className="main-inline-mw">
        <div className="footer-header">
          <FooterColumnList heading={<Logo type="light" />}>
            <li>
              <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
              <span>jackson.graham@brudda.com</span>
            </li>
            <li>
              <FontAwesomeIcon className="footer-icon" icon={faPhone} />
              <span>+1 (208) 555-0112</span>
            </li>
            <li>
              <div className="socials">
                <a
                  className="footer-social-icon"
                  href="https://www.instagram.com"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="footer-social-icon"
                  href="https://www.facebook.com"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="footer-social-icon"
                  href="https://www.twitter.com"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="footer-social-icon"
                  href="https://www.youtube.com"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </li>
          </FooterColumnList>
          <FooterColumnList heading="Pages">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events/host-an-event">Hosting</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </FooterColumnList>
          <FooterColumnList heading="Help">
            <li>
              <a href="/#faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/">Learn more</a>
            </li>
          </FooterColumnList>
          <FooterColumnList heading="Legal">
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Reserved Rights</a>
            </li>
          </FooterColumnList>
          <NewsletterSignUp />
        </div>
        <hr className="footer-spacer" />
        <span>@ 2040 Brudda, LLC | All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
