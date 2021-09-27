import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./CSS/Admin.css";
import AdminForms from './AdminForms';

const Admin =()=> {
    
    return (
        <div className="admin-wrapper">
            <Router>
                <Switch>
                    <div className="">
                            <h2>Admin Login</h2>
                        <div className="admin-login">
                            <p>Username:</p>
                            <input></input>
                            <p>Password:</p>
                            <input></input>
                            <button>LOGIN</button>
                        </div>
                        <Route exact path="/admin/forms" component={AdminForms} />
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default Admin