import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/firebase.utils";

import SignUpFom from "../Sign-Up/Index";

const SingIn = () => {
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

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>Sign In Page</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}

      <SignUpFom />
    </div>
  );
};

export default SingIn;
