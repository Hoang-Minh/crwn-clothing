import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../util/firebase/firebase.util";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sigin With Google Popup</button>
    </div>
  );
};

export default Signin;
