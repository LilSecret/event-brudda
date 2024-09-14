import FormInput from "../../components/Form/FormInput";
import TextSeparator from "../../components/TextSeparator/TextSeparator";
import Logo from "../../components/Logo/Logo";
import styles from "./auth.module.css";
import React, { ChangeEvent, useState } from "react";
import { isEmailValid, isStrongPassword } from "../../utils/validations";
import { API_USERS } from "../../API";
import { json, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../state/Auth/authSlice";
import FormBtnLoader from "../../components/Loaders/FormSubmitLoader";

type TSignUpForm = {
  fname: string;
  lname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const allUsernames = new Set();
let isUsernamesLoaded = false;

const initialFormInputs = {
  fname: "",
  lname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

function SignUpPage() {
  const [formInputs, setFormInputs] = useState<TSignUpForm>(initialFormInputs);
  const [formError, setFormError] = useState<string | false>(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewUser = async () => {
    const newUser = {
      username: formInputs.username,
      password: formInputs.password,
      firstName: formInputs.fname,
      lastName: formInputs.lname,
      isSubscribed: false,
    };
    try {
      const response = await API_USERS.postUser(newUser);
      return response;
    } catch (error) {
      throw json(
        { message: "Failed to add new user." },
        {
          status: 500,
        },
      );
    }
  };

  const loginUser = async () => {
    try {
      const foundUser = await API_USERS.getUserInfo(formInputs.username);

      if (!foundUser) {
        throw new Error("User is not found");
      }
      dispatch(authActions.login(foundUser));
      return new Response(JSON.stringify({ user: foundUser }), {
        status: 200,
      });
    } catch (error) {
      throw json(
        { message: "Failed to login. Please try again." },
        {
          status: 500,
        },
      );
    }
  };

  const loadUsernames = async () => {
    try {
      const allUsers = await API_USERS.getAllUsers();
      for (const user of allUsers) {
        allUsernames.add(user.username);
      }
    } catch (error) {
      throw json(
        { message: "Failed to fetch users" },
        {
          status: 500,
        },
      );
    }
  };

  const validateFormInputs = () => {
    for (const input in formInputs) {
      const formProperty = input as keyof TSignUpForm;
      const inputValue = formInputs[formProperty];
      switch (input) {
        case "fname":
          if (inputValue.length <= 3) {
            setFormError("First Name is too short.");
            return;
          }
          break;
        case "lname":
          if (inputValue.length <= 3) {
            setFormError("Last Name is too short.");
            return;
          }
          break;
        case "email":
          if (!isEmailValid(inputValue)) {
            setFormError("Email is invalid.");
            return;
          }
          break;
        case "username":
          if (allUsernames.has(inputValue)) {
            setFormError("Username is already taken.");
            return;
          }
          break;
        case "password":
          if (!isStrongPassword(inputValue)) {
            setFormError("Password is weak. Must have a uppercase, lowercase, and number.");
            return;
          }
          break;
        case "confirmPassword":
          if (formInputs.password !== inputValue) {
            setFormError("Both passwords must match.");
            return;
          }
          break;

        default:
          console.warn("Never will happen");
          break;
      }
    }
    return true;
  };

  const handleInputChange = (
    identifier: keyof Omit<TSignUpForm, "username">,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));

    if (formError) {
      setFormError(false);
    }
  };

  const handleInputUsername = async (event: ChangeEvent<HTMLInputElement>) => {
    setFormError(false);
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      username: event.target.value,
    }));

    try {
      if (!isUsernamesLoaded) {
        setLoading(true);
        await loadUsernames();
        setLoading(false);
        isUsernamesLoaded = true;
      }
    } catch (error) {
      throw new Error("Failed to load usernames");
    }
  };

  const handleFormSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    const isFormValid = validateFormInputs();
    if (isFormValid) {
      setLoading(true);
      const newUserResponse = await addNewUser();
      const loginResponse = await loginUser();
      if (newUserResponse.ok && loginResponse.ok) {
        setFormInputs(initialFormInputs);
        navigate("/");
      }
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.logo}>
        <Logo type="light" />
      </header>
      <main>
        <form onSubmit={handleFormSubmit} className={`form ${styles["auth-form"]}`}>
          <h2 className="heading">Sign Up</h2>
          <p className="error">NOTE: Authentication is not secure.</p>
          <div className="form-inputs">
            <FormInput
              label="First Name"
              id="fname"
              inputProps={{
                type: "text",
                value: formInputs.fname,
                onChange: (event) => handleInputChange("fname", event),
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
            <FormInput
              label="Last Name"
              id="lname"
              inputProps={{
                type: "text",
                value: formInputs.lname,
                onChange: (event) => handleInputChange("lname", event),
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
            <FormInput
              label="Email"
              id="email"
              inputProps={{
                type: "email",
                value: formInputs.email,
                onChange: (event) => handleInputChange("email", event),
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
            <FormInput
              label="Username"
              id="username"
              inputProps={{
                type: "text",
                value: formInputs.username,
                onChange: handleInputUsername,
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
            <FormInput
              label="Password"
              id="password"
              inputProps={{
                type: "password",
                value: formInputs.password,
                onChange: (event) => handleInputChange("password", event),
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
            <FormInput
              label="Confirm Password"
              id="cpassword"
              inputProps={{
                type: "password",
                value: formInputs.confirmPassword,
                onChange: (event) => handleInputChange("confirmPassword", event),
                onBlur: () => {
                  if (formSubmitted) {
                    validateFormInputs();
                  }
                },
              }}
            />
          </div>
          {formError && <p className="error">{formError}</p>}
          <div className="form-actions">
            <button type="submit" className="tag" data-size="full-bleed" disabled={loading}>
              {loading ? <FormBtnLoader loading={loading} /> : <p>Sign Up</p>}
            </button>
            <TextSeparator text="Or" />
            <Link to="/login" className="tag" data-type="outline" data-size="full-bleed">
              Log In
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SignUpPage;
