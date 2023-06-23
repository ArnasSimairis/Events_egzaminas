import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase/firebase"
import { signOut, onAuthStateChanged } from "firebase/auth"

const Header = () => {
    const [isHere, setIsHere] = useState(false)
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            setIsHere(true)
        } else {

        }
    })
    console.log(isHere);
    if (isHere === true) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div>
                                <Link to="/">AllEvents </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <Link to="/eventform">Create an event </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <button
                                    onClick={() => {
                                        signOut(auth).then(() => {
                                            // alert('sign-out')
                                            window.location.reload(true);
                                        }).catch((error) => {
                                            const errorCode = error.code;
                                            const errorMessage = error.message;
                                            console.log(errorMessage)
                                            console.log(errorCode)
                                        })
                                    }}
                                >
                                    logout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <div>
                                <Link to="/">AllEvents </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <Link to="/eventform">Create an event </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <Link to="/register">Register </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <Link to="/login">Login </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Header