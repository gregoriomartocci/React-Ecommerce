import { useState } from "react";
import "./Styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/Firebase/firebase.utils";
import FormInput from "../Form-Input/Index";
import Button from "../Button/Index";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {

      switch (error.code) {
        case "auth/wrong-password":
          console.log("incorrect Password for email");
          return "Incorrect Password for email";
          break;
        case "auth/user-not-found":
          console.log("No user associated with this email");
          return "No user associated with this emai";
          break;
        default:
          console.log(error);
      }


    }
  };

  return (
    <div className="sign-in-container">
      <h2> Already have an account?</h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
