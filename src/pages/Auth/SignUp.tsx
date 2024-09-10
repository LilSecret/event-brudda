import TextInput from "../../components/Form/TextInput";
import TextSeparator from "../../components/TextSeparator/TextSeparator";
import Logo from "../../components/Logo/Logo";
import styles from "./auth.module.css";

function SignUpPage() {
  return (
    <div className={styles.page}>
      <header className={styles.logo}>
        <Logo type="light" />
      </header>
      <main>
        <form action="#" className={`form ${styles["auth-form"]}`}>
          <h2 className="heading">Sign Up</h2>
          <p>Welcome to Brudda!</p>
          <div className="form-inputs">
            <TextInput
              label="First Name"
              id="fname"
              inputProps={{
                type: "text",
              }}
            />
            <TextInput
              label="Last Name"
              id="lname"
              inputProps={{
                type: "text",
              }}
            />
            <TextInput label="Email" id="email" inputProps={{ type: "email" }} />
            <TextInput label="Username" id="username" inputProps={{ type: "text" }} />
            <TextInput label="Password" id="password" inputProps={{ type: "password" }} />
            <TextInput label="Confirm Password" id="cpassword" inputProps={{ type: "password" }} />
          </div>
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed">
              Sign Up
            </button>
            <TextSeparator text="Or" />
            <a href="/login" className="tag" data-type="outline" data-size="full-bleed">
              Log In
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUpPage;
