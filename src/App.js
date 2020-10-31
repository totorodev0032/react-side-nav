import React from 'react';
// import { Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/products' component = {Product} />
          <Route path='/reports' component = {Reports} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
