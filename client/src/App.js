import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Components
import Header from './components/Header';
import Cover from './components/Cover';
import Admin from './components/Admin';
import AdminForms from './components/AdminForms';
import Materials from './components/Materials';
import Logistics from './components/Logistics';
import Fastenings from './components/Fastenings';
import Category from './components/Category';
import Details from './components/Details';
import Results from './components/Results';
import Footer from './components/Footer';
import Percentages from './components/Percentages';

function App() {
   const [result, setResult] = useState({
      itemTypeAdress1: null,
      countryCO2e1: null,
      materialCO2e1: null,
      fasteningCO2e1: null,
      itemTypeAdress2: '',
      countryCO2e2: null,
      materialCO2e2: null,
      fasteningCO2e2: null,
   });

   const saveTypeAdress = (result) => {
      setResult((result.itemTypeAdress1 = 'SpanchBob'));
      console.log(result.itemTypeAdress1);
   };

   return (
      <div className="App">
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path="/" component={() => <Cover />} />
                  <Route
                     exact
                     path="/:choice"
                     component={(browser) => (
                        <Category
                           browser={browser}
                           result={result}
                           saveTypeAdress={saveTypeAdress}
                        />
                     )}
                  />
                  <Route
                     exact
                     path="/:choice/materials"
                     component={(browser) => <Materials browser={browser} />}
                  />
                  <Route
                     exact
                     path="/:choice/logistics"
                     component={(browser) => <Logistics browser={browser} />}
                  />
                  <Route
                     exact
                     path="/:choice/fastenings"
                     component={(browser) => <Fastenings browser={browser} />}
                  />
                  <Route
                     exact
                     path="/:choice/percentages"
                     component={(browser) => <Percentages browser={browser} />}
                  />
                  <Route
                     exact
                     path="/:choice/results"
                     component={(browser) => <Results browser={browser} />}
                  />
                  <Route
                     exact
                     path="/:choice/details"
                     component={(browser) => <Details browser={browser} />}
                  />
                  {/* Admin routes */}
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
