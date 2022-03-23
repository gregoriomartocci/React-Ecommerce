import SignUpFom from "../../Components/Sign-Up/Index";
import SignInForm from "../../Components/Sign-In/Index";

import "./Styles.scss"

const Authentication = () => {
  // useCallback(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div>
      <div className="authentication-container">
        <SignInForm />
        <SignUpFom />
      </div>
    </div>
  );
};

export default Authentication;
