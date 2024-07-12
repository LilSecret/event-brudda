import TextInput from "../../components/Form/TextInput";
import TextSeparator from "../../components/TextSeparator/TextSeparator";
import Logo from "../../components/Logo/Logo";
import "./styles.css";

function SignUp() {
  return (
    <>
      <header className="logo">
        <Logo type="dark" />
      </header>
      <main>
        <form action="#" className="auth-form">
          <h2 className="heading">Sign Up</h2>
          <p>Welcome to Brudda!</p>
          <div className="form-inputs">
            <TextInput label="First Name" name="fname" type="text" />
            <TextInput label="Last Name" name="lname" type="text" />
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Username" name="username" type="text" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput
              label="Confirm Password"
              name="cpassword"
              type="password"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed">
              Sign Up
            </button>
            <TextSeparator text="Or" />
            <a
              href="/login"
              className="tag"
              data-type="outline"
              data-size="full-bleed"
            >
              Sign In
            </a>
          </div>
        </form>
      </main>
    </>
  );
}

export default SignUp;
