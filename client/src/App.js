import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
// import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import CategoryOption1 from './components/CategoryOption1';
import CategoryOption2 from './components/CategoryOption2';
import MaterialsOption1 from './components/MaterialsOption1';
import MaterialsOption2 from './components/MaterialsOption2';
import LogisticsOption1 from './components/LogisticsOption1';
import LogisticsOption2 from './components/LogisticsOption2';
import FasteningsOption1 from './components/FasteningsOption1';
import FasteningsOption2 from './components/FasteningsOption2';
import Results from './components/Results';
import Percentages from './components/Percentages';
import Details from './components/Details';
import Admin from './components/Admin';
import AdminForms from './components/AdminForms';

function App() {
   const [result, setResult] = useState({
      itemTypeAdress1: null,
      countryCO2e1: null,
      materialCO2e1: null,
      fasteningCO2e1: null,
      itemTypeAdress2: null,
      countryCO2e2: null,
      materialCO2e2: null,
      fasteningCO2e2: null,
   });

   return (
      <div className="App">
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path="/" component={(browser) => <Cover />} />

                  {/*  CALCULATE FLOW  */}

                  <Route
                     exact
                     path="/calculate/category"
                     component={(browser) => (
                        <CategoryOption1
                           browser={browser}
                           result={result}
                           setResult={setResult}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/calculate/materials"
                     component={(browser) => (
                        <MaterialsOption1
                           browser={browser}
                           result={result}
                           setResult={setResult}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/calculate/logistics"
                     component={(browser) => (
                        <LogisticsOption1 browser={browser} />
                     )}
                  />
                  <Route
                     exact
                     path="/calculate/fastenings"
                     component={(browser) => (
                        <FasteningsOption1 browser={browser} />
                     )}
                  />

                  {/* COMPARE FLOW */}

                  <Route
                     exact
                     path="/compare/category"
                     component={(browser) => (
                        <CategoryOption2
                           browser={browser}
                           result={result}
                           setResult={setResult}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/compare/materials"
                     component={(browser) => (
                        <MaterialsOption1
                           browser={browser}
                           result={result}
                           setResult={setResult}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/compare/logistics"
                     component={(browser) => (
                        <LogisticsOption1 browser={browser} />
                     )}
                  />
                  <Route
                     exact
                     path="/compare/fastenings"
                     component={(browser) => (
                        <FasteningsOption1 browser={browser} />
                     )}
                  />

                  <Route
                     exact
                     path="/percentages"
                     component={(browser) => <Percentages browser={browser} />}
                  />
                  <Route
                     exact
                     path="/results"
                     component={(browser) => <Results browser={browser} />}
                  />
                  <Route
                     exact
                     path="/details"
                     component={(browser) => <Details browser={browser} />}
                  />

                  {/* ADMIN ROUTES */}

                  <Route
                     exact
                     path="/adminpage/login"
                     component={(browser) => <Admin browser={browser} />}
                  />
                  <Route
                     exact
                     path="/adminpage/forms"
                     component={(browser) => <AdminForms browser={browser} />}
                  />
               </Switch>
               <Footer />
            </div>
         </Router>
      </div>
   );
}

export default App;
