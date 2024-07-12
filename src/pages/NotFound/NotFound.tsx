import Logo from "../../components/Logo/Logo";
import "./styles.css";

function NotFound() {
  return (
    <>
      <header className="logo">
        <Logo type="dark" />
      </header>
      <main className="main main-inline-mw">
        <div className="error-img"></div>
        <div className="content">
          <h2 className="heading">Not Found (404)</h2>
          <h3 className="heading">Oops!</h3>
          <div className="content-text">
            <p>The page you have entered does not exist.</p>

            <p>
              Please make your way back to our home page by clicking on the
              "Brudda" logo above. If you have any questions please{" "}
              <a className="link" href="/contact-us">
                Contact Us
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
