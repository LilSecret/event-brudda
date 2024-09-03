import styles from "./footer.module.css";
import FooterColumnList from "./FooterColumnList";
import NewsletterSignUp from "./NewsletterSignUp";
import FooterLink from "./FooterLink";
import FooterCta from "./FooterCta";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="main-inline-mw">
        <div className={styles["footer-header"]}>
          <div className={styles["footer-left-hand"]}>
            <FooterCta />
            <FooterColumnList heading="Pages">
              <FooterLink text="Home" />
              <FooterLink text="Hosting" link="/events/hose-an-event" />
              <FooterLink text="Contact" link="/contact" />
            </FooterColumnList>
            <FooterColumnList heading="Help">
              <FooterLink text="FAQ" link="/#faq" />
              <FooterLink text="Contact Us" link="/contact" />
              <FooterLink text="Learn more" />
            </FooterColumnList>
            <FooterColumnList heading="Legal">
              <FooterLink text="Privacy" />
              <FooterLink text="Terms of Service" />
              <FooterLink text="Reserved Rights" />
            </FooterColumnList>
          </div>
          <NewsletterSignUp />
        </div>
        <hr className="line" />
        <div className="mx-auto">©2024 Brudda, LLC | All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;

export const Demo = () => {};
