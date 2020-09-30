import React, { Component } from 'react'

import { funcAlerts } from '../utils/helper'

import './Todo.scss'
import IMG from '../assets/test.jpg'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h3>Todo</h3>
        <button onClick={funcAlerts}>alert</button>
        <img src={IMG} alt=""/>
      </div>
    )
  }
}
