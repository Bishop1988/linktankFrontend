import "../styles/signup.css"
import { signUp } from "../utils"
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fontawesome/free-solid-svg-icons";
// const eye = <FontAwesomeIcon icon={faEye} />;
// const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />; 

const Signup = ({ setUser }) => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  // const [showEye, setShowEye] = useState(true);
  const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(passwordVisible ? false : true);
  //   setShowEye(!showEye);
  // };

  const handleSignup = (e) => {    
    e.preventDefault();
    signUp(username, email, password, setUser)
    // console.log(username, email, password)
  }
  // console.log(user)
  return (
    <div className="signup">
      <h2>Create an account</h2>
      <p className="text">Sign up for LinkTank today! 
      For some reason? Not really sure why. Burn social media. 
      Down with capitalism.</p>
      <form className="test" onSubmit={handleSignup}>
      <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              type="text"
              minLength="6"
              maxLength="20"
              required
        />
        <input 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
        />        
        <input 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // type={passwordVisible ? "text" : "password"}
              type="text"
              minLength="8"
              maxLength="20"
              required
        />

        {/* <div>
          <i onClick={togglePasswordVisibility}>{showEye ? eyeSlash : eye}</i>
        </div> */}
        <button type="submit">Sign Up</button>
      </form>  
    </div>
  )
}




export default Signup
