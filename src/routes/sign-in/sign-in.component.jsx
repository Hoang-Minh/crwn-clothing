import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../util/firebase/firebase.util";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const Signin = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        debugger;
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
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
      {/* <button onClick={logGoogleUser}>Sigin With Google Popup</button> */}
      <button onClick={signInWithGoogleRedirect}>
        Sigin With Google redirect
      </button>
    </div>
  );
};

export default Signin;
