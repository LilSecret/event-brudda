import TextInput from "../../components/Form/TextInput";
import Logo from "../../components/Logo/Logo";
import "./styles.css";

function Login() {
  return (
    <>
      <header className="logo">
        <Logo type="dark" />
      </header>
      <main>
        <form action="#" className="form auth-form">
          <h2 className="heading">Sign In</h2>
          <div className="form-inputs">
            <TextInput label="User Name" name="username" type="text" />
            <TextInput label="Password" name="password" type="password" />
          </div>
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed">
              Sign In
            </button>
            <p className="form-text">
              New to Brudda?{" "}
              <a className="link" href="/sign-up">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
