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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
