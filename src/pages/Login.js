import { useState } from "react";
import  LoginForm  from "../components/LoginForm";

import "../styles/login.css"


const Login = () => {
  // const adminUser = {
  //   email: "a@a.com",
  //   password: "a123"
  // }

const [user, setUser] = useState ({});

console.log(user)
// const [error,setError] = useState ("");

// const Login = details => {
//   console.log(details);

//   if (details.email == adminUser.email && details.password == adminUser.password){
//     console.log ("Logged In");
//   setUser({
//      name: details.name,
//      email: details.email 
//     });
//   } else {
//     console.log("Details do not match");
//     setError("Please check your details and try again")
//   }
// }

//   const Logout = () => {
//     setUser ({name: "", email: ""});
//   console.log("Logout");
// }

return (
//   <div className="login_container">
//     {(user.email !="") ? (
//     <div className="login_welcome">
//       <h2>Welcome <span>{user.name}</span></h2>
//       <button onClick={Logout}>Logout</button>
//     </div>
    
// ) : (
//   <LoginForm Login={Login} error={error}/>
// )}
// </div>
  <div>
    <LoginForm setUser={setUser} />
  </div>
)}


export default Login