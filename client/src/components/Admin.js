import React from "react";
import { Link } from "react-router-dom";
import "./css/Admin.css";

function Admin() {

    return (
        <div className="admin-wrapper dark-tone-text">
            <div>
                <h2>Admin Login</h2>
                <div className="admin-login light-accent-bg">
                    <p>Username:</p>
                    <input
                        type="text"
                    />
                    <p>Password:</p>
                    <input
                        type="password"
                    />
                    <Link to="/adminpage/forms">
                        <button>LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Admin;
