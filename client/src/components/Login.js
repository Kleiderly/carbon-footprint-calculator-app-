import {React, useState, useEffect, useContext }from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './css/Admin.css';
import axios from "axios";
import './css/vivify.min.css';
import '../components/css/Modal.css'


function Login() {

    const [email, setEmail]  = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [modal, setModal] = useState(false);
    /* Show/Hide password field */
    const showPw = ()=> {
      const pw = document.getElementById("pwbox");
      pw.type === "password" ? pw.type = "text" : pw.type = "password"
    };

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
        localStorage.setItem("superAdmin", data.superAdmin)
        localStorage.setItem("authToken", data.token);

        let superAdmin = JSON.parse(localStorage.getItem("superAdmin"));
          if(superAdmin){
            history.push("/adminpage/formsAll")
          } else{
            history.push("/adminpage/forms")
          }
      } catch (error) {
        setError(error.response.data.error)
      }
    };

    
    const toggleModal = () => {
      if(error){
      setModal(!modal)};
    };

    // const clickHandler = () =>{
    //   if(error) {
    //     setModal(!modal)
    //    }else{
    //     loginHandler()
    //    }
    //   }

    const errorEmpty = () =>{
      setModal(!modal)
      setError(null)
    }
  
  
    return (
        <div className="admin-wrapper vivify fadeIn">
            <div>
                <h2>Admin Login</h2>
                {/* {error && <span>{error}</span>} */}
                <div className="admin-login light-accent-bg">
                
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

                    <div className="form-item password-field">
                      <input type="checkbox" className="pw-checkbox" onClick={showPw} />&nbsp;Show Password
                    </div>

                    <button  onClick={error ? toggleModal : loginHandler}>LOGIN</button>

                    <Link to="/adminpage/forgotpassword" className="admin-password-text">
                        Forgot Password?
                    </Link>


                    

                    {modal && (
                        <div className="modal">
                          <div onClick={errorEmpty} className="overlay"></div>
                          <div className="modal-content">
                            <h2>Oops!!</h2>
                            <span>{error}</span>
                            <button className="close-modal" onClick={errorEmpty}>
                              X 
                            </button>
                          </div>
                        </div>
                      )}
                </div>
            </div>
        </div>
    )
};

export default Login;
