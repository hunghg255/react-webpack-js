import React from 'react'

import Todo from './components/Todo'

import './App.css';

export default function App() {
  const onClick = () => {
    console.log('a');
  }
  return (
    <div>
      <Todo />
      <button onClick={onClick}>Click</button>
    </div>
  )
}
