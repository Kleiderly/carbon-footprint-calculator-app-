import React from "react";
import { Link } from "react-router-dom";
import "./css/Admin.css";

function Admin() {
  return (
    <div className="admin-wrapper">
      <div>
        <h2>Admin Login</h2>
        <div className="admin-login">
          <p>Username:</p>
          <input></input>
          <p>Password:</p>
          <input></input>
          <Link to="/adminpage/forms">
            <button>LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
