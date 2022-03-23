import { useState } from "react";
import "./Styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/firebase.utils";
import FormInput from "../Form-Input/Index";
import Button from "../Button/Index";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFom = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        return "Cannot create user, email already in use.";

      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <span> Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpFom;
