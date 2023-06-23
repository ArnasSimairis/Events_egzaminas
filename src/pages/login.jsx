import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase";

const LogIn = () => {
    const [login_email, setEmail] = useState('')
    const [login_password, setPassword] = useState('')
    function loginUser (e)  {
        e.preventDefault()
        signInWithEmailAndPassword(auth, login_email, login_password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('loged in!');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <form >
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginUser}>Log in</button>
            </form>
        </div>
    )
}

export default LogIn