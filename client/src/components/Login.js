import {React, useState, useEffect, useContext }from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './css/Admin.css';
import Context from '../contexts/ContextApi';
import axios from "axios";

function Login() {

    const{ email, setEmail } = useContext(Context);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    /* Show/Hide password field */
    const showPw = ()=> {
      const pw = document.getElementById("pwbox");
      pw.type === "password" ? pw.type = "text" : pw.type = "password"
    };

    let history = useHistory();

    console.log(email)
  
    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/adminpage/login");
      }
    }, [history]);
  
    const loginHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "/api/auth/login",
          { email, password },
          config
        );
        localStorage.setItem("superAdmin", data.superAdmin)
        localStorage.setItem("authToken", data.token);

        let superAdmin = JSON.parse(localStorage.getItem("superAdmin"));
          if(superAdmin){
            history.push("/adminpage/formsAll")
          } else{
            history.push("/adminpage/forms")
          }
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
  
    return (
        <div className="admin-wrapper">
            <div>
                <h2>Admin Login</h2>
                {error && <span className="error-message">{error}</span>}
                <div className="admin-login">
                    <form onSubmit={loginHandler}>
                    <p className="admin-text">Email:</p>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                
                    ></input>
                    <p className="admin-text">Password:</p>
                    <input
                    id="pwbox"
                    type="password" 
                    name="password"
                    autoComplete="true"
                    placeholder="Enter your password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    ></input>

                    <div className="form-item password-field height">
                      <input type="checkbox" className="pw-checkbox" onClick={showPw} />&nbsp;Show Password
                    </div>

                    <button type="submit">LOGIN</button>

                    <Link to="/adminpage/forgotpassword" className="admin-password-text">
                        Forgot Password?
                    </Link>
                   
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
