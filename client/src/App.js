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
import CategorySingle from './components/CategorySingle';
import CategoryDual from './components/CategoryDual';
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
                    <Route exact path="/admin/forms" component={AdminForms} />
                    <Route exact path="/category/single_choice/materials" component={Materials} />
                    <Route exact path="/category/single_choice/logistics1" component={Logistics1} />
                    <Route exact path="/category/single_choice/logistics2" component={Logistics2} />
                    <Route exact path="/category/single_choice/fastenings" component={Fastenings} />
                    <Route exact path="/category/dual_choice/" component={CategorySingle} />
                    <Route exact path="/category/dual_choice/" component={CategoryDual} />
                    <Route exact path="/itemchoice" component={ItemChoice} />
                    <Route exact path="/category/dual_choice/percentages" component={Percentages} />
                    <Route exact path="/category/dual_choice/results" component={Results} />
                    <Route exact path="/category/dual_choice/details" component={Details} />
                </Switch>
              <Footer />
            </div>
      </Router>
    </div>
  );
}

export default App;
