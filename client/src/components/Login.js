import {React, useState }from "react";
import { Link } from "react-router-dom";
import "./CSS/Admin.css";
import axos from 'axios'
import axios from "axios";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const loginSubmit = (e) =>{
    //     e.preventDefault()
    //     axios.post({
    //         method: "post",
    //         url: "/api/auth/log-in",
    //         data: ,
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Content-type": "application/json",
    //         },
    //       })
    // }
  
    return (
        <div className="admin-wrapper">
            <div>
                <h2>Admin Login</h2>
                <div className="admin-login">
                    <form>
                    <p>Username:</p>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}
                    
                    ></input>
                    <p>Password:</p>
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    
                    ></input>
                    <Link to="/adminpage/forms">
                        <button>LOGIN</button>
                    </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
