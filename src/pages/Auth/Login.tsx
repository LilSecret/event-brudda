import { useDispatch } from "react-redux";
import TextInput from "../../components/Form/TextInput";
import Logo from "../../components/Logo/Logo";
import "./styles.css";
import { useState } from "react";
import { login } from "../../state/Auth/authSlice";
import { API_USERS } from "../../API";

function Login() {
  const dispatch = useDispatch();

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <header className="logo">
        <Logo type="dark" />
      </header>
      <main>
        <form
          className="form auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            setUsernameInput("");
            setPasswordInput("");
            dispatch(
              login({ username: usernameInput, password: passwordInput })
            );
          }}
        >
          <h2 className="heading">Sign In</h2>
          <div className="form-inputs">
            <TextInput
              label="User Name"
              name="username"
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
              name="password"
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
