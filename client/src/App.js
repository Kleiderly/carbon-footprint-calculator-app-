import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trial from './components/Trial';

function App() {

  return (
    <div className="App">
      <Router>
        <main className="wrapper">
          {/* <Header name="" /> */}
          <Switch>
            <Route exact path="/" component={Trial} />
          </Switch>
          {/* <Footer /> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
