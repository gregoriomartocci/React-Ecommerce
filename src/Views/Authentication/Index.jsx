import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/Firebase/firebase.utils";

import SignUpFom from "../../Components/Sign-Up/Index";
import SignInForm from "../../Components/Sign-In/Index";

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
      <div>Sign In Page</div>
      <SignInForm />
      <SignUpFom />
    </div>
  );
};

export default Authentication;
