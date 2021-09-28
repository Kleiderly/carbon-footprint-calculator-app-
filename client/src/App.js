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
   const [result, setResult] = useState({ first: {}, second: {} });

   return (
      <div className="App">
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path="/" component={() => <Cover />} />
                  <Route exact path="/:choice" component={() => <Category />} />
                  <Route
                     exact
                     path="/:choice/materials"
                     component={() => <Materials />}
                  />
                  <Route
                     exact
                     path="/:choice/logistics"
                     component={() => <Logistics />}
                  />
                  <Route
                     exact
                     path="/:choice/fastenings"
                     component={() => <Fastenings />}
                  />
                  <Route
                     exact
                     path="/:choice/percentages"
                     component={() => <Percentages />}
                  />
                  <Route
                     exact
                     path="/:choice/results"
                     component={() => <Results />}
                  />
                  <Route
                     exact
                     path="/:choice/details"
                     component={() => <Details />}
                  />
                  {/* Admin routes */}
                  <Route exact path="/admin" component={() => <Admin />} />
                  <Route
                     exact
                     path="/admin/forms"
                     component={() => <AdminForms />}
                  />
               </Switch>
               <Footer />
            </div>
         </Router>
      </div>
   );
}

export default App;
