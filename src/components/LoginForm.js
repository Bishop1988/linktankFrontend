
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
        
            <form className="login-form" onSubmit={submitHandler}>
                    <div className="form-inner">
                            <h2 className="login-title">Login</h2>
                            {/* {(error != "") ? ( <div className="error">{error}</div> ) :""} */}
                            {/* <div className="form-group">
                                <label htmlFor = "name">Name:</label>
                                <input type ="text" name="username" id="name" onChange={(e) => setUsername(e.target.value)} />
                        </div> */}
                    <div className="form-group">
                            {/* <label htmlFor="email">:</Emaillabel> */}
                            <input type    ="email" className="login-input" name="email" id="email"    onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                            {/* <label htmlFor="password">Password:</label> */}
                            <input type="password" className="login-input" name="password" id="password"    onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                            
                            </div>
                            <div>
                            <button className="login-btn" type='submit'>submit</button>
                            </div>
                            {/* <input type="submit" value="LOGIN"/> */}
                            
                </div>
                
            </form>

     )
}

export default LoginForm
