import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Register from "./pages/register";
import EventForm from './pages/createEvent';
import AllEvents from './pages/allEvent';
import Header from './pages/header';
import LogIn from './pages/login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase';

function App() {
  const [isHere, setIsHere] = useState(false)
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log("loged");
      const uid = user.uid;
      console.log(uid);
      setIsHere(true)
      console.log(isHere);
    } else {
      console.log("not logged");
    }
  })
  if (isHere === true) {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
              <Routes>
                <Route path='/'  element={<AllEvents/>}/>
                <Route path='/eventform' element={<EventForm/>}/>
              </Routes>
          </div>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
              <Routes>
                <Route path='/'  element={<AllEvents/>}/>
                <Route path='/eventform' element={<EventForm/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<LogIn/>}/>
              </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
