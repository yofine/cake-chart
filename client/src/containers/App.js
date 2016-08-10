import React, { Component, PropTypes } from 'react'

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="ant-row">
        <header id="header"></header>
        <div className="main-wrapper">{this.props.children}</div>
      </div>
    )
  }
}
