import React, { Component, PropTypes } from 'react'
import logo from '../images/tuice_icon_256.png'

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="ant-row">
        <header id="header">
          <img src={logo} width="35" className="App-logo" alt="logo" />
        </header>
        <div className="main-wrapper">{this.props.children}</div>
      </div>
    )
  }
}
