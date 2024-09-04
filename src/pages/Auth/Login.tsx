import { useDispatch } from "react-redux";
import TextInput from "../../components/Form/TextInput";
import Logo from "../../components/Logo/Logo";
import { FormEvent, useState } from "react";
import { authActions } from "../../state/Auth/authSlice";
import styles from "./auth.module.css";
import { API_USERS } from "../../API";
import FormError from "../../components/Form/FormError";
import { TUser } from "../../types";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameInvalid = usernameInput.length < 3 && isFormSubmitted;
  const passwordInvalid = passwordInput.length < 3 && isFormSubmitted;

  const resetForm = () => {
    setUsernameInput("");
    setPasswordInput("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsFormSubmitted(true);
    if (usernameInvalid || passwordInvalid) {
      setError("Please finish filling out credentials correctly.");
      return;
    }

    setLoading(true);
    try {
      const users = (await API_USERS.getAllUsers()) as TUser[];
      const foundUser = users.find((user) => user.username === usernameInput);

      setLoading(false);
      if (!foundUser) {
        setError("The username you entered is not signed up.");
        return;
      } else {
        if (foundUser.password !== passwordInput) {
          setError("You entered an incorrect password. Try again!");
          return;
        }
        toast.success(`👋 Welcome in ${foundUser.username}`);
        dispatch(authActions.login(foundUser));
        resetForm();
        navigate("/");
      }
    } catch (error) {
      setError((error as string) || "Unable to fetch users");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles["logo"]}>
        <Logo type="light" />
      </header>
      <main>
        <form className={`form ${styles["auth-form"]}`} onSubmit={handleSubmit}>
          <h2 className="heading">Sign In</h2>
          <div className="form-inputs">
            <TextInput
              label="Username"
              id="username"
              inputProps={{
                type: "text",
                value: usernameInput,
                onChange: (e) => {
                  setUsernameInput(e.target.value);
                  setIsFormSubmitted(false);
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
                  setIsFormSubmitted(false);
                  setPasswordInput(e.target.value);
                },
              }}
            />
          </div>
          <FormError message={error} onShow={isFormSubmitted} />
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed" disabled={loading}>
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
