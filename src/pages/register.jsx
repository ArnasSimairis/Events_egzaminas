import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../firebase/firebase"
import { getDatabase, set, ref } from "firebase/database";

import React, { useState } from "react"
console.log(auth);
const Register = () => {
    const database = getDatabase();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    console.log(email);
    console.log(password);
    const handleRegisterUser = async(e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log(user);

            set(ref(database, 'users/' + user.uid), {
                user_email: email,
                user_role: "simple_role",
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("didnt");
            console.log(errorCode);
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <form>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleRegisterUser}>Register</button>
            </form>
        </div>
    )
}

export default Register