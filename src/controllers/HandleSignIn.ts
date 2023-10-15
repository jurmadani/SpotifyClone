import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { NavigateFunction } from "react-router-dom";

export async function HandleSignIn(
    email: string,
    password: string,
    setSignInError: React.Dispatch<React.SetStateAction<boolean>>,
    navigateHook: NavigateFunction
) {
    try {
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            setSignInError(false);
            navigateHook("/home")
        });


    } catch {

        setSignInError(true);
    }
}