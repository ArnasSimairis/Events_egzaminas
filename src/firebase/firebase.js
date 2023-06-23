import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDMRi1TxLbJgdhv2UL-_JWsAzWPepjo9A",
    authDomain: "egzaminas-final.firebaseapp.com",
    projectId: "egzaminas-final",
    storageBucket: "egzaminas-final.appspot.com",
    messagingSenderId: "897625579968",
    appId: "1:897625579968:web:84484e1e933f2ee38ee825"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app }