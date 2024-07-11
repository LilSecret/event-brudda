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
import FooterSocialIcon from "./FooterSocialIcon";

function Footer() {
  const isUserSubscribed = false;

  return (
    <footer className="footer">
      <div className="main-inline-mw">
        <div className="footer-header">
          <div className="footer-left-hand">
            <div className="footer-cta">
              <Logo type="light" />
              <ul className="footer-column-list">
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
                    <FooterSocialIcon
                      link="https://www.instagram.com"
                      icon={faInstagram}
                    />
                    <FooterSocialIcon
                      link="https://www.facebook.com"
                      icon={faFacebook}
                    />
                    <FooterSocialIcon
                      link="https://www.twitter.com"
                      icon={faTwitter}
                    />
                    <FooterSocialIcon
                      link="https://www.youtube.com"
                      icon={faYoutube}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <FooterColumnList heading="Pages">
              <li>
                <a className="footer-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="/events/host-an-event">
                  Hosting
                </a>
              </li>
              <li>
                <a className="footer-link" href="/contact">
                  Contact
                </a>
              </li>
            </FooterColumnList>
            <FooterColumnList heading="Help">
              <li>
                <a className="footer-link" href="/#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="footer-link" href="/contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Learn more
                </a>
              </li>
            </FooterColumnList>
            <FooterColumnList heading="Legal">
              <li>
                <a className="footer-link" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="footer-link" href="/">
                  Reserved Rights
                </a>
              </li>
            </FooterColumnList>
          </div>
          {!isUserSubscribed && <NewsletterSignUp />}
        </div>
        <hr className="footer-spacer" />
        <div className="mx-auto">©2024 Brudda, LLC | All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
