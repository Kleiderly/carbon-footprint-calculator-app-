import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
// import userContexts
import CountryContext from "./contexts/CountryContext";
import MaterialContext from "./contexts/MaterialContext";
import FasteningContext from "./contexts/FasteningContext";

// import Components
import ExampleMaterial "./components/ExampleMaterial"
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
  const [countries, setCountries] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [fastenings, setFastenings] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/logistic`)
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/api/material`)
      .then((response) => setMaterials(response.data))
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/api/fastening`)
      .then((response) => setFastenings(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
            <div>
              <Header />
                <Switch>
                    <Route exact path="/category/single_choice/materials" component={Materials}>
                      <MaterialContext.Provider value={{ materials }}>
                        <ExampleMaterial />
                      </MaterialContext.Provider>
                    </Route>
                    <Route exact path="/" component={Cover} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/admin/forms" component={AdminForms} />
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
  
export default App
