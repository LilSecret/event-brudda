import { ErrorResponse, Link, useRouteError } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import styles from "./error.module.css";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  let title = "Something went wrong";
  let message = "";

  if (error.status === 404) {
    title = "404 Not Found";
    message = "Failed to find page or resource.";
  }

  if (error.status >= 500) {
    title = `${error.status} Failed to Fetch`;
    message = error.data.message;
  }

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
            <h2 className="heading">{title}</h2>

            <p>{message}.</p>
            <div className={styles["link-actions"]}>
              <Link className="link" to="/#contact">
                Contact Us
              </Link>
              <Link className="link" to="/">
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
