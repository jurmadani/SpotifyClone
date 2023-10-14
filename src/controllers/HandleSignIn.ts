import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export async function HandleSignIn(
    email: string,
    password: string,
    setSignInError: React.Dispatch<React.SetStateAction<boolean>>
) {
    try {
        await signInWithEmailAndPassword(auth, email, password).then(() => console.log("success"));
        setSignInError(false);
    } catch {

        setSignInError(true);
    }
}