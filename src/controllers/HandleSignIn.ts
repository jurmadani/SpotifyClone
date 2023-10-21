import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { NavigateFunction } from "react-router-dom";
import { loginURL } from "../backend/spotify-api";

export async function HandleSignIn(
  email: string,
  password: string,
  setSignInError: React.Dispatch<React.SetStateAction<boolean>>,
  navigateHook: NavigateFunction,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      setSignInError(false);
      setLoading(false);
      navigateHook("/home");
    });
  } catch {
    setSignInError(true);
    setLoading(false);
  }
}
