import { loginUserWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";


export const checkingAuthentication = (  ) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials());   
    }
};

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials());
        const result = await singInWithGoogle();

        if (!result.ok) return dispatch (logout(result)); 
        dispatch (login(result));
    }
};

export const startEmailPasswordRegister = ({ email, password, displayName }) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials());
        const result = await registerUserWithEmailPassword({ email, password, displayName });

        if (!result.ok) return dispatch (logout(result)); 
        dispatch (login(result));
    }
};

export const startEmailPasswordLogin = ({ email, password }) => {
    return async ( dispatch ) => {
        dispatch (checkingCredentials());
        const result = await loginUserWithEmailPassword({ email, password });

        if (!result.ok) return dispatch (logout(result)); 
        dispatch (login(result));
    }
};