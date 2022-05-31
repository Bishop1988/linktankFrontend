import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Edit from "./pages/Edit"
import UserProfile from "./pages/UserProfile";
import UserPage from "./pages/UserPage"
// import { login } from "./utils";

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [user, setUser] = useState("");
  // const [loggedIn, setLoggedIn] = useState()
  console.log(user)

  // useEffect(() => {
  //   login(setUser)
  // }, [])

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/UserProfile" element={<UserProfile user={user} />} />
          {/* <Route path="/userPage" element={<UserPage user={user}/>}/> */}
          <Route path="/u/:target" element={<UserPage user={user}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
