import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
// import userContexts
import CountryContext from "./contexts/CountryContext";
import MaterialContext from "./contexts/MaterialContext";
import FasteningContext from "./contexts/FasteningContext";

// import Components
import Trial from "./components/Trial";
import ExampleMaterial "./components/ExampleMaterial"

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
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/category/single_choice/materials" component={Materials}>
            <MaterialContext.Provider value={{ materials }}>
              <ExampleMaterial />
            </MaterialContext.Provider>
          </Route>
          {/* <CountryContext.Provider value={{ countries }}>
            <MoviesList />
          </CountryContext.Provider>
          
          <FasteningContext.Provider value={{ fastenings }}>
            <MoviesList />
          </FasteningContext.Provider> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
