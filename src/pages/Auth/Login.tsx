import { useDispatch } from "react-redux";
import TextInput from "../../components/Form/TextInput";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { authActions } from "../../state/Auth/authSlice";
import styles from "./auth.module.css";

function Login() {
  const dispatch = useDispatch();

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className={styles.page}>
      <header className={styles["logo"]}>
        <Logo type="light" />
      </header>
      <main>
        <form
          className={`form ${styles["auth-form"]}`}
          onSubmit={(e) => {
            e.preventDefault();
            setUsernameInput("");
            setPasswordInput("");
            dispatch(authActions.login({ username: usernameInput, password: passwordInput }));
          }}>
          <h2 className="heading">Sign In</h2>
          <div className="form-inputs">
            <TextInput
              label="User Name"
              id="username"
              inputProps={{
                type: "text",
                value: usernameInput,
                onChange: (e) => {
                  setUsernameInput(e.target.value);
                },
              }}
            />
            <TextInput
              label="Password"
              id="password"
              inputProps={{
                type: "password",
                value: passwordInput,
                onChange: (e) => {
                  setPasswordInput(e.target.value);
                },
              }}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed">
              Log In
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
    </div>
  );
}

export default Login;
