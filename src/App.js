import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './containers/About';

import Todo from './components/Todo';

import styles from './App.css';
import Home from './containers/Home';
import NavBar from '@components/NavBar/NavBar';

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
        <button className={`${styles.btn}`} onClick={onClick}>
          Click
        </button>
      </Router>
    </>
  );
}
