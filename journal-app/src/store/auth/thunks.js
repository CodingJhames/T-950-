import { async } from "@firebase/util";
import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, logout, login } from "./index";



export const chekingAuthentication = ( email, password  ) => {

    return async( dispatch ) => {
        
        dispatch( chekingCredentials()  );

    }
}

export const startGoogleSignIn = () => {

    return async( dispatch  ) => {

        dispatch(  chekingCredentials() );

        const result = await signInWithGoogle();
        // console.log({ result });

        if ( !result.ok ) return  dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );
        

    }
  
  }

export const startCreatingUserWithEmailPassword = ( {email, password, displayName} ) => {

    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { email, password, displayName } );
        // console.log( resp );

        if ( !ok ) return dispatch( logout( { errorMessage }) );

        dispatch( login( {  uid, displayName, email, photoURL } ) );

    


    }
}