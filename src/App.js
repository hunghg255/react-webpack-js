import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';

import Todo from './components/Todo';
import NavBar from './components/NavBar/NavBar';

import './App.css';

export default function App() {
  const onClick = () => {
    console.log('a');
  };
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Todo />
        <button onClick={onClick}>Click</button>
      </Router>
    </>
  );
}
