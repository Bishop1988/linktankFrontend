import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Edit from "./pages/Edit"
import UserProfile from "./pages/UserProfile";
import UserPage from "./pages/UserPage"

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [user, setUser] = useState("");
  console.log(user)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/u/:target" element={<UserPage user={user}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
