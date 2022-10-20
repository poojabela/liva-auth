import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Router from "next/router";

const LoginButton = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
           // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            if(user){
                Router.push('/home')
            }
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
        });
    }

    return ( 
        <button onClick={handleLogin}>Login</button>
     );
}
 
export default LoginButton;