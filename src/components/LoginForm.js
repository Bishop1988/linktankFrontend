import React, { useState } from 'react'


function LoginForm({ setUser }) {
    // const [details, setDetails] = useState ({name:"", email:"", password:""})
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = e => {
        e.preventDefault();

        const loginUser = {
            username: username,
            email: email,
            password: password
        }

        setUser(loginUser);

    }
  return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              {/* {(error != "") ? ( <div className="error">{error}</div> ) :""} */}
              <div className="form-group">
                <label htmlFor = "name">Name:</label>
                <input type ="text" name="username" id="name" onChange={(e) => setUsername(e.target.value)} />
            </div>
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type ="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
              </div>
              {/* <input type="submit" value="LOGIN"/> */}
              <button type='submit'>submit</button>
        </div>
      </form>

  )
}

export default LoginForm
