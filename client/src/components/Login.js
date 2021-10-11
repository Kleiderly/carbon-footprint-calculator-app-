import {React, useState, useEffect }from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CSS/Admin.css";
import axios from "axios";

function Login() {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();
  
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
  
        localStorage.setItem("authToken", data.token);
  
        history.push("/adminpage/forms");
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
                    <p>Email:</p>
                    <input 
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                
                    ></input>
                    <p>Password:</p>
                    
                    <Link to="/adminpage/forgotpassword" >
                        Forgot Password?
                    </Link>
                    <input
                    type="password" 
                    name="password"
                    autoComplete="true"
                    placeholder="Enter your password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    
                    ></input>
                        
                        <button type="submit">LOGIN</button>
                   
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
