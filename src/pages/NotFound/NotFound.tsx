import Logo from "../../components/Logo/Logo";
import styles from "./notfound.module.css";

function NotFound() {
  return (
    <div className={styles.page}>
      <header className={styles.logo}>
        <Logo type="dark" />
      </header>
      <main className="even-columns main-inline-mw" data-type="narrow">
        <img className={styles["error-img"]} src="/sad-dog.png" alt="sad dog" />
        <div className={styles.content}>
          <h2 className="heading">Not Found (404)</h2>
          <h3 className="heading">Oops!</h3>
          <div className={styles["content-text"]}>
            <p>The page you have entered does not exist.</p>

            <p>
              Please make your way back to our home page by clicking on the "Brudda" logo above. If
              you have any questions please{" "}
              <a className="link" href="/contact-us">
                Contact Us
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
