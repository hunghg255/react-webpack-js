import React, { Component } from 'react'

import { funcAlerts } from '../utils/helper'

import styles from './Todo.scss'
import IMG from '../assets/test.jpg'
import IMG1 from '../assets/home/home.png'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h3 className={`${styles.h3}`}>Todo</h3>
        <button style={{ color: 'red' }} onClick={funcAlerts}>alert</button>
        <img src={IMG} alt=""/>
        <img src={IMG1} alt=""/>
      </div>
    )
  }
}
