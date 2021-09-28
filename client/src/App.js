import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Cover from './components/Cover';
import Admin from './components/Admin';
import AdminForms from './components/AdminForms';
import Materials from './components/Materials';
import Logistics1 from './components/Logistics1';
import Logistics2 from './components/Logistics2';
import Fastenings from './components/Fastenings';
import Category from './components/Category';
import Details from './components/Details';
import Results from './components/Results';
import ItemChoice from './components/ItemChoice';
import Footer from './components/Footer';
import Percentages from './components/Percentages';

function App() {

  return (
    <div className="App">
      <Router>
            <div>
              <Header />
                <Switch>
                    <Route exact path="/" component={Cover} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/admin/forms"  render={(props) => <AdminForms {...props} key={Date.now()}/>} />
                    <Route exact path="/itemchoice" component={ItemChoice} />
                    <Route exact path="/category/:choice" component={Category} />
                    <Route exact path="/category/:choice/materials" component={Materials} />
                    <Route exact path="/category/:choice/logistics1" component={Logistics1} />
                    <Route exact path="/category/:choice/logistics2" component={Logistics2} />
                    <Route exact path="/category/:choice/fastenings" component={Fastenings} />
                    <Route exact path="/:choice/percentages" component={Percentages} />
                    <Route exact path="/:choice/results" component={Results} />
                    <Route exact path="/:choice/details" component={Details} />
                </Switch>
              <Footer />
            </div>
      </Router>
    </div>
  );
}

export default App;
