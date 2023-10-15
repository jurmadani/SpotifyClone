import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export async function HandleSignUp(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    email: string,
    password: string,
    name: string,
    month: string,
    day: number | null,
    year: number | null,

) {
    await createUserWithEmailAndPassword(auth,email,password).then(() => {
        setLoading(false)
    });
}