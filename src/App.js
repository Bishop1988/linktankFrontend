import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Edit from "./pages/Edit"
import User from "./pages/User"

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
