import React, { useState } from 'react'
import {loginUP} from '../utils'


function LoginForm({ setUser }) {
    // const [details, setDetails] = useState ({name:"", email:"", password:""})
    // const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
       loginUP(email, password, setUser)
       console.log(email)
       console.log(password)
    }
  
  return (
    
      <form className="Loginform_form" onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              {/* {(error != "") ? ( <div className="error">{error}</div> ) :""} */}
              {/* <div className="form-group">
                <label htmlFor = "name">Name:</label>
                <input type ="text" name="username" id="name" onChange={(e) => setUsername(e.target.value)} />
            </div> */}
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type ="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
              </div>
              {/* <input type="submit" value="LOGIN"/> */}
              <input type="submit" value= "Submit" button/>
        </div>
      </form>

  )
}

export default LoginForm
