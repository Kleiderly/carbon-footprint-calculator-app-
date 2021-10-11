import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import Components
import Header from './components/Header';
import Cover from './components/Cover';
import Login from './components/Login';
import AdminForms from './components/AdminForms';
import Materials from './components/Materials';
import Logistics from './components/Logistics';
import Fastenings from './components/Fastenings';
import Category from './components/Category';
import Details from './components/Details';
import Results from './components/Results';
import Footer from './components/Footer';
import Percentages from './components/Percentages';

import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {



  const [result, setResult] = useState({first:{}, second:{}})
  
  
  
  return (
    <div className="App">
      <Router>
            <div>
              <Header />
                <Switch>
                    <Route exact path="/" component={() => <Cover/>}/>
                    <Route exact path="/:itemsNumber" component={Category} />
                    <Route exact path="/:itemsNumber/materials" component={Materials} />
                    <Route exact path="/:itemsNumber/logistics" component={Logistics} />
                    <Route exact path="/:itemsNumber/fastenings" component={Fastenings} />
                    <Route exact path="/:itemsNumber/percentages" component={Percentages} />
                    <Route exact path="/:itemsNumber/results" component={Results} />
                    <Route exact path="/:itemsNumber/details" component={() => <Details/>} />
                    {/* Admin routes */}
                    <PrivateRoute exact path="/adminpage/forms" component={AdminForms} />
                    <Route exact path="/adminpage/login" component={Login} />
                    <Route exact path="/adminpage/forgotpassword" component={ForgotPassword} />
                    <Route exact path="/adminpage/passwordreset/:resetToken" component={ResetPassword} />
                </Switch>
              <Footer />
            </div>
      </Router>
    </div>
  );
}

export default App
