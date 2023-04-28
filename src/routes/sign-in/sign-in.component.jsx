import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../util/firebase/firebase.util";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Signin = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      // console.log(response);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sigin With Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Signin;
