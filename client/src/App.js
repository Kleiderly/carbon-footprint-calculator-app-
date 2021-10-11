import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Context from "./contexts/ContextApi";
// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import CategoryOption1 from "./components/CategoryOption1";
import CategoryOption2 from "./components/CategoryOption2";
import MaterialsOption1 from "./components/MaterialsOption1";
import MaterialsOption2 from "./components/MaterialsOption2";
import LogisticsOption1 from "./components/LogisticsOption1";
import LogisticsOption2 from "./components/LogisticsOption2";
import FasteningsOption1 from "./components/FasteningsOption1";
import FasteningsOption2 from "./components/FasteningsOption2";
import Results from "./components/Results";
import Percentages from "./components/Percentages";
import Details from "./components/Details";
import Admin from "./components/Admin";
import AdminForms from "./components/AdminForms";

function App() {
  // CALCULATE STATES
  const [itemTypeAdress1, setItemTypeAdress1] = useState("../img/items-images/t-shirtW.png");
  const [materialCO2e1, setMaterialCO2e1] = useState();
  const [fasteningCO2e1, setFasteningCO2e1] = useState({});
  const [countryCO2e1, setCountryCO2e1] = useState();

  // COMPARE STATES
  const [itemTypeAdress2, setItemTypeAdress2] = useState("../img/items-images/t-shirtW.png");
  const [materialCO2e2, setMaterialCO2e2] = useState();
  const [fasteningCO2e2, setFasteningCO2e2] = useState();
  const [countryCO2e2, setCountryCO2e2] = useState();

  return (
    <div className="App">
      <Router>
        <div>
          <Context.Provider
            value={{
              // CALCULATE PROPS
              itemTypeAdress1,
              setItemTypeAdress1,
              materialCO2e1,
              setMaterialCO2e1,
              fasteningCO2e1,
              setFasteningCO2e1,
              countryCO2e1,
              setCountryCO2e1,

              // COMPARE PROPS
              itemTypeAdress2,
              setItemTypeAdress2,
              materialCO2e2,
              setMaterialCO2e2,
              fasteningCO2e2,
              setFasteningCO2e2,
              countryCO2e2,
              setCountryCO2e2,
            }}
          >
            <Header />
            <Switch>
              <Route exact path="/" component={(browser) => <Cover />} />

              {/*  CALCULATE FLOW  */}

              <Route
                exact
                path="/calculate/category"
                component={(browser) => <CategoryOption1 />}
              />
              <Route
                exact
                path="/calculate/materials"
                component={(browser) => <MaterialsOption1 />}
              />
              <Route
                exact
                path="/calculate/logistics"
                component={(browser) => <LogisticsOption1 />}
              />
              <Route
                exact
                path="/calculate/fastenings"
                component={(browser) => <FasteningsOption1 />}
              />

              {/* COMPARE FLOW */}

              <Route
                exact
                path="/compare/category"
                component={(browser) => <CategoryOption2 />}
              />
              <Route
                exact
                path="/compare/materials"
                component={(browser) => <MaterialsOption2 />}
              />
              <Route
                exact
                path="/compare/logistics"
                component={(browser) => <LogisticsOption2 />}
              />
              <Route
                exact
                path="/compare/fastenings"
                component={(browser) => <FasteningsOption2 />}
              />

              <Route
                exact
                path="/percentages"
                component={(browser) => <Percentages />}
              />
              <Route
                exact
                path="/results"
                component={(browser) => <Results />}
              />
              <Route
                exact
                path="/details"
                component={(browser) => <Details />}
              />

              {/* ADMIN ROUTES */}

              <Route
                exact
                path="/adminpage/login"
                component={(browser) => <Admin />}
              />
              <Route
                exact
                path="/adminpage/forms"
                component={(browser) => <AdminForms />}
              />
            </Switch>
            <Footer />
          </Context.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
