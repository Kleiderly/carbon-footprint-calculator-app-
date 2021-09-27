import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./CSS/Admin.css";
import AdminForms from './AdminForms';

function Admin() {
    
    return (
        <div className="admin-wrapper">
            <Router>
                <Switch>
                    <div>
                        <h2>Admin Login</h2>
                        <div className="admin-login">
                            <p>Username:</p>
                            <input></input>
                            <p>Password:</p>
                            <input></input>
                            <Link to="/admin/forms">
                                <button>LOGIN</button>
                            </Link>
                        </div>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default Admin