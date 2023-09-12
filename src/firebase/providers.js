import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {

        const errorMessage = error.message;
        
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    
        try {
            const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
            const { uid } = result.user;
            await updateProfile( FirebaseAuth.currentUser, { displayName } );
    
            return { ok: true, uid }
        } catch (error) {
            const errorMessage = error.message;

            return { ok: false, errorMessage }
        }
}

export const loginUserWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = result.user;

        return { ok: true, uid, photoURL, displayName  }
    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}