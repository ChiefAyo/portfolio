import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import SocialsSection from './components/SocialsSection';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SocialsSection />
        <Switch>
          <div className="main-container">
            <Route path='/' exact component = {Home}/>
          </div>
        </Switch>

      </Router>
    </>
  );
}

export default App;
