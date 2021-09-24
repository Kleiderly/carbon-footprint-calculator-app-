import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Cover from './components/Cover';
import Admin from './components/Admin';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
            <div>
              <Route exact path="/" component={Cover} />
              <Route exact path="/admin" component={Admin} />
            </div>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
